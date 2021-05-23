import React, { Component } from "react";
import styles from "./Portfolio.module.css";
import { Card, Col, Container, Row, Button, Badge, Nav } from "react-bootstrap";
import NavbarComponent from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
// import profileImg from "../../../assets/img/Ellipse 326.png";
import email from "../../../assets/img/mail (4).png";
import ig from "../../../assets/img/instagram.png";
import github from "../../../assets/img/github.png";
import gitlab from "../../../assets/img/gitlab.png";
// import port from "../../../assets/img/Rectangle 637.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPortfolios } from "../../../redux/actions/portfolio";
import { getWorkerById } from "../../../redux/actions/worker";
import { getSkills } from "../../../redux/actions/skill";

class Portofolio extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      dataSkill: [],
      dataPort: [],
      isExp: false,
      isPort: true,
    };
  }
  componentDidMount() {
    const id = localStorage.getItem("workerId");
    this.getPort(id);
    this.getWorkerId(id);
    this.getSkill(id);
  }
  getPort = (id) => {
    console.log(id);
    this.props.getPortfolios(id).then((res) => {
      this.setState({ dataPort: res.action.payload.data.data });
    });
  };
  getWorkerId = (id) => {
    this.props.getWorkerById(id).then((res) => {
      this.setState({ data: res.action.payload.data.data[0] });
    });
  };
  getSkill = (id) => {
    this.props.getSkills(id).then((res) => {
      this.setState({ dataSkill: res.action.payload.data.data });
    });
  };
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
                    src={`http://localhost:3001/api/${this.state.data.worker_image}`}
                    variant="top"
                    className={styles.ppImg}
                  />

                  <Card.Body>
                    <div className={styles.title}>
                      {this.state.data.worker_name}
                    </div>
                    <div className={styles.field}>
                      {this.state.data.worker_job_desk}
                    </div>
                    <div className={styles.type}>
                      {this.state.data.worker_status}
                    </div>
                    <div className={styles.loc}>
                      {this.state.data.worker_domicile}
                    </div>
                    <div className={styles.phone}>
                      {this.state.data.worker_phone}
                    </div>
                    <div className={styles.desc}>
                      {this.state.data.worker_description}
                    </div>
                    <Button className={styles.btnHire}>Hire</Button>
                    <h1 className={styles.title2}>Skills</h1>
                    <div className={styles.skills}>
                      {this.state.dataSkill.map((item, index) => {
                        return (
                          <Badge
                            variant="primary"
                            className={styles.badge}
                            key={index}
                          >
                            {item.skill_name}
                          </Badge>
                        );
                      })}
                      <Badge variant="primary" className={styles.badge}></Badge>{" "}
                    </div>
                    <Row>
                      <Col xs={1}>
                        <img alt="" src={email} className={styles.imgBottom} />
                        <img alt="" src={ig} className={styles.imgBottom1} />
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
                        <div className={styles.email}>
                          @ {this.state.data.worker_email}
                        </div>
                        <div className={styles.ig}>
                          @ {this.state.data.worker_instagram}
                        </div>
                        <div className={styles.github}>
                          @ {this.state.data.worker_github}
                        </div>
                        <div className={styles.gitlab}>
                          @ {this.state.data.worker_gitlab}
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
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
                        <div className={styles.underline1}>&nbsp;</div>
                      </Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Link
                        to={`/experience/${localStorage.getItem("workerId")}`}
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
                              <Card.Img
                                src={`http://localhost:3001/api/${item.portfolio_image}`}
                                className={styles.portImg}
                              />
                              <Card.Text className={styles.portName}>
                                {item.portfolio_name}
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

const mapStateToProps = (state) => ({
  experience: state.experience,
  worker: state.worker,
  skill: state.skill,
});
const mapDispatchToProps = { getPortfolios, getWorkerById, getSkills };
export default connect(mapStateToProps, mapDispatchToProps)(Portofolio);
