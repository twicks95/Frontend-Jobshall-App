import React, { Component } from "react";
import styles from "../Register.module.css";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../../assets/img/Group 978 1.png";
import logo1 from "../../../../assets/img/Group 980 1.png";
import { connect } from "react-redux";
import { registerWorker } from "../../../../redux/actions/auth";

class RegisterWorker extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        workerName: "",
        workerEmail: "",
        workerPhone: "",
        workerPassword: "",
        workerConfirm: "",
      },
      samePass: false,
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
  handleRegister = (event) => {
    event.preventDefault();
    console.log(this.state.form);
    if (this.state.form.workerPassword === this.state.form.workerConfirm) {
      this.setState({ samePass: false });
      this.props
        .registerWorker(this.state.form)
        .then((result) => {
          this.props.history.push("/login");
          // localStorage.setItem("token", this.props.auth.data.token);
        })
        .catch((error) => {
          this.setState({ isError: true });
          setTimeout(() => {
            this.setState({ isError: false });
          }, 5000);
        });
    } else {
      this.setState({ samePass: true, isError: true });
    }
  };

  render() {
    const { workerName, workerEmail, workerPhone, workerPassword } =
      this.state.form;
    console.log(this.props);

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
              <h1 className={styles.title1}>Sign Up</h1>
              <p className={styles.subTitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
              <p className={styles.subTitle1}>
                Lorom ipsum dolor si amet uegas anet.
              </p>
              <Form className={styles.mainForm}>
                <Form.Group controlId="formBasicName">
                  <Form.Label className={styles.label}>Nama</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Masukan nama panjang"
                    className={styles.control}
                    name="workerName"
                    value={workerName}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className={styles.label1}>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Masukan alamat email"
                    className={styles.control}
                    name="workerEmail"
                    value={workerEmail}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPhone">
                  <Form.Label className={styles.label1}>
                    No handphone
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Masukan no handphone"
                    className={styles.control}
                    name="workerPhone"
                    value={workerPhone}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPass">
                  <Form.Label className={styles.label1}>Kata Sandi</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Masukan kata sandi"
                    className={styles.control}
                    name="workerPassword"
                    value={workerPassword}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicConPass">
                  <Form.Label className={styles.label1}>
                    Konfirmasi kata Sandi
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Masukan konfirmasi kata sandi"
                    className={styles.control}
                    name="workerConfirm"
                    value={this.state.workerConfirm}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
              </Form>

              <Button
                block
                className={styles.btnSubmit}
                onClick={(event) => this.handleRegister(event)}
              >
                Daftar
              </Button>
              {this.state.isError && (
                <Alert variant="danger" className={styles.mainAlert}>
                  {this.state.samePass ? (
                    <p className={styles.alert}>Password must be same</p>
                  ) : (
                    <p className={styles.alert}>{this.props.auth.msg}</p>
                  )}
                </Alert>
              )}

              <p className={styles.register}>
                Anda sudah punya akun?{" "}
                <Link to="/login" className={styles.onReg}>
                  Masuk disini
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

const mapDispatchToProps = { registerWorker };

export default connect(mapStateToProps, mapDispatchToProps)(RegisterWorker);
