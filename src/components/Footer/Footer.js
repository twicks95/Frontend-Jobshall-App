import React from "react";

import styles from "./Footer.module.css";
import Logo from "../../assets/images/Jobshall white.png";

const Footer = (props) => {
  return (
    <footer className={`${styles.footer}`}>
      <img src={Logo} alt="logo" className={`${styles.logo}`} />
      <p className={`${styles.footerText}`}>
        Platform pencarian kerja dan pencarian calon kandidat terbaik untuk
        perusahaan di seluruh Indonesia.
      </p>
      <hr className={`m-0 ${styles.separator}`} />
      <div className="d-flex flex-column flex-md-row justify-content-between">
        <p>2021 Jobshall. All rights reserved.</p>
        <div>
          <span className="me-4">+62 77 9347 7059</span>
          <span>jobs@hall.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
