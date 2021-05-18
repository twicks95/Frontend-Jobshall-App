import React, { Component } from "react";
import styles from "./Login.module.css";
import logo from "../../../assets/img/Group 978 1.png";
import logo1 from "../../../assets/img/Group 980 1.png";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Login extends Component {
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
              <Link to="reset-password" className={styles.forgotPass}>
                Lupa kata sandi ?
              </Link>
              <Button block className={styles.btnSubmit}>
                Masuk
              </Button>
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

export default Login;
