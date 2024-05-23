import React from 'react';
import styles from '../aboutus/aboutus.module.css';
import Navbar from '../navbar/navbar';
import Footer from "../footer/footer"

const AboutUs = () => {
  return (
    <div>
      <Navbar />
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>
        Welcome to our money expense splitting website! We are a team of passionate developers who believe in making personal finance management easy and accessible for everyone. Our mission is to help you split expenses with your friends, family, or roommates in a simple, fast, and secure way.
      </p>
      <p className={styles.description}>
        Our platform is built with the latest technologies, including Next.js and CSS, to ensure a seamless and modern user experience. We are committed to protecting your privacy and security, and we continuously improve our platform to meet your needs.
      </p>
      <p className={styles.description}>
        Thank you for choosing our website for your expense splitting needs. We hope you enjoy using our platform as much as we enjoyed building it!
      </p>
      <p className={styles.signature}>
        The Money Splitters Team
      </p>
      <div>
      <Footer />
      </div>
    </div>
    </div>
   
  );
};

export default AboutUs;