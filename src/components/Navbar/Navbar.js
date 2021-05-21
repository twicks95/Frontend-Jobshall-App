import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown, Navbar } from "react-bootstrap";

import styles from "./Navbar.module.css";
import logo from "../../assets/images/peworld.png";

class NavbarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  renderNav = () => {
    const { isLoggedIn } = this.state;
    const { isLanding } = this.props;
    if (isLanding && isLoggedIn) {
      return <p>Landing loggedIn</p>;
    } else if (!isLanding && isLoggedIn) {
      return <div></div>;
    } else {
      return (
        <>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Button variant="outline-primary" className="me-2">
              Masuk
            </Button>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Daftar
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Sebagai Tallent</Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  Sebagai Recruiter
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </>
      );
    }
  };

  render() {
    console.log(this.props);
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
        {this.renderNav()}
      </Navbar>
    );
  }
}

export default NavbarComponent;
