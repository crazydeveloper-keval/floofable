import React from "react";
import styles from "../styles/FooterDiv.module.css";
import Head from "next/head";
import Image from "next/image";

const FooterDiv = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        className="row"
        style={{
          margin: 60,
          background: "#EFEFEF",
          borderRadius: 12,
          paddingTop: 60,
        }}
      >
        <div className="col-md-5 col-lg-5 hidden-xs- hidden-sm">
          <Image
            src={require("../assets/Images/Phone_image.png")}
            style={{
              width: 350,
              height: 300,
              float: "right",
              marginRight: 50,
              mixBlendMode: "multiply",
            }}
          />
        </div>
        <div className="col-md-7 col-lg-7 hidden-xs- hidden-sm">
          <span className={styles.download_text}>Download the Practo app</span>
          <br />
          <span className={styles.comprehensive_information_text}>
            COMPREHENSIVE INFORMATION
          </span>
          <br />
          <div style={{ paddingTop: 20 }}>
            <p className={styles.footer_paragraph_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              neque
              <br />
              a ornare nunc. Interdum ipsum volutpat augue sed et. Quis id elit
              <br />
              sed aenean adipiscing blandit elit. Sed a dictumst elit aliquam
              leo est.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterDiv;
