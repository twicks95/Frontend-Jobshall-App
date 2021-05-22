import React, { Component } from "react";
import styles from "./Portfolio.module.css";
import { Card, Col, Container, Row, Button, Badge, Nav } from "react-bootstrap";
import NavbarComponent from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import profileImg from "../../../assets/img/Ellipse 326.png";
import email from "../../../assets/img/mail (4).png";
import ig from "../../../assets/img/instagram.png";
import github from "../../../assets/img/github.png";
import gitlab from "../../../assets/img/gitlab.png";
import port from "../../../assets/img/Rectangle 637.png";
import { Link } from "react-router-dom";

class Portofolio extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: "Louis Tomlinson",
          field: "Web Developer",
          type: "Freelancer",
          location: "Purwokerto, Jawa Tengah",
          phone: "0812 - 3456 - 789",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
          skills: [
            "Phyton",
            "Laravel",
            "Golang",
            "JavaScript",
            "PHP",
            "HTML",
            "C++",
            "Kotlin",
            "Swift",
          ],
          email: "Louistommo@gmail.com",
          ig: "@Louist91",
          github: "@Louistommo",
          gitlab: "@Louistommo91",
        },
      ],
      dataPort: [
        {
          port_name: "Reminder App",
        },
        {
          port_name: "Social media app",
        },
        {
          port_name: "Project management web",
        },
        {
          port_name: "Reminder App",
        },
        {
          port_name: "Social media app",
        },
        {
          port_name: "Project management web",
        },
      ],
      isExp: false,
      isPort: true,
    };
  }
  render() {
    return (
      <>
        <NavbarComponent />
        <Container fluid className={styles.main}>
          <Container>
            <Row>
              <Col sm={4}>
                <Card className={styles.cardOne}>
                  <Card.Img
                    src={profileImg}
                    variant="top"
                    className={styles.ppImg}
                  />

                  {this.state.data.map((item, index) => {
                    return (
                      <Card.Body key={index}>
                        <div className={styles.title}>{item.name}</div>
                        <div className={styles.field}>{item.field}</div>
                        <div className={styles.type}>{item.type}</div>
                        <div className={styles.loc}>{item.location}</div>
                        <div className={styles.phone}>{item.phone}</div>
                        <div className={styles.desc}>{item.desc}</div>
                        <Button className={styles.btnHire}>Hire</Button>
                        <h1 className={styles.title2}>Skills</h1>
                        <div className={styles.skills}>
                          {item.skills.map((item, index) => {
                            return (
                              <Badge
                                variant="primary"
                                className={styles.badge}
                                key={index}
                              >
                                {item}
                              </Badge>
                            );
                          })}
                          <Badge
                            variant="primary"
                            className={styles.badge}
                          ></Badge>{" "}
                        </div>
                        <Row>
                          <Col xs={1}>
                            <img
                              alt=""
                              src={email}
                              className={styles.imgBottom}
                            />
                            <img
                              alt=""
                              src={ig}
                              className={styles.imgBottom1}
                            />
                            <img
                              alt=""
                              src={github}
                              className={styles.imgBottom2}
                            />
                            <img
                              alt=""
                              src={gitlab}
                              className={styles.imgBottom3}
                            />
                          </Col>
                          <Col className={styles.colMargin}>
                            <div className={styles.email}>{item.email}</div>
                            <div className={styles.ig}>{item.ig}</div>
                            <div className={styles.github}>{item.github}</div>
                            <div className={styles.gitlab}>{item.gitlab}</div>
                          </Col>
                        </Row>
                      </Card.Body>
                    );
                  })}
                </Card>
              </Col>
              <Col sm={8}>
                <Card className={styles.cardTwo}>
                  <Nav>
                    <Nav.Item className={styles.nav1}>
                      <Link
                        to="/portofolio"
                        className={
                          this.state.isPort ? styles.link1 : styles.link2
                        }
                      >
                        Portofolio
                        <div className={styles.underline1}>&nbsp;</div>
                      </Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Link
                        to="/experience"
                        className={
                          this.state.isExp ? styles.link1 : styles.link2
                        }
                      >
                        Pengalaman Kerja
                      </Link>
                    </Nav.Item>
                  </Nav>
                  <Card.Body>
                    <Row className={styles.rowPort}>
                      {this.state.dataPort.map((item, index) => {
                        console.log(index);
                        return (
                          <Col sm={4} key={index}>
                            <Card className={styles.cardPort}>
                              <Card.Img src={port} className={styles.portImg} />
                              <Card.Text className={styles.portName}>
                                {item.port_name}
                              </Card.Text>
                            </Card>
                          </Col>
                        );
                      })}
                    </Row>
                  </Card.Body>
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

export default Portofolio;
