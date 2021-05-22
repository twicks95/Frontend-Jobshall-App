import React, { Component } from "react";
import styles from "./Experience.module.css";
import { Card, Col, Container, Row, Button, Badge, Nav } from "react-bootstrap";
import NavbarComponent from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import profileImg from "../../../assets/img/Ellipse 326.png";
import email from "../../../assets/img/mail (4).png";
import ig from "../../../assets/img/instagram.png";
import github from "../../../assets/img/github.png";
import gitlab from "../../../assets/img/gitlab.png";
import Suit from "../../../assets/img/suitcase 2.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getExperiences } from "../../../redux/actions/experience";

class Experience extends Component {
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
          port_image: "../../../assets/img/Ellipse 326.png",
        },
      ],

      dataExp: [
        {
          position: "Engineer",
          company_name: "Tokopedia",
          start_date: "July 2019",
          end_date: "January 2020",
          total: "6 months",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
        },
        {
          position: "CEO",
          company_name: "Shopee",
          start_date: "July 2019",
          end_date: "January 2020",
          total: "6 months",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
        },
      ],

      isExp: true,
      isPort: false,
    };
  }
  componentDidMount() {
    const id = localStorage.getItem("userId");
    this.props.getExperiences(id);
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
                        to={`/portofolio/${localStorage.getItem("workerId")}`}
                        className={
                          this.state.isPort ? styles.link1 : styles.link2
                        }
                      >
                        Portofolio
                      </Link>
                    </Nav.Item>

                    <Nav.Item className={styles.nav1}>
                      <Link
                        to={`/experience/${localStorage.getItem("workerId")}`}
                        className={
                          this.state.isExp ? styles.link1 : styles.link2
                        }
                      >
                        Pengalaman Kerja
                        <div className={styles.underline}>&nbsp;</div>
                      </Link>
                    </Nav.Item>
                  </Nav>
                  <Card className={styles.cardExpMain}>
                    {this.state.dataExp.map((item, index) => {
                      return (
                        <Row key={index} className={styles.cardExp}>
                          <Col sm={2} className={styles.imgExp}>
                            <img alt="" src={Suit} />
                          </Col>
                          <Col sm={9} className={styles.infoExp}>
                            <h1 className={styles.position}>{item.position}</h1>
                            <p className={styles.name}>{item.company_name}</p>
                            <Row>
                              <Col sm={5} className={styles.date}>
                                {item.start_date} - {item.end_date}
                              </Col>
                              <Col sm={3} className={styles.date}>
                                {item.total}
                              </Col>
                            </Row>
                            <p className={styles.desc1}>{item.desc}</p>
                          </Col>
                          {/* <hr /> */}
                        </Row>
                      );
                    })}
                  </Card>
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

const mapStateToProps = (state) => ({
  experience: state.experience,
});
const mapDispatchToProps = { getExperiences };
export default connect(mapStateToProps, mapDispatchToProps)(Experience);
