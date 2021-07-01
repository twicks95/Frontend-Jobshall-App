import React, { Component } from "react";

import styles from "./Portfolio.module.css";
import NavbarComponent from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import email from "../../../assets/img/mail (4).png";
import ig from "../../../assets/img/instagram.png";
import github from "../../../assets/img/github.png";
import gitlab from "../../../assets/img/gitlab.png";
import defaultImg from "../../../assets/images/defaultprofilepict.png";
import DefaultPicture from "../../../assets/images/defaultprofilepict.png";

import { Card, Col, Container, Row, Button, Badge, Nav } from "react-bootstrap";
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
  handleEdit = () => {
    this.props.history.push(
      `/worker/edit?id=${localStorage.getItem("workerId")}`
    );
  };
  handleHire = () => {
    this.props.history.push(
      `/hire?id=${this.props.worker.worker[0].worker_id}`
    );
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
                    src={
                      this.state.data.worker_image
                        ? `http://localhost:3001/api/${this.state.data.worker_image}`
                        : defaultImg
                    }
                    variant="top"
                    className={styles.ppImg}
                  />

                  <Card.Body>
                    <div className={styles.title}>
                      {this.state.data.worker_name
                        ? this.state.data.worker_name
                        : "Workers"}
                    </div>
                    <div className={styles.field}>
                      {this.state.data.worker_job_desk
                        ? this.state.data.worker_job_desk
                        : "Searching for job"}
                    </div>
                    <div className={styles.type}>
                      {this.state.data.worker_status
                        ? this.state.data.worker_status
                        : "Free as a Wind"}
                    </div>
                    <div className={styles.loc}>
                      {this.state.data.worker_domicile
                        ? this.state.data.worker_domicile
                        : "Mars"}
                    </div>
                    <div className={styles.phone}>
                      {this.state.data.worker_phone
                        ? this.state.data.worker_phone
                        : "1234567890"}
                    </div>
                    <div className={styles.desc}>
                      {this.state.data.worker_description
                        ? this.state.data.worker_description
                        : "Tell about yourself"}
                    </div>
                    {this.props.auth.data.role === "worker" ? (
                      <Button
                        className={styles.btnHire}
                        onClick={this.handleEdit}
                      >
                        Edit Profile
                      </Button>
                    ) : (
                      <Button
                        className={styles.btnHire}
                        onClick={this.handleHire}
                      >
                        Hire
                      </Button>
                    )}
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
                        to={`/portofolio?id=${localStorage.getItem(
                          "workerId"
                        )}`}
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
                        to={`/experience?id=${localStorage.getItem(
                          "workerId"
                        )}`}
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
                      {this.state.dataPort.length <= 0
                        ? "Belum ada Data"
                        : this.state.dataPort.map((item, index) => {
                            return (
                              <Col sm={4} key={index}>
                                <Card className={styles.cardPort}>
                                  <Card.Img
                                    src={
                                      item.portfolio_image
                                        ? `http://localhost:3001/api/${item.portfolio_image}`
                                        : DefaultPicture
                                    }
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
  auth: state.auth,
  experience: state.experience,
  worker: state.worker,
  skill: state.skill,
});
const mapDispatchToProps = { getPortfolios, getWorkerById, getSkills };
export default connect(mapStateToProps, mapDispatchToProps)(Portofolio);
