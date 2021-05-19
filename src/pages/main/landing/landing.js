import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { HiCheckCircle } from "react-icons/hi";
import styles from "./landing.module.css";

import NavbarComponent from "../../../components/Navbar/Navbar";
import FooterComponent from "../../../components/Footer/Footer";

import DotDecoration from "../../../assets/decorations/dots.svg";
import HeroImage from "../../../assets/images/hero-img.jpg";

class Landing extends Component {
  render() {
    return (
      <>
        <NavbarComponent />
        <div className={`${styles.contentWrapper}`}>
          <section className={`d-flex ${styles.hero}`}>
            <div
              className={`d-flex flex-column justify-content-center ${styles.leftHero}`}
            >
              <h1>Talenta terbaik negeri untuk perubahan revolusi 4.0</h1>
              <p>
                Pilih talenta terbaik kami dan beri tawaran untuk bekerja dan
                jadi bagian tim proyek yang anda rencanakan.
              </p>
              <Button className={`${styles.heroCTAButton}`}>
                Mulai dari sekarang
              </Button>
            </div>
            <div
              className={`d-flex justify-content-center ${styles.imagePart}`}
            >
              <div className={`d-flex align-items-center`}>
                <div className={`${styles.imageContainer}`}>
                  <div className={`${styles.greyBox}`}></div>
                  <img
                    src={DotDecoration}
                    alt="decoration"
                    className={`${styles.dotDecoration}`}
                  />
                  <img
                    src={HeroImage}
                    alt="hero"
                    className={`${styles.heroImg}`}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className={`d-flex ${styles.hero}`}>
            <div
              className={`d-flex justify-content-center ${styles.imagePart}`}
            >
              <div className={`d-flex align-items-center`}>
                <div className={`${styles.imageContainer}`}>
                  <div className={`${styles.greyBox}`}></div>
                  <img
                    src={DotDecoration}
                    alt="decoration"
                    className={`${styles.dotDecoration}`}
                  />
                  <img
                    src={HeroImage}
                    alt="hero"
                    className={`${styles.heroImg}`}
                  />
                </div>
              </div>
            </div>
            <div
              className={`d-flex flex-column justify-content-center ${styles.leftHero}`}
            >
              <h2>Kenapa harus mencari tallent di peworld</h2>

              <p>
                <HiCheckCircle />
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </section>
        </div>
        <FooterComponent />
      </>
    );
  }
}

export default Landing;
