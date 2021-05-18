import React, { Component } from "react";
import styles from "./Password.module.css";
import logo from "../../../../assets/img/Group 978 1.png";
import logo1 from "../../../../assets/img/Group 980 1.png";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

class ConfirmPassword extends Component {
  handlePage = () => {
    this.props.history.push("/pass-login");
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
              <Form className={styles.mainForm}>
                <Form.Group controlId="formBasicPass">
                  <Form.Label className={styles.label}>Kata sandi</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Masukan kata sandi"
                    className={styles.control}
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

export default ConfirmPassword;
