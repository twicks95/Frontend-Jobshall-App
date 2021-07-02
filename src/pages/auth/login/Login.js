import React, { Component } from "react";
import styles from "./Login.module.css";
import logo from "../../../assets/images/Jobshall white.png";
import logo1 from "../../../assets/images/Jobshall.png";

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
import { WarningCircle } from "phosphor-react";

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
          localStorage.setItem("recId", this.props.auth.data.recruiter_id);
          const { recruiter_id } = this.props.auth.data;
          getRecruiterById(recruiter_id);
          this.props.history.push("/home");
        } else {
          localStorage.setItem("workerId", this.props.auth.data.worker_id);
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
                Gunakan akun yang sudah di daftarkan, mulai eksplor perusahaan
                atau kandidat yang anda inginkan sekarang!.
              </p>
              <p className={styles.subTitle1}>
                Gunakan akun yang sudah di daftarkan, mulai eksplor perusahaan
                atau kandidat yang anda inginkan sekarang!.
              </p>
              <Form
                className={styles.mainForm}
                onSubmit={(event) => this.handleLogin(event)}
              >
                {this.state.isError && (
                  <Alert variant="danger" className="d-flex align-items-center">
                    <WarningCircle size={24} weight="bold" className="me-2" />
                    <p className="m-0" style={{ fontWeight: "600" }}>
                      {this.props.auth.msg}
                    </p>
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
                    required
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
                    required
                  />
                </Form.Group>

                <Link to="reset-password" className={styles.forgotPass}>
                  Lupa kata sandi ?
                </Link>
                {this.props.auth.data.isLoading ? (
                  <Button
                    variant="primary"
                    disabled
                    className={styles.btnSubmit}
                    type="submit"
                  >
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      className="me-2"
                    />
                    <span className="sr-only">Loading...</span>
                  </Button>
                ) : (
                  <Button block className={styles.btnSubmit} type="submit">
                    Masuk
                  </Button>
                )}
              </Form>
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
