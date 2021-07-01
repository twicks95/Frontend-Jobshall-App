import React, { Component } from "react";
import styles from "./hire.module.css";
import BadgeSkill from "../../../components/BadgeSkill/BadgeSkill";
import {
  Card,
  Col,
  Container,
  Row,
  Button,
  Form,
  Dropdown,
  Modal,
  Spinner,
} from "react-bootstrap";
import NavbarComponent from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import { connect } from "react-redux";
import { getPortfolios } from "../../../redux/actions/portfolio";
import { getWorkerById } from "../../../redux/actions/worker";
import { getAllSkills } from "../../../redux/actions/skill";
import axiosApiInstances from "../../../utils/axios";
import DefaultImage from "../../../assets/images/defaultprofilepict.png";

class Hire extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      form: {
        subject: "Project",
        message: "",
      },
      dataPort: [],
      isExp: false,
      isPort: true,
      show: false,
      sending: false,
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
    this.setState({ ...this.state, sending: true });
    const { form } = this.state;
    axiosApiInstances
      .post(
        `/recruiter/send-email/?workerId=${this.state.data.worker_id}`,
        form
      )
      .then((res) => {
        this.setState({
          ...this.state,
          form: { ...this.state.form, subject: "Project", message: "" },
          show: true,
          sending: false,
        });
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

  handleSubject = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        subject: e.target.innerText,
      },
    });
  };
  render() {
    console.log(this.state);
    return (
      <>
        <NavbarComponent />
        <Modal
          show={this.state.show}
          onHide={() => this.setState({ ...this.state.data, show: false })}
        >
          <Modal.Header>
            <Modal.Title className={styles.title}>JobShall</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Email has sent to {this.state.data.worker_name}
          </Modal.Body>
        </Modal>
        <Container fluid className={styles.main}>
          <Row className={styles.container}>
            <Col xs={12} md={4}>
              <Card className={styles.cardOne}>
                <Card.Img
                  src={
                    this.state.data.worker_image
                      ? `http://localhost:3001/api/${this.state.data.worker_image}`
                      : DefaultImage
                  }
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
                  <h1 className={styles.title2}>Skills</h1>
                  <BadgeSkill data={localStorage.getItem("workerId")} />
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={8} className={styles.col2}>
              <h5>Hubungi {this.state.data.worker_name}</h5>
              <h3>
                Kirim tawaran pekerjaan terbaik kepada talent untuk proyek yang
                anda rencanakan.
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
                    {this.state.form.subject}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={(e) => this.handleSubject(e)}>
                      Project
                    </Dropdown.Item>
                    <Dropdown.Item onClick={(e) => this.handleSubject(e)}>
                      Job Offering
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
                    value={this.state.form.message}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                {this.state.sending ? (
                  <Button
                    variant="secondary"
                    className={styles.button}
                    disabled
                  >
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      className="me-2"
                    />
                    Sending...
                  </Button>
                ) : (
                  <Button
                    variant="secondary"
                    type="submit"
                    className={styles.button}
                  >
                    Kirim
                  </Button>
                )}
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
  experience: state.experience,
  worker: state.worker,
  skill: state.skill,
});
const mapDispatchToProps = { getAllSkills, getPortfolios, getWorkerById };
export default connect(mapStateToProps, mapDispatchToProps)(Hire);
