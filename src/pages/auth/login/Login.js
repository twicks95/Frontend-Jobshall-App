import React, { Component } from "react";
import styles from "./Login.module.css";
import logo from "../../../assets/img/Group 978 1.png";
import logo1 from "../../../assets/img/Group 980 1.png";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../../redux/actions/auth";
import { getWorkerById } from "../../../redux/actions/worker";
import { getRecruiterById } from "../../../redux/actions/recruiter";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        Email: "",
        Password: "",
      },
      isError: false,
    };
  }
  changeText = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleLogin = (event) => {
    event.preventDefault();
    this.props
      .login(this.state.form)
      .then((result) => {
        localStorage.setItem("token", this.props.auth.data.token);
        localStorage.setItem("role", this.props.auth.data.role);

        const { role } = this.props.auth.data;
        const { getRecruiterById, getWorkerById } = this.props;

        if (role === "recruiter") {
          const { recruiter_id } = this.props.auth.data;
          getRecruiterById(recruiter_id);
          this.props.history.push("/home");
        } else {
          const { worker_id } = this.props.auth.data;
          getWorkerById(worker_id);
          this.props.history.push(`/portofolio?id=${worker_id}`);
        }
      })
      .catch((error) => {
        this.setState({ isError: true });
        setTimeout(() => {
          this.setState({ isError: false });
        }, 5000);
      });
  };

  render() {
    const { Email, Password } = this.state.form;

    return (
      <>
        <Container>
          <Row className={styles.main}>
            <Col sm={6} className={styles.mainImg}>
              <div className={styles.layer}>&nbsp;</div>
              <div className={styles.coverText}>
                <img alt="" src={logo} className={styles.logo} />

                <h1 className={styles.subText}>
                  Temukan developer
                  <br /> berbakat & terbaik
                  <br /> di berbagai bidang <br />
                  keahlian
                </h1>
              </div>
            </Col>
            <Col sm={6} className={styles.colBottom}>
              <img alt="" src={logo1} className={styles.logo1} />
              <h1 className={styles.title}>Halo, Pewpeople</h1>
              <h1 className={styles.title1}>Login</h1>
              <p className={styles.subTitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
              <p className={styles.subTitle1}>
                Lorom ipsum dolor si amet uegas anet.
              </p>
              <Form className={styles.mainForm}>
                {this.state.isError && (
                  <Alert variant="danger" className={styles.mainAlert}>
                    <p className={styles.alert}>{this.props.auth.msg}</p>
                  </Alert>
                )}
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className={styles.label}>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Masukan alamat email"
                    name="Email"
                    value={Email}
                    className={styles.control}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPass">
                  <Form.Label className={styles.label1}>Kata Sandi</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Masukan kata sandi"
                    name="Password"
                    value={Password}
                    className={styles.control}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
              </Form>
              <Link to="reset-password" className={styles.forgotPass}>
                Lupa kata sandi ?
              </Link>
              {this.props.auth.data.isLoading ? (
                <Button variant="primary" disabled className={styles.btnSubmit}>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Loading...</span>
                </Button>
              ) : (
                <Button
                  block
                  className={styles.btnSubmit}
                  onClick={(event) => this.handleLogin(event)}
                >
                  Masuk
                </Button>
              )}
              <p className={styles.register}>
                Anda belum punya akun?{" "}
                <Link to="/register-worker" className={styles.onReg}>
                  Daftar disini
                </Link>{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { login, getRecruiterById, getWorkerById };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
