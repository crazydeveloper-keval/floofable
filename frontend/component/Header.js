import Image from "next/image";
import styles from "../styles/header.module.css";
import Head from "next/head";
const Header = () => {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className={styles.header_of_login}>
        <div className={styles.header_image_div}>
          <Image src={require("../assets/Images/Header_Logo.png")} />
        </div>
      </header>

      <div className="row" style={{ display: "flex", flexDirection: "row" }}>
        <div className="col-md-1 col-lg-1 hidden-xs hidden-sm"></div>
        <div className="col-md-10 col-lg-10 hidden-xs hidden-sm">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xs-6 col-sm-6 ">
              <div className="row">
                <div
                  className={styles.inpute_box_div}
                  style={{ display: "block" }}
                >
                  <Image
                    src={require("../assets/Images/Search.png")}
                    className={styles.searchbar_img}
                  />

                  <input
                    placeholder="Search for pets, products and more"
                    className={styles.searchbar_inpute}
                  />
                </div>
              </div>
            </div>
            {/* <div className="col-2"></div> */}
            <div className="col-md-6 col-lg-6 col-xs-6 col-sm-6">
              <button className={styles.viewcard_button_div}>
                <Image src={require("../assets/Images/ViewCard.png")} />
                <span className={styles.viewCars_text}>View Card</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-1 col-lg-1 hidden-xs hidden-sm"></div>
      </div>
      <hr className={styles.border_hr} />
    </div>
  );
};

export default Header;
