import React, { Component } from "react";
import styles from "./Password.module.css";
import logo from "../../../../assets/img/Group 978 1.png";
import logo1 from "../../../../assets/img/Group 980 1.png";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

class PassLogin extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        newPassword: "",
        confirmNewPassword: "",
        userEmail: localStorage.getItem("userEmail"),
      },
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
  handlePage = () => {
    this.props.history.push("/");
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
              <Form className={styles.mainForm}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className={styles.label}>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Masukan alamat email"
                    className={styles.control}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPass">
                  <Form.Label className={styles.label1}>Kata Sandi</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Masukan kata sandi"
                    className={styles.control}
                  />
                </Form.Group>
              </Form>

              <Button
                block
                className={styles.btnSubmit}
                onClick={this.handlePage}
              >
                Reset password
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default PassLogin;
