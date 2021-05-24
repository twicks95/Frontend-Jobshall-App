import React, { Component } from "react";
import styles from "./Experience.module.css";
import { Card, Col, Container, Row, Button, Badge, Nav } from "react-bootstrap";
import NavbarComponent from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
// import profileImg from "../../../assets/img/Ellipse 326.png";
import email from "../../../assets/img/mail (4).png";
import ig from "../../../assets/img/instagram.png";
import github from "../../../assets/img/github.png";
import gitlab from "../../../assets/img/gitlab.png";
import Suit from "../../../assets/img/suitcase 2.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getExperiences } from "../../../redux/actions/experience";
import { getWorkerById } from "../../../redux/actions/worker";
import { getSkills } from "../../../redux/actions/skill";

class Experience extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      dataExp: [],
      dataSkill: [],
      isExp: true,
      isPort: false,
    };
  }
  componentDidMount() {
    const id = localStorage.getItem("workerId");
    this.getExp(id);
    this.getWorkerId(id);
    this.getSkill(id);
  }
  getExp = (id) => {
    console.log(id);
    this.props.getExperiences(id).then((res) => {
      this.setState({ dataExp: res.action.payload.data.data });
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
  handleHire = () => {
    this.props.history.push("/hire");
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
                    <Button
                      className={styles.btnHire}
                      onClick={this.handleHire}
                    >
                      Hire
                    </Button>
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
                      </Link>
                    </Nav.Item>

                    <Nav.Item className={styles.nav1}>
                      <Link
                        to={`/experience?=${localStorage.getItem("workerId")}`}
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
                      console.log(item);
                      return (
                        <Row key={index} className={styles.cardExp}>
                          <Col sm={2} className={styles.imgExp}>
                            <img alt="" src={Suit} />
                          </Col>
                          <Col sm={9} className={styles.infoExp}>
                            <h1 className={styles.position}>
                              {item.experience_position}
                            </h1>
                            <p className={styles.name}>
                              {item.experience_company}
                            </p>
                            <Row>
                              <Col sm={5} className={styles.date}>
                                {item.experience_date_start.slice(0, 10)} -{" "}
                                {item.experience_date_end.slice(0, 10)}
                              </Col>
                              <Col sm={3} className={styles.date}>
                                {item.experience_date_end.slice(5, 7) -
                                  item.experience_date_start.slice(5, 7)}{" "}
                                month
                              </Col>
                            </Row>
                            <p className={styles.desc1}>
                              {item.experience_desc}
                            </p>
                          </Col>
                          <hr />
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
  worker: state.worker,
  skill: state.skill,
});
const mapDispatchToProps = { getExperiences, getWorkerById, getSkills };
export default connect(mapStateToProps, mapDispatchToProps)(Experience);
