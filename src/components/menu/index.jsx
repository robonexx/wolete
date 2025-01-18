'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import styles from './menu.module.scss';

const navItems = [
  {
    label: 'About',
    subItems: [{ label: 'Info', path: '/about/info' }],
  },
  {
    label: 'Creative Outlet/Portfolio',
    subItems: [
      { label: 'DANCE', path: '/portfolio/dance' },
      { label: 'TEACHING', path: '/portfolio/teaching' },
      { label: 'GALLERY', path: '/portfolio/gallery' },
    ],
  },
  {
    label: 'Bookings',
    subItems: [
      { label: 'Weekly', path: '/bookings/weekly' },
      { label: 'privates', path: '/bookings/privates' },
      { label: 'workshop', path: '/bookings/workshop' },
    ],
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

  // Animate hamburger lines (2 lines => X)
  useEffect(() => {
    if (!lineTopRef.current || !lineBottomRef.current) return;

    if (menuOpen) {
      // Turn lines into an X
      gsap.to(lineTopRef.current, {
        y: 9,
        rotation: 45,
        duration: 0.4,
        transformOrigin: 'center',
      });
      gsap.to(lineBottomRef.current, {
        y: -9, // shift bottom line up
        rotation: -45,
        duration: 0.4,
        transformOrigin: 'center',
      });
    } else {
      // Restore lines
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
      // Slide in + fade in
      gsap.to(menuOverlayRef.current, {
        x: 0,
        autoAlpha: 1,
        duration: 0.5,
        ease: 'power3.out',
      });
      // Stagger in menu items
      gsap.from(menuLinksRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.2,
        ease: 'power3.out',
      });
    } else {
      // Slide out + fade out
      gsap.to(menuOverlayRef.current, {
        x: '100%',
        autoAlpha: 0,
        duration: 0.5,
        ease: 'power3.in',
      });
    }
  }, [menuOpen]);

  const handleDropdownClick = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const renderSubItems = (subItems) => {
    return (
      <ul className={styles.dropdownList}>
        {subItems.map((sub, idx) => (
          <li key={idx}>
            <Link href={sub.path ?? '#'}>{sub.label}</Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header className={styles.header}>
      {/* LOGO */}
      <div className={styles.logo}>
        <Link href='/'>LOGO</Link>
      </div>

      {/* Desktop Nav */}
      <nav className={styles.desktopNav}>
        <ul className={styles.navList}>
          {navItems.map((item, index) => {
            const hasSubItems = item.subItems && item.subItems.length > 0;
            return (
              <li key={index} className={hasSubItems ? styles.hasDropdown : ''}>
                {item.path ? (
                  <Link href={item.path}>{item.label}</Link>
                ) : (
                  <span>{item.label}</span>
                )}

                {/* Hover dropdown on desktop */}
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

      {/* Hamburger Button (Mobile Only) */}
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

      {/* Fullscreen Overlay (Mobile) */}
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
                {/* If no sub-items, just link */}
                {!hasSubItems && item.path && (
                  <Link href={item.path}>{item.label}</Link>
                )}

                {/* If sub-items, expand/collapse on click */}
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
