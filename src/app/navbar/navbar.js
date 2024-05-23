// "use cilent"
// import Link from 'next/link';
// import styles from './Navbar.module.css';

// const Navbar = () => {
//   return (
//     <nav className={styles.navbar} style={{ backgroundColor: "#352620" }}>
//       <div className={styles.logo}>
//         <Link href="/"> Splitwise  </Link>
//       </div>
//       <ul className={styles.navLinks}>
//         <li>
//           <Link href="/homepage">Home
//           </Link>
//         </li>
//         <li>
//           <Link href="/aboutus">About Us
//           </Link>
//         </li>
//         <li>
//           <Link href="/contactus">Contact Us</Link>
//         </li>
//         <li>
//         <Link href="/expences">Expenses</Link>
//       </li>
//         <li>
//           <Link href="/profile">Profile</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


"use client"
import Link from 'next/link';
import styles from '../navbar/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/"> Splitwise  </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/homepage">Home</Link>
        </li>
        <li>
          <Link href="/aboutus">About Us</Link>
        </li>
        <li>
          <Link href="/contactus">Contact Us</Link>
        </li>
        <li>
          <Link href="/splitmoney">Split Money</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

