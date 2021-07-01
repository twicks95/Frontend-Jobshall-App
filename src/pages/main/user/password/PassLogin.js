import React, { Component } from "react";
import styles from "./Password.module.css";
import logo from "../../../../assets/img/Group 978 1.png";
import logo1 from "../../../../assets/img/Group 980 1.png";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import { connect } from "react-redux";
import { login } from "../../../../redux/actions/auth";
import { getWorkerById } from "../../../../redux/actions/worker";
import { getRecruiterById } from "../../../../redux/actions/recruiter";
import { WarningCircle } from "phosphor-react";
// import { Link } from "react-router-dom";

class PassLogin extends Component {
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
        console.log(result);

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
              <h1 className={styles.title}>Please login with your account</h1>
              <h1 className={styles.title1}>Reset password</h1>
              <p className={styles.subTitle}>
                We have an an email containing a password reset instruction
                toyour email. please check your email.
              </p>
              <p className={styles.subTitle1}>Please login with your account</p>

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
                    className={styles.control}
                    name="Email"
                    onChange={this.changeText}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPass">
                  <Form.Label className={styles.label1}>Kata Sandi</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Masukan kata sandi"
                    className={styles.control}
                    onChange={this.changeText}
                    name="Password"
                    required
                  />
                </Form.Group>

                {this.props.auth.data.isLoading ? (
                  <Button
                    type="submit"
                    variant="primary"
                    disabled
                    className={styles.btnSubmit}
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
                  <Button type="submit" block className={styles.btnSubmit}>
                    Masuk
                  </Button>
                )}
              </Form>
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

export default connect(mapStateToProps, mapDispatchToProps)(PassLogin);
