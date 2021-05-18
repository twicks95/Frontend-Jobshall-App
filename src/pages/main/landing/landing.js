import React, { Component } from "react";
import styles from "./landing.module.css";

import NavbarComponent from "../../../components/Navbar/Navbar";
import FooterComponent from "../../../components/Footer/Footer";

class Landing extends Component {
  render() {
    return (
      <>
        <NavbarComponent />
        <section className={`d-flex ${styles.hero}`}>
          <div>
            <h1>Talenta terbaik negri untuk perubahan revolusi 4.0</h1>
          </div>
          <div></div>
        </section>
        <FooterComponent />
      </>
    );
  }
}

export default Landing;
