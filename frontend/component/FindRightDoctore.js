import React from "react";
import Head from "next/head";
import styles from "../styles/findRightDoctore.module.css";
import Image from "next/image";

const FindRightDoctore = () => {
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
        style={{ backgroundColor: "#FFFFFF", paddingTop: 50 }}
      >
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
        <div
          className="col-md-5 col-lg-5 hidden-xs- hidden-sm"
          style={{ marginLeft: 60, marginTop: 60 }}
        >
          <div className="row">
            <p className={styles.paragraph_style}>
              Instant appointment with doctors.Guaranteed.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image src={require("../assets/Images/Green_Right.png")} />
              <p className={styles.check_item1}>100,000 Verified doctors</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: -10,
              }}
            >
              <Image src={require("../assets/Images/Green_Right.png")} />
              <p className={styles.check_item1}> 3M+ Patient recommendations</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: -12,
              }}
            >
              <Image src={require("../assets/Images/Green_Right.png")} />
              <p className={styles.check_item1}>25M Patients/year</p>
            </div>
            <button className={styles.find_the_right_doctor}>
              <span className={styles.read_more_text}>
                Find the right doctor
              </span>
            </button>
          </div>
        </div>
        <div className="col-md-4 col-lg-4 hidden-xs- hidden-sm">
          <Image
            src={require("../assets/Images/Doctore.png")}
            style={{ float: "right", marginRight: 60 }}
          />
        </div>
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
      </div>
    </>
  );
};

export default FindRightDoctore;
