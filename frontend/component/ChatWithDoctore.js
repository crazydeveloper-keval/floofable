import React from "react";
import Head from "next/head";
import styles from "../styles/ChatWithDoctore.module.css";
import Image from "next/image";

const ChatWithDoctore = (props) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
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
      <div className="row" style={{ paddingTop: 30 }}>
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
        <div className="col-md-5 col-lg-5 hidden-xs- hidden-sm">
          <p className={styles.introduction_consultation}>
            INTRODUCING CONSULTATION
          </p>
          <p className={styles.introducttion_consultation_paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi metus
            amet facilisis est.
          </p>
          <div className="col-md-12 col-lg-12 hidden-xs- hidden-sm">
            <div className={styles.chatwithdoctore_image_div}>
              <div>
                <Image
                  src={require("../assets/Images/ChatWithDoctore/ChatWithDoctore1.png")}
                  className={styles.chatwithdoctore_image}
                />
              </div>
              <div className={styles.chatwithdoctore_imagetext_div}>
                <p className={styles.chat_with_A}>Chat with a </p>
                <p className={styles.doctore}>DOCTORE</p>
              </div>
            </div>
          </div>
          <button
            style={{
              mixBlendMode: "multiply",
              backgroundColor: "white",
              borderWidth: 0,
            }}
            onClick={() => props.chatWithDoctore()}
          >
            <Image
              src={require("../assets/Images/ChatWithDoctore/CircleArrow.png")}
              style={{ marginLeft: 50 }}
            />
          </button>
        </div>
        <div className="col-md-5 col-lg-5 hidden-xs- hidden-sm">
          <p className={styles.introduction_consultation}>
            INTRODUCING CONSULTATION
          </p>
          <p className={styles.introducttion_consultation_paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi metus
            amet facilisis est.
          </p>
          <div className="col-md-12 col-lg-12 hidden-xs- hidden-sm">
            <div className={styles.chatwithdoctore_image_div}>
              <div>
                <Image
                  src={require("../assets/Images/ChatWithDoctore/ChatWithDoctore2.png")}
                  className={styles.chatwithdoctore_image}
                />
              </div>
              <div className={styles.chatwithdoctore_imagetext_div}>
                <p className={styles.chat_with_A}>Chat with a </p>
                <p className={styles.doctore}>DOCTORE</p>
              </div>
            </div>
          </div>
          <button
            style={{
              mixBlendMode: "multiply",
              backgroundColor: "white",
              borderWidth: 0,
            }}
          >
            <Image
              src={require("../assets/Images/ChatWithDoctore/CircleArrow.png")}
              style={{ marginLeft: 50 }}
            />
          </button>
        </div>
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
      </div>
    </>
  );
};
export default ChatWithDoctore;
