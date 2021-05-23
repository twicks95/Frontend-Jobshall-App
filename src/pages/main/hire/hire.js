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
import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/Navbar/Navbar";
// import profileImg from "../../../assets/img/Ellipse 326.png";
import email from "../../../assets/img/mail (4).png";
import ig from "../../../assets/img/instagram.png";
import github from "../../../assets/img/github.png";
import gitlab from "../../../assets/img/gitlab.png";
import { connect } from "react-redux";
import { login } from "../../../redux/actions/auth";

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

  componentDidCatch() {}

  render() {
    const {
      worker_name,
      worker_job_desk,
      worker_status,
      worker_domicile,
      worker_phone,
      worker_description,
      worker_email,
      worker_github,
      worker_gitlab,
      worker_instagram,
      worker_image,
    } = this.props.worker.data;
    console.log(worker_name);
    return (
      <>
        <NavBar />
        <Container>
          <Row>
            <Col sm={4}>
              <Card className={styles.cardOne}>
                <Card.Img
                  src={worker_image}
                  variant="top"
                  className={styles.ppImg}
                />
                <Card.Body>
                  <div className={styles.title}>{worker_name}</div>
                  <div className={styles.field}>{worker_job_desk}</div>
                  <div className={styles.type}>{worker_status}</div>
                  <div className={styles.loc}>{worker_domicile}</div>
                  <div className={styles.phone}>{worker_phone}</div>
                  <div className={styles.desc}>{worker_description}</div>
                  <Button className={styles.btnHire}>Hire</Button>
                  <h1 className={styles.title2}>Skills</h1>
                  <div className={styles.skills}>
                    <Badge variant="primary" className={styles.badge}>
                      {""}
                    </Badge>
                    <Badge variant="primary" className={styles.badge}></Badge>{" "}
                  </div>
                  <Row>
                    <Col xs={1}>
                      <img alt="" src={email} className={styles.imgBottom} />
                      <img alt="" src={ig} className={styles.imgBottom1} />
                      <img alt="" src={github} className={styles.imgBottom2} />
                      <img alt="" src={gitlab} className={styles.imgBottom3} />
                    </Col>
                    <Col className={styles.colMargin}>
                      <div className={styles.email}>{worker_email}</div>
                      <div className={styles.ig}>{worker_instagram}</div>
                      <div className={styles.github}>{worker_github}</div>
                      <div className={styles.gitlab}>{worker_gitlab}</div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={8} className={styles.col2}>
              <h2>Hubungi Lous Tomlinson</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
              <Form.Label className={styles.labelH5}>
                Tujuan tentang pesan ini
              </Form.Label>
              <div>
                <Dropdown className={styles.dropdown}>
                  <Dropdown.Toggle
                    variant="light"
                    id="dropdown-basic"
                    className={styles.dropdown}
                  >
                    Project
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={styles.dropdownMenu}>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label className={styles.label}>Pesan</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={10}
                    placeholder="Deskripsikan/jelaskan lebih detail"
                    className={styles.textArea}
                  />
                </Form.Group>
                <Button
                  variant="light"
                  type="submit"
                  className={styles.btnSend}
                >
                  Kirim
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  worker: state.auth,
});

const mapDisPatchProps = { login };

export default connect(mapStateToProps, mapDisPatchProps)(Experience);
