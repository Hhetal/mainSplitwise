import React from 'react';
import Navbar from "../navbar/navbar";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import styles from '../contactus/contact.module.css';
import Footer from "../footer/footer"

const Contact = () => {
  return (
    <div>
    <Navbar />
    <div className={styles.contact}>
      <h1 className={styles.heading}>ContactUs</h1>
      <div className={styles.info}>
        <div className={styles.icon}>
          <FaPhone />
        </div>
        <div className={styles.text}>
          <p className={styles.label}>Phone</p>
          <p className={styles.value}>(+91) 12 3456 7890</p>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.icon}>
          <FaEnvelope />
        </div>
        <div className={styles.text}>
          <p className={styles.label}>Email</p>
          <p className={styles.value}>splitwise@gmail.com</p>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.icon}>
          <FaMapMarkerAlt />
        </div>
        <div className={styles.text}>
          <p className={styles.label}>Address</p>
          <p className={styles.value}>
            123 Splitwise Empire<br />
            Abc, India<br />
          </p>
          <div>
      <Footer />
      </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;