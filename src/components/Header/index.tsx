/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from './styles.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
      <img src="/images/logo.svg" alt="Logo" />
      <ul className={styles.links}>
        <li>Home</li>
        <li>Features</li>
        <li>Service</li>
        <li>Listed</li>
        <li>Contact</li>
      </ul>

      <div className={styles.actions}>
        <button>Sign Up</button>
        <button> Register</button>
      </div>
    </header>
  );
}
