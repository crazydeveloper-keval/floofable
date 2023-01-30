import React, { useState } from "react";
import Head from "next/head";
import Header from "../component/Header";
import styles from "../styles/home.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  title_here,
  health_concern,
  loripipsome_array,
  slider_paragraph,
} from "../Constant/Array";
import Link from "next/link";
import FooterDiv from "../component/FooterDiv";

const Home = () => {
  const router = useRouter();
  const [currentSliderval, setCurrentSliderval] = useState(0);

  const setCurrentSlider = (index, key) => {
    console.log("index::", index);
    console.log("currentSliderval::", currentSliderval);
    // let current_val;
    // alert(index);
    if (key === "Next") {
      if (index < slider_paragraph.length - 1) {
        setCurrentSliderval(currentSliderval + 1);
      } else {
        setCurrentSlider(index);
      }
    } else if (key === "Previous") {
      if (index > 0) {
        setCurrentSliderval(currentSliderval - 1);
      } else {
        setCurrentSlider(index);
      }
    }
  };
  return (
    <>
      <Head>
        <title>Home</title>
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
      <div
        className="row"
        style={{ paddingTop: 20, paddingBottom: 20, marginLeft: -20 }}
      >
        <div className="col-md-1 col-lg-1 col-xs-1 col-sm-1"></div>
        <div className="col-md-10 col-lg-10 cl-xs-10 col-sm-10">
          <div className={styles.title_here_main_div}>
            <div
              className="row"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <div className="col-md-6 col-lg-6 cl-xs-6 col-sm-6">
                <span className={styles.titlehere_text}>Title Here</span>
                <br />
                <span className={styles.paragraph_text}>
                  sub title heresub title heresub title heresub title heresu
                  title heresub title heresub title heresub title heresub title
                  heresub title title heresub title heresub title title heresub
                  title heresub titlea title heresub title heresub title title
                  heresub title heresub
                </span>
                <br />
                <div className="row">
                  <button className={styles.loginhere_button}>
                    <span className={styles.loginhere_button_text}>
                      Login Here
                    </span>
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 cl-xs-6 col-sm-6">
                <Image
                  src={require("../assets/Images/AmicoImage.png")}
                  className={styles.anico_image}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
      </div>
      {/* health_consult first array */}
      <div className="row" style={{ marginLeft: -20 }}>
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
        <div className="col-md-10 col-lg-10 hidden-xs- hidden-sm">
          <div className="row">
            {title_here.map((mapItem) => {
              return (
                <div
                  className="col-md-3 col-lg-3 hidden-xs- hidden-sm"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className={styles.horizontalitem_div}>
                    <Image src={mapItem.img} />
                    <br />
                    <span className={styles.title_text}>{mapItem.name}</span>
                    <br />
                    <span className={styles.subtitle_text}>
                      {mapItem.sub_title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      {/* health_consult view all div */}
      <div className="row" style={{ marginTop: 50 }}>
        <div className="col-1"></div>
        <div className="col-7">
          <span className={styles.helthconcern_text}>
            Consult top doctors online for any health concern
          </span>
          <br />
          <span className={styles.helthconcern_core_text}>
            Private online consultations with verified doctors in all
            specialists
          </span>
        </div>
        <div className="col-3">
          <div className="row">
            <button
              className={styles.view_all_button}
              onClick={() => router.push("/Product")}
            >
              <span className={styles.view_all_text}>View All</span>
            </button>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      {/* health_consult array second loop */}
      <div className="row" style={{ marginLeft: -20 }}>
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
        <div className="col-md-10 col-lg-10 hidden-xs- hidden-sm">
          <div
            className="row"
            style={{
              padding: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {health_concern.map((mapItem) => {
              return (
                <div
                  className="col-md-2 col-lg-2 hidden-xs- hidden-sm"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className={styles.horizontalitem_healthconcern_div}>
                    <Image
                      src={mapItem.img}
                      // style={{ width: 150, height: 150 }}
                    />
                    <br />
                    <div style={{ marginTop: 10, textAlign: "center" }}>
                      <span className={styles.healthconcern_title_text}>
                        {mapItem.name}
                      </span>
                      <br />
                      <span className={styles.healthconcern_subtitle_text}>
                        {mapItem.sub_title}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
      </div>
      {/* health_consult simple text */}
      <div className="row" style={{ marginTop: 70 }}>
        <div className="col-1"></div>
        <div className="col-7">
          <span className={styles.helthconcern_text}>
            Consult top doctors online for any health concern
          </span>
          <br />
          <span className={styles.helthconcern_core_text}>
            Private online consultations with verified doctors in all
            specialists
          </span>
        </div>
        <div className="col-3"></div>
        <div className="col-1"></div>
      </div>
      {/* Lorepipsum dummy text div */}
      <div className="row" style={{ marginTop: 40 }}>
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
        <div className="col-md-10 col-lg-10 hidden-xs- hidden-sm">
          <div
            className="row"
            style={{
              justifyContent: "center",
            }}
          >
            {loripipsome_array.map((mapItem) => {
              return (
                <div
                  className="col-md-4 col-lg-4 hidden-xs- hidden-sm"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className={styles.loripipsome_main_div}>
                    <Image src={mapItem.img} />
                    {/* <br /> */}
                    <div
                      style={{
                        marginTop: 15,
                        textAlign: "justify",
                        alignSelf: "flex-start",
                        marginRight: 25,
                      }}
                    >
                      <span className={styles.loripipsome_title_text}>
                        {mapItem.name}
                      </span>
                      <br />

                      <span className={styles.loripipsome_subtitle_text}>
                        {mapItem.sub_title}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
      </div>
      {/* top artical read div */}
      <div className="row" style={{ marginTop: 50 }}>
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>

        <div
          className="col-md-5 col-lg-5 hidden-xs- hidden-sm"
          style={{ paddingTop: 60 }}
        >
          <span className={styles.expert_header_text}>
            Read top articles from health experts
          </span>
          <br />
          <span className={styles.expert_paragraph_text}>
            Health articles that keep you informed about good health practices
            and achieve
            <br /> and achieve your goals.
          </span>
          <br />
          {/* <div className="row"> */}
          <button className={styles.expert_viewall_button}>
            <span className={styles.view_all_text}>View All</span>
          </button>
          {/* </div> */}
        </div>
        <div
          className="col-md-5 col-lg-5 hidden-xs- hidden-sm"
          style={{
            alignItems: "center",
            justifyContent: "flex-end",
            padding: 50,
            // display: "flex",
          }}
        >
          <Image
            src={require("../assets/Images/Expert_image/Expert_image1.png")}
            style={{ width: 260, height: 260 }}
          />
          <Image
            src={require("../assets/Images/Expert_image/Expert_image2.png")}
            style={{ width: 260, height: 260, marginLeft: 20 }}
          />
        </div>
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
      </div>
      {/* slider div */}
      <div className="row" style={{ paddingBottom: 40 }}>
        <span className={styles.oneline_text}>What our users have to say</span>
      </div>
      {slider_paragraph.map((item, index) => {
        return (
          <>
            {index === currentSliderval ? (
              <div className="row">
                <div className="col-md-3 col-lg-3 hidden-xs- hidden-sm">
                  <button
                    onClick={() => setCurrentSlider(index, "Previous")}
                    style={{
                      float: "right",
                      mixBlendMode: "multiply",
                      backgroundColor: "white",
                      borderWidth: 0,
                    }}
                  >
                    <Image
                      src={require("../assets/Images/LeftArrow.png")}
                      style={{ marginRight: 200, marginTop: 20 }}
                    />
                  </button>
                </div>
                <div className="col-md-6 col-lg-6 hidden-xs- hidden-sm">
                  <span className={styles.multiline_text}>
                    {item.paragraph}
                    {/* “ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quis neque a ornare nunc. Interdum ipsum volutpat augue sed
                    et. Quis id elit sed aenean adipiscing blandit elit.” */}
                  </span>
                </div>

                <div className="col-md-3 col-lg-3 hidden-xs- hidden-sm">
                  <button
                    onClick={() => setCurrentSlider(index, "Next")}
                    style={{
                      mixBlendMode: "multiply",
                      backgroundColor: "white",
                      borderWidth: 0,
                    }}
                  >
                    <Image
                      src={require("../assets/Images/RightArrow.png")}
                      style={{ marginLeft: 200, marginTop: 10 }}
                    />
                  </button>
                </div>
              </div>
            ) : null}
          </>
        );
      })}
      <div className="row">
        <div className="col-md-4 col-lg-4 hidden-xs- hidden-sm"></div>
        <div className="col-md-4 col-lg-4 hidden-xs- hidden-sm">
          <div className="row" style={{ justifyContent: "center" }}>
            {slider_paragraph.map((item, index) => {
              return (
                <button
                  className={styles.slider_circle_button}
                  style={{
                    mixBlendMode: "multiply",
                    backgroundColor:
                      index === currentSliderval ? "#D9D9D9" : "white",
                    display: "flex",
                    // opacity:0.7
                  }}
                  onClick={() => setCurrentSliderval(index)}
                ></button>
              );
            })}
          </div>
        </div>
        <div className="col-md-4 col-lg-4 hidden-xs- hidden-sm"></div>
      </div>
      ;
      <div className="row">
        <span className={styles.oneline_text}>John Doe</span>
      </div>
      <FooterDiv />
    </>
  );
};
export default Home;
