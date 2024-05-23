"use client";
import React from "react";
import Navbar from "../navbar/navbar";
import styles from "../homepage/homepage.module.css"
import Image from 'next/image';
import getimage from "../../../images/2homepage.jpg";
import gif from "../../../images/GIFmain.gif";
import Footer from "../footer/footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Split expenses with your friends and family, effortlessly.
        </h1>
        <p className={styles.quote}>
          "Money splitting made easy, so you can focus on what matters most."
        </p>
      </div>
      <div className={styles.imageA}>
        {/* <Image src={getimage} alt="Not found.." className={styles.imageB} width={550} height={630} */}
        <Image src={gif} alt="Not found.." className={styles.imageB} width={350} height={230} 
        />
        <div>
      <Footer />
      </div>
      </div>
    </div>
  );
};

export default Home;

