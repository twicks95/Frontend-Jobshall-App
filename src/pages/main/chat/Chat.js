import React, { Component } from "react";
import styles from "./Chat.module.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import mainImg from "../../../assets/img/undraw_Email_campaign_re_m6k5 1.png";
import Footer from "../../../components/Footer/Footer";

class Chat extends Component {
  render() {
    return (
      <>
        <Container fluid className={styles.main}>
          <Container>
            <Row className={styles.mainRow}>
              <Col sm={4}>
                <Card className={styles.cardOne}>
                  <Card.Title className={styles.title}>Chat</Card.Title>
                  <hr />
                  <Card.Img src={mainImg} className={styles.mainImg} />
                  <Card.Text className={styles.text}>Belum ada chat</Card.Text>
                </Card>
              </Col>
              <Col sm={8}>
                <Card className={styles.cardTwo}>
                  <Card.Title>&nbsp;</Card.Title>
                  <hr />
                </Card>
              </Col>
            </Row>
          </Container>
          <Footer />
        </Container>
      </>
    );
  }
}

export default Chat;
