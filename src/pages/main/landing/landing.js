import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import styles from "./landing.module.css";

import NavbarComponent from "../../../components/Navbar/Navbar";
import FooterComponent from "../../../components/Footer/Footer";

import DotDecoration from "../../../assets/decorations/dots.svg";
import HeroImage from "../../../assets/images/hero-img.jpg";
import LandingImage1 from "../../../assets/images/landing-img.jpg";
import LandingImage2 from "../../../assets/images/landing-img2.jpg";
import TickPurple from "../../../assets/icons/tick-purple.svg";
import TickOrange from "../../../assets/icons/tick-orange.svg";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLanding: true,
    };
  }

  render() {
    return (
      <>
        <NavbarComponent isLanding={this.state.isLanding} />
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
              <Button className={`${styles.CTAButton1}`}>
                Mulai dari sekarang
              </Button>
            </div>
            <div
              className={`d-flex justify-content-center ${styles.imagePart}`}
            >
              <div className={`d-flex align-items-center`}>
                <div className={`${styles.imageContainer}`}>
                  <div className={`${styles.greyBox1}`}></div>
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
          <section className={`d-flex ${styles.hero}`}></section>
          <Row className={`${styles.row2}`}>
            <Col sm={6}>
              <div
                className={`d-flex justify-content-center ${styles.imagePart}`}
              >
                <div className={`d-flex align-items-center`}>
                  <div className={`${styles.imageContainer}`}>
                    <div className={`${styles.greyBox2}`}></div>
                    <img
                      src={DotDecoration}
                      alt="decoration"
                      className={`${styles.dotDecoration}`}
                    />
                    <img
                      src={LandingImage1}
                      alt="hero"
                      className={`${styles.heroImg}`}
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <div
                className={`d-flex flex-column justify-content-center ${styles.leftHero}`}
              >
                <h2>Kenapa harus mencari tallent di peworld</h2>

                <p className={`d-flex align-items-center`}>
                  <img
                    src={TickPurple}
                    alt="tick"
                    className={`me-4 ${styles.tickIcon}`}
                  />
                  Bertifikasi resmi
                </p>
                <p className={`d-flex align-items-center`}>
                  <img
                    src={TickPurple}
                    alt="tick"
                    className={`me-4 ${styles.tickIcon}`}
                  />
                  Berpengalaman
                </p>
                <p className={`d-flex align-items-center`}>
                  <img
                    src={TickPurple}
                    alt="tick"
                    className={`me-4 ${styles.tickIcon}`}
                  />
                  Project portfolio yang menarik
                </p>
                <p className={`d-flex align-items-center`}>
                  <img
                    src={TickPurple}
                    alt="tick"
                    className={`me-4 ${styles.tickIcon}`}
                  />
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </Col>
          </Row>
          <Row className={`${styles.row2}`}>
            <Col sm={6}>
              <div
                className={`d-flex flex-column justify-content-center ${styles.leftHero}`}
              >
                <h2>Skill Tallent</h2>
                <p>
                  Beberapa skill populer yang dibutuhkan industri saat ini ada
                  pada tallent yang kami miliki.
                </p>
                <Row className={`${styles.tallentSkills}`}>
                  <Col>
                    <p className={`d-flex align-items-center`}>
                      <img
                        src={TickOrange}
                        alt="tick"
                        className={`me-4 ${styles.tickIcon}`}
                      />
                      Java
                    </p>
                    <p className={`d-flex align-items-center`}>
                      <img
                        src={TickOrange}
                        alt="tick"
                        className={`me-4 ${styles.tickIcon}`}
                      />
                      Kotlin
                    </p>
                    <p className={`d-flex align-items-center`}>
                      <img
                        src={TickOrange}
                        alt="tick"
                        className={`me-4 ${styles.tickIcon}`}
                      />
                      PHP
                    </p>
                    <p className={`d-flex align-items-center`}>
                      <img
                        src={TickOrange}
                        alt="tick"
                        className={`me-4 ${styles.tickIcon}`}
                      />
                      Javascript
                    </p>
                  </Col>
                  <Col>
                    <p className={`d-flex align-items-center`}>
                      <img
                        src={TickOrange}
                        alt="tick"
                        className={`me-4 ${styles.tickIcon}`}
                      />
                      Golang
                    </p>
                    <p className={`d-flex align-items-center`}>
                      <img
                        src={TickOrange}
                        alt="tick"
                        className={`me-4 ${styles.tickIcon}`}
                      />
                      C++
                    </p>
                    <p className={`d-flex align-items-center`}>
                      <img
                        src={TickOrange}
                        alt="tick"
                        className={`me-4 ${styles.tickIcon}`}
                      />
                      Ruby
                    </p>
                    <p className={`d-flex align-items-center`}>
                      <img
                        src={TickOrange}
                        alt="tick"
                        className={`me-4 ${styles.tickIcon}`}
                      />
                      10+ Bahasa lainnya
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm={6}>
              <div
                className={`d-flex justify-content-center ${styles.imagePart}`}
              >
                <div className={`d-flex align-items-center`}>
                  <div className={`${styles.imageContainer}`}>
                    <div className={`${styles.greyBox1}`}></div>
                    <img
                      src={DotDecoration}
                      alt="decoration"
                      className={`${styles.dotDecoration}`}
                    />
                    <img
                      src={LandingImage2}
                      alt="hero"
                      className={`${styles.heroImg}`}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <h2>Their opinion about jobshall</h2>
            <Col></Col>
          </Row>
          <div
            className={`d-flex align-items-center justify-content-between ${styles.bottomRectangle}`}
          >
            <p className="ms-5">Eksplorasi atau jadi tallent di Jobshall</p>
            <Button variant="light" className={`me-5 ${styles.CTAButton2}`}>
              Mulai dari sekarang
            </Button>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 1140 294"
              fill="none"
              className="position-absolute"
            >
              <path
                d="M115.803 237.6C65.8759 260.01 20.5718 228.263 4.16058 209.588C1.38686 205.986 0.23114 203.086 -4.01769e-06 202.086L0 294L1140 294L1140 1.12042e-05C1103.48 69.8628 1011.16 212.09 934.051 222.094C837.664 234.6 735.73 187.578 610.912 237.6C486.095 287.622 389.015 259.109 331.46 237.6C273.905 216.092 178.212 209.588 115.803 237.6Z"
                fill="white"
                fill-opacity="0.05"
              />
            </svg> */}
          </div>
        </div>
        <FooterComponent />
      </>
    );
  }
}

export default Landing;
