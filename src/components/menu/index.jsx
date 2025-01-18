'use client';
import React, { useState } from 'react';
import { gsap } from 'gsap';
import styles from './menu.module.scss'; // Import SCSS module

const Menu = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);

  // GSAP hover effect
  const hoverAnimation = (e) => {
    gsap.to(e.target, {
      scale: 1.1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const hoverOutAnimation = (e) => {
    gsap.to(e.target, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  // GSAP menu animations for dropdown
  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
    gsap.to('.dropdown-menu', {
      opacity: dropdownActive ? 0 : 1,
      duration: 0.5,
      y: dropdownActive ? -10 : 0,
    });
  };

  return (
    <nav className={styles.menu}>
      <div className={styles.logo}>My Logo</div>

      <div
        className={`${styles['menu-items']} ${menuActive ? styles.active : ''}`}
      >
        <div
          className={styles['menu-item']}
          onMouseEnter={hoverAnimation}
          onMouseLeave={hoverOutAnimation}
        >
          About
        </div>

        <div
          className={`${styles['menu-item']} ${styles.dropdown}`}
          onMouseEnter={hoverAnimation}
          onMouseLeave={hoverOutAnimation}
          onClick={toggleDropdown}
        >
          Creative Outlet/Portfolio
          <div className={styles['dropdown-menu']}>
            <div>Dance</div>
            <div>Teaching</div>
            <div>Gallery</div>
          </div>
        </div>

        <div
          className={styles['menu-item']}
          onMouseEnter={hoverAnimation}
          onMouseLeave={hoverOutAnimation}
        >
          Bookings
        </div>

        <div
          className={styles['menu-item']}
          onMouseEnter={hoverAnimation}
          onMouseLeave={hoverOutAnimation}
        >
          Collaborations
        </div>

        <div
          className={styles['menu-item']}
          onMouseEnter={hoverAnimation}
          onMouseLeave={hoverOutAnimation}
        >
          Blog/News
        </div>

        <div
          className={styles['menu-item']}
          onMouseEnter={hoverAnimation}
          onMouseLeave={hoverOutAnimation}
        >
          Contact me
        </div>
      </div>

      <div
        className={styles.hamburger}
        onClick={() => setMenuActive(!menuActive)}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </nav>
  );
};

export default Menu;
