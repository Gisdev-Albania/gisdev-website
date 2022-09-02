import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import { Header } from "../components/Header";
import { IoLocationSharp } from "react-icons/io5";
import { BsFacebook, BsFillTelephoneFill, BsTwitter } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { GrLinkedinOption } from "react-icons/gr";
import { Footer } from "../components/Footer";
import { MainLayout } from "../components/MainLayout";
const Home: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        {/* <div className={styles.navbar}>
          <div className={styles.topbar__nav}>
            <div className={styles.topbar__content}>
              <div className={styles.topbar__left}>
                <div className={styles.topbar__left__text}>
                  <IoLocationSharp />
                  <h5>Tirane, Albania</h5>
                </div>
                <div className={styles.topbar__left__text}>
                  <BsFillTelephoneFill />
                  <h5>+355672772097</h5>
                </div>
                <div className={styles.topbar__left__text}>
                  <MdMail />
                  <h5>info@gis-dev.com</h5>
                </div>
              </div>
              <div className={styles.topbar__right}>
                <div className={styles.topbar__info}>
                  <MdMail />
                </div>
                <div className={styles.topbar__info}>
                  <BsFacebook />
                </div>
                <div className={styles.topbar__info}>
                  <BsTwitter />
                </div>
                <div className={styles.topbar__info}>
                  <GrLinkedinOption />
                </div>
              </div>
            </div>
          </div>

          <Header />
        </div> */}
        {/* Main Layout Start */}
        <div>
          <MainLayout />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* Main Layout End */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
