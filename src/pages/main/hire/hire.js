import React, { Component } from "react";
import styles from "./hire.module.css";
import {
  Card,
  Col,
  Container,
  Row,
  Button,
  Badge,
  Form,
  Dropdown,
} from "react-bootstrap";
import NavbarComponent from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import profileImg from "../../../assets/img/Ellipse 326.png";
import email from "../../../assets/img/mail (4).png";
import ig from "../../../assets/img/instagram.png";
import github from "../../../assets/img/github.png";
import gitlab from "../../../assets/img/gitlab.png";
import { connect } from "react-redux";
import { getPortfolios } from "../../../redux/actions/portfolio";
import { getWorkerById } from "../../../redux/actions/worker";
import axiosApiInstances from "../../../utils/axios";

class Portofolio extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      form: {
        message: "",
      },
      dataPort: [],
      isExp: false,
      isPort: true,
    };
  }
  componentDidMount() {
    const id = localStorage.getItem("workerId");
    this.getWorkerId(id);
  }
  getWorkerId = (id) => {
    this.props.getWorkerById(id).then((res) => {
      this.setState({ data: res.action.payload.data.data[0] });
    });
  };
  sendEmail = (event) => {
    event.preventDefault();
    const { form } = this.state;
    axiosApiInstances
      .post(
        `/recruiter/send-email/?workerId=${this.state.data.worker_id}`,
        form
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  changeText = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
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
                      {/* {this.state.data.skills.map((item, index) => {
                        return (
                          <Badge
                            variant="primary"
                            className={styles.badge}
                            key={index}
                          >
                            {item}
                          </Badge>
                        );
                      })} */}
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
                          {this.state.data.worker_email}
                        </div>
                        <div className={styles.ig}>
                          {this.state.data.worker_instagram}
                        </div>
                        <div className={styles.github}>
                          {this.state.data.worker_github}
                        </div>
                        <div className={styles.gitlab}>
                          {this.state.data.worker_gitlab}
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={8} className={styles.col2}>
                <h5>Hubungi {this.state.data.worker_name}</h5>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </h3>
                <Form onSubmit={this.sendEmail}>
                  <Form.Label className={styles.label}>
                    Tujuan tentang pesan ini
                  </Form.Label>
                  <Dropdown className={styles.dropdown}>
                    <Dropdown.Toggle
                      variant="light"
                      id="dropdown-basic"
                      className={styles.dropdownName}
                    >
                      Project
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className={styles.label}>Pesan</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={10}
                      placeholder="Deskripsikan/jelaskan lebih detail "
                      name="message"
                      onChange={(event) => this.changeText(event)}
                    />
                  </Form.Group>
                  <Button
                    variant="light"
                    type="submit"
                    className={styles.button}
                  >
                    Kirm
                  </Button>
                </Form>
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
});
const mapDispatchToProps = { getPortfolios, getWorkerById };
export default connect(mapStateToProps, mapDispatchToProps)(Portofolio);
