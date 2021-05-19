import React from "react";
import { Link } from "react-router-dom";
import { Button, Navbar } from "react-bootstrap";

import styles from "./Navbar.module.css";
import logo from "../../assets/images/peworld.png";

const NavbarComponent = (props) => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className={`border border-danger p-0 d-flex justify-content-between ${styles.navbar}`}
    >
      <Navbar.Brand href="#home">
        <Link to="/landing">
          <img src={logo} alt="logo" className={`${styles.logo}`} />
        </Link>
      </Navbar.Brand>
      <div>
        <Button variant="outline-primary" className="mr-2">
          Daftar
        </Button>
        <Button variant="primary">Masuk</Button>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
