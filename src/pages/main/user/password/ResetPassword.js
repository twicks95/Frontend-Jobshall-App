import React, { Component } from "react";
import styles from "./Password.module.css";
import logo from "../../../../assets/img/Group 978 1.png";
import logo1 from "../../../../assets/img/Group 980 1.png";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

class ResetPassword extends Component {
  constructor() {
    super();
    this.state = {
      form: {},
    };
  }
  handlePage = () => {
    this.props.history.push("/confirm-password");
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
                Enter your user account's verified email address and we will
                send you a password reset link.
              </p>
              <p className={styles.subTitle1}>
                Enter your user account's verified email address and we will
                send you a password reset link.
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
              </Form>

              <Button
                block
                className={styles.btnSubmit}
                onClick={this.handlePage}
              >
                Send password reset email
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default ResetPassword;
