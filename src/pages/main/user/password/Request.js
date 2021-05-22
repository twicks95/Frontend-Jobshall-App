import React, { Component } from "react";
import styles from "./Password.module.css";
import lock from "../../../../assets/img/Group 1159.png";
import logo1 from "../../../../assets/img/Group 980 1.png";
import { Container, Button, Card } from "react-bootstrap";
// import { Link } from "react-router-dom";

class Request extends Component {
  handlePage = () => {
    this.props.history.push("/request");
  };
  render() {
    return (
      <>
        <Container fluid className={styles.reqCon}>
          <div className={styles.mainReq}>
            <Card className={styles.mainCard}>
              <Card.Body>
                <img alt="" src={logo1} className={styles.reqImg} />
                <h1 className={styles.reqText}>
                  Request to Reset Your Account
                  <br /> Password
                </h1>
                <img alt="" src={lock} className={styles.lockReq} />
                <p className={styles.reqSubText}>
                  The following is the button for you to reset
                  <br /> the password.
                </p>
                <Button className={styles.btn1}>Change password</Button>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </>
    );
  }
}

export default Request;
