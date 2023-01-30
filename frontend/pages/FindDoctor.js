import React from "react";
import Head from "next/head";
import Header from "../component/Header";
import styles from "../styles/findDoctor.module.css";
import Image from "next/image";
import FindRightDoctore from "../component/FindRightDoctore";
import ChatWithDoctore from "../component/ChatWithDoctore";

const FindDoctor = () => {
  return (
    <>
      <Head>
        <title>FindDoctor</title>
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
      <Header />
      <div className="row">
        <div className={styles.top_div}>
          <h1 className={styles.h1_top_text}>Your home for health</h1>
          <h2 className={styles.find_book_text}>Find and Book</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              marginTop: 30,
            }}
            className={styles.searchbar_div}
          >
            <button className={styles.location_button}>
              <span>Location</span>
            </button>
            <div className={styles.search_div}>
              <Image
                src={require("../assets/Images/Search.png")}
                className={styles.seaech_Image}
              />
            </div>
            <input
              placeholder="Search Doctore"
              className={styles.search_inpute}
            />
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{ backgroundColor: "#E6E6E6", paddingTop: 50 }}
      >
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
        <div
          className="col-md-5 col-lg-5 hidden-xs- hidden-sm"
          style={{ marginLeft: 60, marginTop: 60 }}
        >
          <div className="row">
            <p className={styles.paragraph_style}>
              Safety of your data is our top priority.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image src={require("../assets/Images/Green_Right.png")} />
              <p className={styles.check_item1}>Multi-level security checks</p>
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
              <p className={styles.check_item1}> Multiple data backups</p>
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
              <p className={styles.check_item1}>
                Stringent data privacy policies
              </p>
            </div>
            <button className={styles.read_more_button}>
              <span className={styles.read_more_text}>Read more </span>
            </button>
          </div>
        </div>
        <div className="col-md-4 col-lg-4 hidden-xs- hidden-sm">
          <Image
            src={require("../assets/Images/Doctore_Image.png")}
            style={{ float: "right", marginRight: 60 }}
          />
        </div>
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
      </div>
      <div
        className="row"
        style={{
          backgroundColor: "#E6E6E6",
          paddingTop: 50,
          paddingBottom: 30,
        }}
      >
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
        <div className="col-md-10 col-lg-10 hidden-xs- hidden-sm">
          <div className="row">
            <div className="col-md-3 col-lg-3 hidden-xs- hidden-sm">
              <div className={styles.image_background_div}>
                <Image
                  src={require("../assets/Images/SafteyData/SafteyData2.png")}
                  style={{
                    width: 80,
                    height: 80,
                    alignSelf: "center",
                    float: "right",
                  }}
                />
              </div>
              <p className={styles.saftey_image_text1}>Title Here</p>
              <p className={styles.saftey_image_text2}>Title Here</p>
            </div>
            <div className="col-md-3 col-lg-3 hidden-xs- hidden-sm">
              <div className={styles.image_background_div}>
                <Image
                  src={require("../assets/Images/SafteyData/SafteyData2.png")}
                  style={{
                    width: 80,
                    height: 80,
                    alignSelf: "center",
                    float: "right",
                  }}
                />
              </div>
              <p className={styles.saftey_image_text1}>Title Here</p>
              <p className={styles.saftey_image_text2}>Title Here</p>
            </div>
            <div className="col-md-3 col-lg-3 hidden-xs- hidden-sm">
              <div className={styles.image_background_div}>
                <Image
                  src={require("../assets/Images/SafteyData/SafteyData3.png")}
                  style={{
                    width: 80,
                    height: 80,
                    alignSelf: "center",
                    float: "right",
                  }}
                />
              </div>
              <p className={styles.saftey_image_text1}>Title Here</p>
              <p className={styles.saftey_image_text2}>Title Here</p>
            </div>
            <div className="col-md-3 col-lg-3 hidden-xs- hidden-sm">
              <div className={styles.image_background_div}>
                <Image
                  src={require("../assets/Images/SafteyData/SafteyData4.png")}
                  style={{
                    width: 80,
                    height: 80,
                    alignSelf: "center",
                    float: "right",
                  }}
                />
              </div>
              <p className={styles.saftey_image_text1}>Title Here</p>
              <p className={styles.saftey_image_text2}>Title Here</p>
            </div>
          </div>
        </div>
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
      </div>
      <FindRightDoctore />

      <div
        className="row"
        style={{
          paddingTop: 30,
          paddingBottom: 30,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#E6E6E6",
          marginTop: 30,
        }}
      >
        <div className="col-1"></div>
        {/* <div className="col-10"> */}
        <div className="row" style={{ display: "flex", flexDirection: "row",marginLeft:200 }}>
          <div
            className="col-3"
            style={{
              backgroundColor: "#FFFFFF",
              width: 270,
              height: 94,
              borderRadius: 14,
              boxShadow: 10,
              marginLeft: 70,
            }}
          ></div>
          <div
            className="col-3"
            style={{
              backgroundColor: "#FFFFFF",
              width: 270,
              height: 94,
              borderRadius: 14,
              boxShadow: 10,
              marginLeft: 20,
            }}
          ></div>

          <div
            className="col-3"
            style={{
              backgroundColor: "#FFFFFF",
              width: 270,
              height: 94,
              borderRadius: 14,
              boxShadow: 10,
              marginLeft: 20,
            }}
          ></div>
          <div
            className="col-3"
            style={{
              backgroundColor: "#FFFFFF",
              width: 270,
              height: 94,
              borderRadius: 14,
              boxShadow: 10,
              marginLeft: 20,
            }}
          ></div>
        </div>
        {/* </div> */}
        <div className="col-1"></div>
      </div>
      <div
        className="row"
        style={{
          backgroundColor: "#FFFFFF",
          paddingTop: 10,
          paddingBottom: 60,
        }}
      >
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
        <div
          className="col-md-5 col-lg-5 hidden-xs- hidden-sm"
          style={{ marginTop: 70 }}
        >
          <Image
            src={require("../assets/Images/Doctore_Pana.png")}
            style={{
              float: "right",
              alignSelf: "flex-end",
              justifyContent: "flex-end",
            }}
          />
        </div>
        <div
          className="col-md-4 col-lg-4 hidden-xs- hidden-sm"
          style={{ marginTop: 60, marginLeft: 20 }}
        >
          <div className="row" style={{ float: "left" }}>
            <p className={styles.paragraph_style}>
              Skip the waiting room. Consult with a doctor
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image src={require("../assets/Images/Green_Right.png")} />
              <p className={styles.check_item1}>Fees starting at ₹99</p>
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
              <p className={styles.check_item1}>
                Verified doctors respond in 5 minutes
              </p>
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
              <p className={styles.check_item1}>
                100% Private and confidential
              </p>
            </div>
            <button className={styles.Consult_now}>
              <span className={styles.read_more_text}>Consult Now</span>
            </button>
          </div>
        </div>
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
      </div>
      <div
        className="row"
        style={{ backgroundColor: "#E6E6E6", paddingTop: 40 }}
      >
        <span className={styles.read_health_articale}>
          Read top articles from health experts
        </span>
      </div>
      <div
        className="row"
        style={{
          backgroundColor: "#E6E6E6",
          paddingTop: 30,
          paddingBottom: 40,
        }}
      >
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
        <div className="col-md-10 col-lg-10 hidden-xs- hidden-sm">
          <div className="row">
            <div className="col-md-4 col-lg-4 hidden-xs- hidden-sm">
              <div className={styles.read_articale_div}>
                <Image
                  src={require("../assets/Images/ReadArticale/Rectangle1.png")}
                  style={{ marginLeft: -4, marginTop: -4, marginBottom: 10 }}
                />

                <span className={styles.read_article_text}>Title here</span>
                <br />
                <span className={styles.read_article_text2}>Title here</span>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 hidden-xs- hidden-sm">
              <div className={styles.read_articale_div}>
                <Image
                  src={require("../assets/Images/ReadArticale/Rectangle2.png")}
                  style={{ marginLeft: -4, marginTop: -4, marginBottom: 10 }}
                />

                <span className={styles.read_article_text}>Title here</span>
                <br />
                <span className={styles.read_article_text2}>Title here</span>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 hidden-xs- hidden-sm">
              <div className={styles.read_articale_div}>
                <Image
                  src={require("../assets/Images/ReadArticale/Rectangle3.png")}
                  style={{ marginLeft: -4, marginTop: -4, marginBottom: 10 }}
                />

                <span className={styles.read_article_text}>Title here</span>
                <br />
                <span className={styles.read_article_text2}>Title here</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
      </div>
      <FindRightDoctore />
      <div style={{ marginTop: 50 }}>
        <ChatWithDoctore />
      </div>
      <div
        className="row"
        style={{
          paddingTop: 140,
          paddingBottom: 170,
          backgroundColor: "#FFFFFF",
        }}
      >
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
        <div className="col-md-10 col-lg-10 hidden-xs- hidden-sm">
          <div className="row">
            <div
              className="col-md-6 col-lg-6 hidden-xs- hidden-sm"
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center", 
              }}
            >
              <Image
                src={require("../assets/Images/HealthExper/HealthExper1.png")}
                style={{ marginRight: 30 }}
              />
              <Image
                src={require("../assets/Images/HealthExper/HealthExper2.png")}
                style={{ marginLeft: 30 }}
              />
            </div>
            <div className="col-md-6 col-lg-6 hidden-xs- hidden-sm">
              <div className="row">
                <p className={styles.health_expert_text1}>
                  Read top articles from health experts
                </p>
                <p className={styles.health_expert_text2}>
                  Health articles that keep you informed about good health
                  practices and achieve your goals.
                </p>
                <button className={styles.view_all_button}>
                  <span className={styles.view_all_text}>View All</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
      </div>
    </>
  );
};

export default FindDoctor;
