import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { connect } from "react-redux";
import { getRecruiterById } from "../../redux/actions/recruiter";
import { getWorkerById } from "../../redux/actions/worker";

import styles from "./Navbar.module.css";

// import NoProfilePicture from "../../assets/images/defaultprofilepict.png";
import Logo from "../../assets/images/peworld.png";
import Bell from "../../assets/icons/bell.svg";
import Mail from "../../assets/icons/mail.svg";

class NavbarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: localStorage.getItem("token"),
      // avatar: props.auth.data.role,
    };
  }

  // componentDidMount() {
  //   this.renderAvatar();
  // }

  renderAvatar = () => {
    return this.props.auth.data.role === "worker"
      ? this.props.getWorkerById(this.props.auth.data.worker_id).then(() => {
          return this.props.worker.worker[0].worker_image
            ? `http://localhost:3001/api/${this.props.worker.worker[0].worker_image}`
            : NoProfilePicture;
        })
      : this.props
          .getRecruiterById(this.props.auth.data.recruiter_id)
          .then(() => {
            return this.props.recruiter.recruiter[0].recruiter_image
              ? `http://localhost:3001/api/${this.props.recruiter.recruiter[0].recruiter_image}`
              : NoProfilePicture;
          });
  };

  renderNav = () => {
    const { isLoggedIn } = this.state;
    const { isLanding } = this.props;

    if (isLanding && isLoggedIn) {
      return (
        <>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-5">
              {this.props.auth.data.role === "recruiter" ? (
                <Link to="/home" className={`${styles.navLink}`}>
                  Home
                </Link>
              ) : (
                <></>
              )}
            </Nav>
            <Nav className="ms-auto">
              <Button
                variant="primary"
                className="me-2"
                onClick={this.handleClickProfile}
              >
                Profile
              </Button>
            </Nav>
          </Navbar.Collapse>
        </>
      );
    } else if (!isLanding && isLoggedIn) {
      // const { role, worker_image, recruiter_image } = this.props.auth.data;

      return (
        <>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Button variant="link">
                <img src={Bell} alt="notification" />
              </Button>
              <Button variant="link" className="ms-0 ms-lg-4 me-0 me-lg-4">
                <img src={Mail} alt="message" />
              </Button>
              <div
                className={`d-flex align-items-center justify-content-center justify-content-lg-center  ${styles.avatar}`}
              >
                <NavDropdown
                  id="basic-nav-dropdown"
                  className={`${styles.dropdownIcon}`}
                >
                  <NavDropdown.Item onClick={(e) => this.handleEditProfile(e)}>
                    Edit profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={(e) => this.handleLogout(e)}>
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
                <img
                  src={
                    role === "worker" && this.props.auth.data.worker_image
                      ? `http://localhost:3001/api/${worker_image}`
                      : role === "recruiter" &&
                        this.props.auth.data.recruiter_image
                      ? `http://localhost:3001/api/${recruiter_image}`
                      : NoProfilePicture
                  }
                  alt="avatar"
                  onClick={this.handleClickProfile}
                />
              </div>
            </Nav>
          </Navbar.Collapse>
        </>
      );
    } else {
      return (
        <>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mt-5 mt-lg-0">
              <Button
                variant="outline-primary"
                className="me-2 w-100"
                onClick={this.handleClickLogin}
              >
                Masuk
              </Button>
              <Dropdown>
                <Dropdown.Toggle
                  variant="primary"
                  id="dropdown-basic"
                  className="w-100 mt-2 mt-lg-0"
                >
                  Daftar
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    name="worker"
                    onClick={(e) => this.handleClickRegister(e)}
                  >
                    Sebagai Tallent
                  </Dropdown.Item>
                  <Dropdown.Item
                    name="recruiter"
                    onClick={(e) => this.handleClickRegister(e)}
                  >
                    Sebagai Recruiter
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </>
      );
    }
  };

  handleClickProfile = () => {
    if (this.props.auth.data.role === "recruiter") {
      const { recruiter_id } = this.props.auth.data;
      this.props.history.push(`/recruiter/profile?id=${recruiter_id}`);
    } else {
      const { worker_id } = this.props.auth.data;
      this.props.history.push(`/portofolio?id=${worker_id}`);
    }
  };

  handleEditProfile = (e) => {
    e.preventDefault();
    if (this.props.auth.data.role === "recruiter") {
      const { recruiter_id } = this.props.auth.data;
      this.props.history.push(`/recruiter/edit?id=${recruiter_id}`);
    } else {
      const { worker_id } = this.props.auth.data;
      this.props.history.push(`/worker/edit?id=${worker_id}`);
    }
  };

  handleClickRegister = (e) => {
    e.preventDefault();
    if (e.target.name === "recruiter") {
      this.props.history.push("/register-recruiter");
    } else {
      this.props.history.push("/register-worker");
    }
  };

  handleClickLogin = () => {
    this.props.history.push("/login");
  };

  handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    this.props.history.push("/");
  };

  render() {
    // console.log(this.props.recruiter.recruiter[0].recruiter_image);

    return (
      <Navbar
        bg="light"
        expand="lg"
        className={`p-0 d-flex justify-content-between ${styles.navbar}`}
      >
        <Navbar.Brand href="#home">
          <Link to="/">
            <img src={Logo} alt="logo" className={`${styles.logo}`} />
          </Link>
        </Navbar.Brand>
        {this.renderNav()}
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  worker: state.worker,
  recruiter: state.recruiter,
});

const mapDispatchToProps = { getRecruiterById, getWorkerById };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavbarComponent));
