import React, { Component } from "react";
import styles from "./Password.module.css";
import logo from "../../../../assets/img/Group 978 1.png";
import logo1 from "../../../../assets/img/Group 980 1.png";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import axiosApiInstances from "../../../../utils/axios";
import { WarningCircle } from "phosphor-react";
// import { Link } from "react-router-dom";

class ConfirmPassword extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        newPassword: "",
        confirmNewPassword: "",
        userEmail: localStorage.getItem("userEmail"),
      },
      isError: false,
      isSuccess: false,
    };
  }

  componentDidMount() {
    if (!localStorage.getItem("userEmail")) {
      this.props.history.push("/login");
    }
  }

  changeText = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  handlePage = (event) => {
    event.preventDefault();
    axiosApiInstances
      .patch("/auth/reset-password", this.state.form)
      .then(() => {
        localStorage.removeItem("userEmail");
        this.setState({ isSuccess: true });
        setTimeout(() => {
          this.setState({ isSuccess: false });
          this.props.history.push("/pass-login");
        }, 2000);
      })
      .catch(() => {
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
              <h1 className={styles.title}>Reset password</h1>
              <h1 className={styles.title1}>Reset password</h1>
              <p className={styles.subTitle}>
                You need to change your password to activate your account
              </p>
              <p className={styles.subTitle1}>
                You need to change your password to activate your account.
              </p>
              <Form
                className={styles.mainForm}
                onSubmit={(event) => this.handlePage(event)}
              >
                {this.state.isError && (
                  <Alert variant="danger" className="d-flex align-items-center">
                    <WarningCircle size={24} weight="bold" className="me-2" />
                    <p className="m-0" style={{ fontWeight: "600" }}>
                      Password dan konfirmasi password tidak sama !
                    </p>
                  </Alert>
                )}
                {this.state.isSuccess && (
                  <Alert variant="info" className="d-flex align-items-center">
                    <WarningCircle size={24} weight="bold" className="me-2" />
                    <p className="m-0" style={{ fontWeight: "600" }}>
                      Ganti password berhasil !
                    </p>
                  </Alert>
                )}
                <Form.Group controlId="formBasicPass">
                  <Form.Label className={styles.label}>Kata sandi</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Masukan kata sandi"
                    className={styles.control}
                    name="newPassword"
                    onChange={this.changeText}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicConPass">
                  <Form.Label className={styles.label1}>
                    Confirmation new password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Masukan konfirmasi kata sandi"
                    className={styles.control}
                    name="confirmNewPassword"
                    onChange={this.changeText}
                    required
                  />
                </Form.Group>

                <Button type="submit" block className={styles.btnSubmit}>
                  Reset password
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default ConfirmPassword;
