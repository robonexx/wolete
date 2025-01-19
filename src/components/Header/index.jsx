'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import styles from './Header.module.scss';

const navItems = [
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Creative Outlet',
    subItems: [
      { label: 'DANCE', path: '/portfolio/dance' },
      { label: 'TEACHING', path: '/portfolio/teaching' },
      { label: 'GALLERY', path: '/portfolio/gallery' },
    ],
  },
  {
    label: 'Bookings',
    path: '/bookings',
  },
  {
    label: 'Collaborations',
    subItems: [
      { label: 'Y3nko Project', path: '/collaborations/y3nko-project' },
      { label: 'Ubuntu Base', path: '/collaborations/ubuntu-base' },
      { label: 'Blackout Family', path: '/collaborations/blackout-family' },
    ],
  },
  {
    label: 'Blog/News',
    path: '/blog',
  },
  {
    label: 'Contact me',
    path: '/contact',
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const hamburgerRef = useRef(null);
  const lineTopRef = useRef(null);
  const lineBottomRef = useRef(null);
  const menuOverlayRef = useRef(null);
  const menuLinksRef = useRef([]);
  const desktopLinksRef = useRef([]);
  const logoRef = useRef([null]);

  const isDesktop = () => window.innerWidth >= 1024;

  useEffect(() => {
    if (!logoRef.current) return;

    gsap.fromTo(
      logoRef.current,
      { y: -200, opacity: 0 }, // Start position off-screen and hidden
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: 'power3.out', // Smooth easing
      }
    );
  }, []);

  // Animate hamburger lines
  useEffect(() => {
    if (!lineTopRef.current || !lineBottomRef.current) return;

    if (menuOpen) {
      gsap.to(lineTopRef.current, {
        y: 9,
        rotation: 45,
        duration: 0.4,
        transformOrigin: 'center',
      });
      gsap.to(lineBottomRef.current, {
        y: -9,
        rotation: -45,
        duration: 0.4,
        transformOrigin: 'center',
      });
    } else {
      gsap.to([lineTopRef.current, lineBottomRef.current], {
        y: 0,
        rotation: 0,
        duration: 0.4,
      });
    }
  }, [menuOpen]);

  // Animate the fullscreen menu overlay
  useEffect(() => {
    if (!menuOverlayRef.current) return;

    if (menuOpen) {
      gsap.to(menuOverlayRef.current, {
        x: 0,
        autoAlpha: 1,
        duration: 0.5,
        ease: 'power3.out',
      });
      gsap.from(menuLinksRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.2,
        ease: 'power3.out',
      });
    } else {
      gsap.to(menuOverlayRef.current, {
        x: '100%',
        autoAlpha: 0,
        duration: 0.5,
        ease: 'power3.in',
      });
    }
  }, [menuOpen]);

  // Animate desktop links on load or resize
  useEffect(() => {
    const animateDesktopLinks = () => {
      if (isDesktop() && !menuOpen) {
        gsap.fromTo(
          desktopLinksRef.current,
          { y: -50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
          }
        );
      }
    };

    // Trigger on mount
    animateDesktopLinks();

    // Add resize listener
    window.addEventListener('resize', animateDesktopLinks);

    return () => {
      window.removeEventListener('resize', animateDesktopLinks);
    };
  }, [menuOpen]);

  const handleDropdownClick = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const renderSubItems = (subItems) => (
    <ul className={styles.dropdownList}>
      {subItems.map((sub, idx) => (
        <li key={idx}>
          <Link href={sub.path ?? '#'}>{sub.label}</Link>
        </li>
      ))}
    </ul>
  );

  return (
    <header className={styles.header}>
      <div className={styles.logo} ref={logoRef}>
        <Link href='/'>
          {' '}
          <img src='/logowolete.png' alt='wolete logo' />
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className={styles.desktopNav}>
        <ul className={styles.navList}>
          {navItems.map((item, index) => {
            const hasSubItems = item.subItems && item.subItems.length > 0;
            return (
              <li
                key={index}
                ref={(el) => (desktopLinksRef.current[index] = el)}
                className={hasSubItems ? styles.hasDropdown : ''}
              >
                {item.path ? (
                  <Link href={item.path}>{item.label}</Link>
                ) : (
                  <span>{item.label}</span>
                )}
                {hasSubItems && (
                  <div className={styles.dropdownMenu}>
                    {renderSubItems(item.subItems)}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Hamburger Button */}
      <button
        ref={hamburgerRef}
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span
          ref={lineTopRef}
          className={`${styles.line} ${menuOpen ? styles.open : ''}`}
        />
        <span
          ref={lineBottomRef}
          className={`${styles.line} ${menuOpen ? styles.open : ''}`}
        />
      </button>

      {/* Mobile Overlay */}
      <div ref={menuOverlayRef} className={styles.mobileOverlay}>
        <ul className={styles.mobileNavList}>
          {navItems.map((item, index) => {
            const hasSubItems = item.subItems && item.subItems.length > 0;
            return (
              <li
                key={index}
                ref={(el) => (menuLinksRef.current[index] = el)}
                className={styles.mobileNavItem}
              >
                {!hasSubItems && item.path && (
                  <Link href={item.path}>{item.label}</Link>
                )}
                {hasSubItems && (
                  <>
                    <div
                      className={styles.mobileDropdownToggle}
                      onClick={() => handleDropdownClick(item.label)}
                    >
                      {item.label}
                      <span className={styles.arrow}>
                        {activeDropdown === item.label ? '▲' : '▼'}
                      </span>
                    </div>
                    {activeDropdown === item.label && (
                      <div className={styles.mobileDropdownMenu}>
                        {renderSubItems(item.subItems)}
                      </div>
                    )}
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
