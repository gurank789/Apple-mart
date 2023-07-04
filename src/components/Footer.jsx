import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <ul className={styles.column}>
          <li><a href="#">Shop and Learn</a></li>
          <li><a href="#">Store</a></li>
          <li><a href="#">Mac</a></li>
          <li><a href="#">iPad</a></li>
          <li><a href="#">iPhone</a></li>
          <li><a href="#">Watch</a></li>
          {/* ... add more links */}
        </ul>
        <ul className={styles.column}>
          <li><a href="#">Entertainment</a></li>
          <li><a href="#">Apple One</a></li>
          <li><a href="#">Apple TV+</a></li>
          <li><a href="#">Apple Music</a></li>
          <li><a href="#">Apple Arcade</a></li>
          <li><a href="#">Apple Podcasts</a></li>
          {/* ... add more links */}
        </ul>
        <ul className={styles.column}>
          <li><a href="#">About Apple</a></li>
          <li><a href="#">Newsroom</a></li>
          <li><a href="#">Apple Leadership</a></li>
          <li><a href="#">Career Opportunities</a></li>
          <li><a href="#">Investors</a></li>
          <li><a href="#">Ethics & Compliance</a></li>
          {/* ... add more links */}
        </ul>
      </div>
      <div className={styles.row}>
        <p>More ways to shop: Find an Apple Store or other retailer near you. Or call 000800 040 1966.</p>
      </div>
      <div className={styles.row}>
        <p>India</p>
        <p>© 2023 Apple Inc. All rights reserved.</p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;