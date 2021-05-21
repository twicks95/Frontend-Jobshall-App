import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown, Navbar } from "react-bootstrap";

import styles from "./Navbar.module.css";
import logo from "../../assets/images/peworld.png";

class NavbarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  renderNav = () => {
    const { isLoggedIn } = this.state;
    const { isLanding } = this.props;
    if (isLanding && isLoggedIn) {
      return (
        <div className="d-flex">
          <Button variant="outline-primary" className="me-3">
            Masuk
          </Button>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Daftar
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Sebagai Tallent</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Sebagai Recruiter</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      );
    } else if (!isLanding && isLoggedIn) {
      return (
        <div className="d-flex">
          <Button variant="outline-primary" className="me-3">
            Masuk
          </Button>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Daftar
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Sebagai Tallent</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Sebagai Recruiter</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      );
    } else {
      return (
        <div className="d-flex">
          <Button variant="outline-primary" className="me-3">
            Masuk
          </Button>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Daftar
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Sebagai Tallent</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Sebagai Recruiter</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
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
