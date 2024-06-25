


"use client"
import Link from 'next/link';
import styles from '../navbar/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/"> Splitwise  </Link>
      </div>
      <ul className={styles.navUl}>
        <li className={styles.navLi}>
          <Link href="/homepage">Home</Link>
        </li>
        <li className={styles.navLi}>
          <Link href="/aboutus">About Us</Link>
        </li>
        <li className={styles.navLi}>
          <Link href="/contactus">Contact Us</Link>
        </li>
        <li className={styles.navLi}>
          <Link href="/expenseEntry">expense entry </Link>
        </li>
        <li className={styles.navLi}>
          <Link href="/Transaction">Transactions </Link>
        </li>
        <li className={`${styles.navLi} ${styles.dropdown}`}>
        <Link href="/splitmoney">Split Money</Link>
        <ul className={styles.dropdownMenu}>
        <li className={styles.subMenu}>
          <Link href="/splitmoney">Split Money 1</Link>
        </li>
        <li className={styles.subMenu}>
          <Link href="/splitmoney">Split Money 2</Link>
        </li>
        <li className={styles.subMenu}>
          <Link href="/splitmoney">Split Money 3</Link>
        </li>
        </ul>
        </li>
        <li className={styles.navLi}>
            <Link href="/app/groups/new">Create New Group</Link>
          </li>        
        <li className={styles.navLi}>
          <Link href="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

