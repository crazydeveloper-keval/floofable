import Head from "next/head";
import Header from "../component/Header";
import Image from "next/image";
import styles from "../styles/product.module.css";
import {
  product_details,
  browser_pet_product,
  slider_paragraph,
} from "../Constant/Array";
import ChatWithDoctore from "../component/ChatWithDoctore";
import FooterDiv from "../component/FooterDiv";
import { useRouter } from "next/router";

const Product = () => {
  const Route = useRouter();
  return (
    <>
      <Head>
        <title>Product</title>
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
      <div style={{ marginBottom: -17 }}>
        <Header />
      </div>
      {product_details.map((item, index) => {
        return (
          <>
            {index === 1 ? (
              <div
                className="row"
                style={{
                  backgroundColor: "#EDB506",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm">
                  <button
                    // onClick={() => setCurrentSlider(ndex, "Previous")}
                    style={{
                      mixBlendMode: "multiply",
                      backgroundColor: "white",
                      borderWidth: 0,
                      marginLeft: 40,
                    }}
                  >
                    <Image src={require("../assets/Images/Left.png")} />
                  </button>
                </div>
                <div
                  className="col-md-7 col-lg-7 hidden-xs- hidden-sm"
                  style={{
                    paddingTop: 50,
                    paddingBottom: 50,
                  }}
                >
                  <div className={styles.paddingRight}>
                    <span className={styles.title_here_text}>{item.name}</span>
                    <br />
                    <p className={styles.subtitle_text}>{item.sub_title}</p>
                  </div>
                </div>
                <div className="col-md-3 col-lg-3 hidden-xs- hidden-sm">
                  <Image src={item.img} />
                </div>
                <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm">
                  <button
                    // onClick={() => setCurrentSlider(index, "Previous")}
                    style={{
                      mixBlendMode: "multiply",
                      backgroundColor: "white",
                      borderWidth: 0,
                      marginLeft: 10,
                    }}
                  >
                    <Image src={require("../assets/Images/Right.png")} />
                  </button>
                </div>
              </div>
            ) : null}
          </>
        );
      })}

      <div className="row" style={{ marginTop: 40 }}>
        <div className="col-1"></div>
        <div className="col-10">
          <span className={styles.browser_text}>Browse pet and products</span>
        </div>
        <div className="col-1"></div>
      </div>

      {browser_pet_product.map((outItem, outIndex) => {
        return (
          <>
            <div className="row" style={{ marginTop: 10, marginBottom: 10 }}>
              <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
              <div className="col-md-10 col-lg-10 hidden-xs- hidden-sm">
                <span className={styles.outerItem_title}>{outItem.name}</span>
              </div>
              <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
            </div>
            <div className="row">
              <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
              <div className="col-md-10 col-lg-10 hidden-xs- hidden-sm">
                <div className="row">
                  {outItem.sub_array.map((inItem, inIndex) => {
                    return (
                      <div className="col-md-3 col-lg-3 hidden-xs- hidden-sm">
                        <div className={styles.backgroundimage_div}>
                          <div>
                            <Image
                              src={inItem.img}
                              className={styles.image_product}
                              alt=""
                            />
                          </div>
                          {outIndex !== 2 ? (
                            <div className={styles.imageText}>
                              <p className={styles.title_text}>{inItem.name}</p>
                              <p className={styles.subtitle_text_absolute}>
                                {inItem.subtitle}
                              </p>
                            </div>
                          ) : null}
                          {inIndex === outItem.sub_array.length - 1 &&
                          outIndex === 0 ? (
                            <button
                              style={{
                                alignSelf: "flex-end",
                                paddingTop: 6,
                                paddingBottom: 6,
                                marginLeft: 280,
                                marginTop: -50,
                                marginBottom: 10,
                                borderWidth: 0,
                                borderRadius: 50,
                              }}
                            >
                              <Image
                                src={require("../assets/Images/Small_Right_Arrow.png")}
                                style={{ float: "right" }}
                              />
                            </button>
                          ) : null}
                        </div>
                        {outIndex === 2 ? (
                          <div>
                            <p className={styles.last_item_text}>
                              {inItem.name}
                            </p>
                            <p className={styles.price_text}>{inItem.price}</p>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
            </div>
          </>
        );
      })}
      <div className="row">
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
        <div className="col-md-10 col-lg-10 hidden-xs- hidden-sm">
          <hr className={styles.border_style} />
        </div>
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
      </div>
      <div>
        <ChatWithDoctore chatWithDoctore={() => Route.push("/FindDoctor")} />
      </div>
      <div
        className="row"
        style={{
          backgroundColor: "#C6E8FF",
          paddingTop: 20,
          marginTop: 70,
        }}
      >
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
        <div
          className="col-md-5 col-lg-5 hidden-xs- hidden-sm"
          style={{ marginTop: 30 }}
        >
          <p className={styles.comprehensive_information}>
            COMPREHENSIVE INFORMATION
          </p>
          <p className={styles.introducttion_consultation_paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi metus
            amet facilisis est.
          </p>
          <p className={styles.verified_medical_expert}>
            Verified medical experts
          </p>
        </div>
        <div className="col-md-5 col-lg-5 hidden-xs- hidden-sm">
          <Image
            src={require("../assets/Images/Small_Phone.png")}
            style={{
              float: "right",
              marginRight: 50,
              mixBlendMode: "multiply",
            }}
          />
        </div>
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
      </div>
      <div className="row">
        <p className={styles.what_our_user_have_to_say_text}>
          What our user have to say
        </p>
      </div>
      <div className="row">
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
        <div className="col-md-10 col-lg-10 hidden-xs- hidden-sm">
          <Image src={require("../assets/Images/Comma.png")} />

          <p className={styles.paragraph_text}>
            Beautiful application with elegant UI Design. I found this app very
            useful. Placed order for a few pets and recieved in just two days.
            Same pets costs me +100 from local shop. Recommended application :)
          </p>
        </div>
        <div className="col-md-1 col-lg-1 hidden-xs- hidden-sm"></div>
      </div>
      <div className="row" style={{ paddingTop: 10, paddingBottom: 10 }}>
        <div className="col-md-4 col-lg-4 hidden-xs- hidden-sm"></div>
        <div className="col-md-2 col-lg-2 hidden-xs- hidden-sm">
          <Image
            src={require("../assets/Images/Profile_image.png")}
            style={{ float: "right", marginTop: 8 }}
          />
        </div>
        <div className="col-md-2 col-lg-2 hidden-xs- hidden-sm">
          <p className={styles.profile_name}>Ayushi Varma</p>
          <p className={styles.date_text}>Oct 2018 at 11:33 AM</p>
          <div className="row">
            {slider_paragraph.map((item, index) => {
              return (
                <button
                  className={styles.slider_circle_button}
                  style={{
                    mixBlendMode: "multiply",
                    backgroundColor: index === 1 ? "#D9D9D9" : "white",
                    // display: "flex",
                    // opacity:0.7
                    marginLeft: index === 0 ? 13 : 0,
                  }}
                  // onClick={() => setCurrentSliderval(index)}
                />
              );
            })}
          </div>
        </div>
        <div className="col-md-4 col-lg-4  hidden-xs- hidden-sm"></div>
      </div>
      <FooterDiv />
    </>
  );
};
export default Product;
