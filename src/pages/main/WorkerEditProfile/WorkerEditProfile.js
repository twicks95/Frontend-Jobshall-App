import React, { Component } from "react";
import styles from "./WorkerEditProfile.module.css";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import moment from "moment";
import NavbarComponent from "../../../components/Navbar/Navbar";
import defaultImg from "../../../assets/images/defaultprofilepict.png";
import Footer from "../../../components/Footer/Footer";
import upload from "../../../assets/img/Vector.png";
import setImg from "../../../assets/img/Group.png";
import sizeImg from "../../../assets/img/expand 2.png";
import NoProfilePicture from "../../../assets/images/defaultprofilepict.png";
import { Info, PencilSimple, TrashSimple } from "phosphor-react";

import {
  getWorkerById,
  updateWorkerData,
  getWorkers,
} from "../../../redux/actions/worker";
import {
  createSkill,
  getSkills,
  updateSkill,
  deleteSkill,
} from "../../../redux/actions/skill";
import {
  getExperiences,
  createExperience,
  deleteExperience,
  updateExperience,
} from "../../../redux/actions/experience";
import {
  getPortfolios,
  createPortfolio,
  deletePortfolio,
  updatePortfolio,
} from "../../../redux/actions/portfolio";
import { connect } from "react-redux";

// import CardExperience from "../../../components/CardExperience/CardExperience";
import CardPort from "../../../components/CardPort/CardPort";

class WorkerEditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formWorker: {
        workerName: this.props.worker.worker[0].worker_name,
        workerDomicile: this.props.worker.worker[0].worker_domicile,
        workerStatus: this.props.worker.worker[0].worker_status,
        workerJobDesk: this.props.worker.worker[0].worker_job_desk,
        workerPhone: this.props.worker.worker[0].worker_phone,
        workerGithub: this.props.worker.worker[0].worker_github,
        workerGitlab: this.props.worker.worker[0].worker_gitlab,
        workerInstagram: this.props.worker.worker[0].worker_instagram,
        workerDescription: this.props.worker.worker[0].worker_description,
        // imageData: null,
      },
      formSkill: {
        workerId: localStorage.getItem("workerId"),
        skillName: "",
      },
      formExperience: {
        workerId: localStorage.getItem("workerId"),
        experienceCompany: "",
        experiencePosition: "",
        experienceDateStart: "",
        experienceDateEnd: "",
        experienceDesc: "",
      },
      formPortofolio: {
        workerId: localStorage.getItem("workerId"),
        portfolioName: "",
        portfolioLink: "",
        image: null,
      },
      dataWorker: {},
      dataSkills: [],
      dataPort: [],
      itemSkills: {},
      dataExperience: [],
      idSkill: "",
      id: "",
      idExp: "",
      idPort: "",
      isDelete: false,
      isDeleteExp: false,
      isDeletePort: false,
      isCreateSkill: false,
      isCreateExp: false,
      isCreatePort: false,
      show: false,
      setShow: false,
      isUpdate: false,
      isUpdateWorker: false,
      isUpdateWorkerSuccess: false,
      isUpdateSkill: false,
      isUpdateExp: false,
      isUpdateExp2: false,
      isUpdatePort: false,
      isUpdatePort2: false,
<<<<<<< HEAD
      alert: true,
      imageDefault: "",
      isImage: false,
=======
      missingRequiredInput: false,
>>>>>>> 71d3a9eb4ca36b5e2cd400063ac153df9430a1a0
    };
  }
  componentDidMount() {
    const id = localStorage.getItem("workerId");
    this.props.getWorkerById(id);
    this.props.getSkills(id);
    this.getExperienceId(id);
    this.getPort(id);

    const inputText = document.querySelectorAll(
      '.personalDataForm input[type="text"]'
    );
    const inputNumber = document.querySelector('input[type="number"]');
    const inputSelect = document.getElementsByTagName("select")[0];
    const inputTextarea = document.getElementsByTagName("textarea")[0];
    for (const el of inputText) {
      el.disabled = true;
    }
    inputNumber.disabled = true;
    inputSelect.disabled = true;
    inputTextarea.disabled = true;
  }
  handleEnabledForm = () => {
    this.setState({ ...this.state, isUpdateWorker: true });
    const inputText = document.querySelectorAll(
      '.personalDataForm input[type="text"]'
    );
    const inputNumber = document.querySelector('input[type="number"]');
    const inputSelect = document.getElementsByTagName("select")[0];
    const inputTextarea = document.getElementsByTagName("textarea")[0];
    for (const el of inputText) {
      el.disabled = false;
    }
    inputNumber.disabled = false;
    inputSelect.disabled = false;
    inputTextarea.disabled = false;
  };
  handleDisabledForm = () => {
    this.setState({ ...this.state, isUpdateWorker: false });
    const inputText = document.querySelectorAll(
      '.personalDataForm input[type="text"]'
    );
    const inputNumber = document.querySelector('input[type="number"]');
    const inputSelect = document.getElementsByTagName("select")[0];
    const inputTextarea = document.getElementsByTagName("textarea")[0];
    for (const el of inputText) {
      el.disabled = true;
    }
    inputNumber.disabled = true;
    inputSelect.disabled = true;
    inputTextarea.disabled = true;
  };
  getWorkerId = (id) => {
    this.props.getWorkerById(id).then((res) => {
      this.setState({
        dataWorker: res.action.payload.data.data[0],
      });
    });
  };
  getSkillId = (id) => {
    this.props.getSkills(id).then((res) => {
      this.setState({
        dataSkills: res.action.payload.data.data,
        itemSkills: res.action.payload.data.data[0],
      });
    });
  };
  getExperienceId = (id) => {
    this.props.getExperiences(id).then((res) => {
      this.setState({ dataExperience: res.action.payload.data.data });
    });
  };
  getPort = (id) => {
    this.props.getPortfolios(id).then((res) => {
      this.setState({ dataPort: res.action.payload.data.data });
    });
  };
  changeText = (event) => {
    this.setState({
      formWorker: {
        ...this.state.formWorker,
        [event.target.name]: event.target.value,
      },
    });
  };
  changeTextSkill = (event) => {
    this.setState({
      formSkill: {
        ...this.state.formSkill,
        [event.target.name]: event.target.value,
      },
    });
  };
  changeTextExp = (event) => {
    this.setState({
      formExperience: {
        ...this.state.formExperience,
        [event.target.name]: event.target.value,
      },
    });
  };
  changeTextPort = (event) => {
    this.setState({
      formPortofolio: {
        ...this.state.formPortofolio,
        [event.target.name]: event.target.value,
      },
    });
  };
<<<<<<< HEAD
  updateDataWorker = (event) => {
    this.setState({ alert: false });
=======
  updateDataWorker = () => {
>>>>>>> 71d3a9eb4ca36b5e2cd400063ac153df9430a1a0
    const id = localStorage.getItem("workerId");
    const {
      workerName,
      workerJobDesk,
      workerDomicile,
      workerPhone,
      workerStatus,
    } = this.state.formWorker;

    workerName && workerJobDesk && workerDomicile && workerPhone && workerStatus
      ? this.props.updateWorkerData(id, this.state.formWorker).then(() => {
          this.setState({
            ...this.state,
            show: true,
            isUpdateWorkerSuccess: true,
          });
          this.props.getWorkerById(id);
          this.handleDisabledForm();
        })
      : this.setState({
          ...this.state,
          show: true,
          missingRequiredInput: true,
        });
  };
  resetDataWorker = () => {
    this.setState({
      formWorker: {
        workerName: this.props.worker.worker[0].worker_name,
        workerDomicile: this.props.worker.worker[0].worker_domicile,
        workerStatus: this.props.worker.worker[0].worker_status,
        workerJobDesk: this.props.worker.worker[0].worker_job_desk,
        workerPhone: this.props.worker.worker[0].worker_phone,
        workerGithub: this.props.worker.worker[0].worker_github,
        workerGitlab: this.props.worker.worker[0].worker_gitlab,
        workerInstagram: this.props.worker.worker[0].worker_instagram,
        workerDescription: this.props.worker.worker[0].worker_description,
        image: null,
      },
    });
  };
  resetDataSkills = () => {
    this.setState({
      formSkill: {
        ...this.state.formSkill,
        skillName: "",
      },
    });
  };
  resetDataExp = () => {
    this.setState({
      formExperience: {
        workerId: localStorage.getItem("workerId"),
        experienceCompany: "",
        experiencePosition: "",
        experienceDateStart: "",
        experienceDateEnd: "",
        experienceDesc: "",
      },
    });
    this.setState({ isUpdateExp: false });
  };
  resetDataPort = (event) => {
    event.preventDefault();
    this.setState({
      formPortofolio: {
        workerId: localStorage.getItem("workerId"),
        portfolioName: "",
        portfolioLink: "",
        image: null,
      },
      isUpdatePort: false,
    });
  };
  createSkill = (event) => {
    event.preventDefault();
    this.props.createSkill(this.state.formSkill).then(() => {
      this.props.getSkills(localStorage.getItem("workerId"));
      this.resetDataSkills();
    });
  };
  handleBack = () => {
    this.props.history.push("/");
  };
  createPort = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("workerId", localStorage.getItem("workerId"));
    formData.append("portfolioName", this.state.formPortofolio.portfolioName);
    formData.append("portfolioLink", this.state.formPortofolio.portfolioLink);
    formData.append("image", this.state.formPortofolio.image);
    this.props.createPortfolio(formData).then((res) => {
      this.setState({ show: true, isCreatePort: true });
      this.getPort(localStorage.getItem("workerId"));
      this.resetDataPort(event);
    });
  };
  updateSkill = (event) => {
    event.preventDefault();
    const { idSkill, formSkill } = this.state;

    this.props.updateSkill(idSkill, formSkill).then((res) => {
      this.setState({ isUpdate: false });
      this.setState({ show: true, isUpdateSkill: true, isUpdate: false });
      this.props.getSkills(localStorage.getItem("workerId"));
      this.resetDataSkills();
    });
  };
  updateExp = (event) => {
    const { idExp, formExperience } = this.state;
    this.props.updateExperience(idExp, formExperience).then((res) => {
      this.setState({ show: true, isUpdateExp2: true, isUpdate: false });
      this.getExperienceId(localStorage.getItem("workerId"));
      this.resetDataExp(event);
    });
  };
  updatePort = (event) => {
    event.preventDefault();
    const { idPort } = this.state;
    const formData = new FormData();
    formData.append("workerId", localStorage.getItem("workerId"));
    formData.append("portfolioName", this.state.formPortofolio.portfolioName);
    formData.append("portfolioLink", this.state.formPortofolio.portfolioLink);
    formData.append("image", this.state.formPortofolio.image);
    this.props.updatePortfolio(idPort, formData).then((res) => {
      this.setState({ show: true, isUpdatePort2: true });
      this.getPort(localStorage.getItem("workerId"));
      this.resetDataPort(event);
    });
  };
  deleteSkill = (id) => {
    this.props
      .deleteSkill(id)
      .then((res) => {
        this.props.getSkills(localStorage.getItem("workerId"));
        // this.setState({ show: true, isDelete: true });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  deleteExp = (event) => {
    event.preventDefault();
    const { idExp } = this.state;
    this.props.deleteExperience(idExp).then((res) => {
      this.getExperienceId(localStorage.getItem("workerId"));
      this.resetDataExp(event);
      this.setState({ show: true, isDeleteExp: true, isUpdateExp: false });
    });
  };
  deletePort = (event) => {
    event.preventDefault();
    const { idPort } = this.state;
    this.props.deletePortfolio(idPort).then((res) => {
      this.getPort(localStorage.getItem("workerId"));
      this.resetDataPort(event);
      this.setState({ show: true, isUpdatePort: false, isDeletePort: true });
    });
  };
  createExp = () => {
    const id = localStorage.getItem("workerId");
    this.props.createExperience(this.state.formExperience).then((res) => {
      this.setState({ show: true, isCreateExp: true });
      this.getExperienceId(id);
      this.resetDataExp();
    });
  };
  handleClose = () => {
    this.setState({
      ...this.state,
      show: false,
      isUpdateWorkerSuccess: false,
      missingRequiredInput: false,
    });
  };
  handleImage = (event) => {
    this.setState({ isImage: true });
    this.setState({ imageDefault: URL.createObjectURL(event.target.files[0]) });
    this.setState({
      formWorker: {
        ...this.state.formWorker,
        imageData: event.target.files[0],
      },
      formPortofolio: {
        ...this.state.formPortofolio,
        image: event.target.files[0],
      },
    });
  };
  handleSetUpdate = (data) => {
    this.setState({
      isUpdate: true,
      idSkill: data.skillId,
      formSkill: {
        ...this.state.formSkill,
        skillName: data.skillName,
      },
    });
  };
  handleSetUpdatePort = (data) => {
    this.setState({
      isUpdatePort: true,
      idPort: data.portfolio_id,
      formPortofolio: {
        workerId: data.worker_id,
        portfolioName: data.portfolio_name,
        portfolioLink: data.portfolio_link_repo,
        image: null,
      },
    });
  };
  handleSetUpdateExp = (data) => {
    this.setState({
      isUpdateExp: true,
      idExp: data.experience_id,
      formExperience: {
        workerId: localStorage.getItem("workerId"),
        experienceCompany: data.experience_company,
        experiencePosition: data.experience_position,
        experienceDateStart: data.experience_date_start.slice(0, 10),
        experienceDateEnd: data.experience_date_end.slice(0, 10),
        experienceDesc: data.experience_desc,
      },
    });
  };
  render() {
    const { skillName } = this.state.formSkill;
    const {
      workerName,
      workerDomicile,
      workerStatus,
      workerJobDesk,
      workerPhone,
      workerInstagram,
      workerGithub,
      workerGitlab,
      workerDescription,
    } = this.state.formWorker;
    const {
      worker_name,
      worker_domicile,
      worker_status,
      worker_job_desk,
      worker_phone,
      worker_description,
      worker_image,
    } = this.props.worker.worker[0];
    return (
      <>
        <Container fluid className={styles.mainBackground}>
          <NavbarComponent />
          <Container>
            <Row xs={1} lg={2} className={styles.mainRow}>
              <Col lg={5}>
                <Card className={styles.cardProfile}>
                  <Card.Img
                    variant="top"
                    src={
                      worker_image
                        ? `http://localhost:3001/api/${worker_image}`
                        : NoProfilePicture
                    }
                    className={styles.imgCard}
                  />
                  <Card.Body>
                    <label for="file" className={styles.editText}>
                      Edit
                    </label>
                    <input
                      type="file"
                      id="file"
                      onChange={(event) => this.handleImage(event)}
                    />
                  </Card.Body>
                  <Card.Body>
                    <h1 className={styles.profileName}>
                      {worker_name ? worker_name : "Anonymous"}
                    </h1>
                    <p className={styles.profileField}>
                      {worker_job_desk ? worker_job_desk : "Job Desk"}
                    </p>
                    <p className={styles.profileType}>
                      {worker_status ? worker_status : "Worker type"}
                    </p>
                    <p className={styles.profileLoc}>
                      {worker_domicile ? worker_domicile : "Domicile"}
                    </p>
                    <p className={styles.profilePhone}>
                      {worker_phone ? worker_phone : "Your phone number"}
                    </p>
                    <p className={styles.profileDesc}>
                      {worker_description
                        ? worker_description
                        : "Tell about something and your skills"}
                    </p>
                  </Card.Body>
                </Card>
                <Button className={styles.btnBack} onClick={this.handleBack}>
                  Kembali
                </Button>
              </Col>
              <Col lg={7}>
                <Card className={styles.cardForm}>
                  <Card.Title className={styles.title}>Data diri</Card.Title>
                  <hr />
                  <Card.Body className="p-0">
                    <Form className="personalDataForm">
                      <Form.Row>
                        <Form.Group>
                          <Form.Label className={styles.everyLabel}>
                            Nama lengkap
                            {this.state.isUpdateWorker && (
                              <span
                                style={{
                                  color: "#e83a3a",
                                  fontSize: ".7em",
                                  fontWeight: "600",
                                  paddingLeft: "13px",
                                  paddingBottom: "4px",
                                }}
                              >
                                (Kolom ini wajib diisi)
                              </span>
                            )}
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Masukan nama lengkap"
                            className={styles.everyControl}
                            name="workerName"
                            value={workerName}
                            onChange={(event) => this.changeText(event)}
                            required
                          />
                        </Form.Group>

                        <Form.Group>
                          <Form.Label className={styles.everyLabel}>
                            Job desk
                            {this.state.isUpdateWorker && (
                              <span
                                style={{
                                  color: "#e83a3a",
                                  fontSize: ".7em",
                                  fontWeight: "600",
                                  paddingLeft: "13px",
                                  paddingBottom: "4px",
                                }}
                              >
                                (Kolom ini wajib diisi)
                              </span>
                            )}
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Masukan job desk"
                            className={styles.everyControl}
                            name="workerJobDesk"
                            value={workerJobDesk}
                            onChange={(event) => this.changeText(event)}
                            required
                          />
                        </Form.Group>
                      </Form.Row>

                      <Form.Group>
                        <Form.Label className={styles.everyLabel}>
                          Domisili
                          {this.state.isUpdateWorker && (
                            <span
                              style={{
                                color: "#e83a3a",
                                fontSize: ".7em",
                                fontWeight: "600",
                                paddingLeft: "13px",
                                paddingBottom: "4px",
                              }}
                            >
                              (Kolom ini wajib diisi)
                            </span>
                          )}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Masukan domisili"
                          className={styles.everyControl}
                          name="workerDomicile"
                          value={workerDomicile}
                          onChange={(event) => this.changeText(event)}
                          required
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className={styles.everyLabel}>
                          Phone
                          {this.state.isUpdateWorker && (
                            <span
                              style={{
                                color: "#e83a3a",
                                fontSize: ".7em",
                                fontWeight: "600",
                                paddingLeft: "13px",
                                paddingBottom: "4px",
                              }}
                            >
                              (Kolom ini wajib diisi)
                            </span>
                          )}
                        </Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Masukan no phone"
                          className={styles.everyControl}
                          name="workerPhone"
                          value={workerPhone}
                          onChange={(event) => this.changeText(event)}
                          required
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className={styles.everyLabel}>
                          Worker Type
                          {this.state.isUpdateWorker && (
                            <span
                              style={{
                                color: "#e83a3a",
                                fontSize: ".7em",
                                fontWeight: "600",
                                paddingLeft: "13px",
                                paddingBottom: "4px",
                              }}
                            >
                              (Kolom ini wajib diisi)
                            </span>
                          )}
                        </Form.Label>
                        <Form.Control
                          as="select"
                          className={styles.everyControl}
                          name="workerStatus"
                          value={workerStatus}
                          onChange={(event) => this.changeText(event)}
                          required
                        >
                          <option>select status</option>
                          <option>freelance</option>
                          <option>fulltime</option>
                        </Form.Control>
                      </Form.Group>
                      <Row className={styles.socialAccount}>
                        <Col>
                          <Form.Group>
                            <Form.Label className={styles.everyLabel}>
                              Instagram
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Masukan Username IG"
                              className={styles.everyControl}
                              name="workerInstagram"
                              value={workerInstagram}
                              onChange={(event) => this.changeText(event)}
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label className={styles.everyLabel}>
                              Github
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Masukan Username Github"
                              className={styles.everyControl}
                              name="workerGithub"
                              value={workerGithub}
                              onChange={(event) => this.changeText(event)}
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label className={styles.everyLabel}>
                              Gitlab
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Masukan Username Gitlab"
                              className={styles.everyControl}
                              name="workerGitlab"
                              value={workerGitlab}
                              onChange={(event) => this.changeText(event)}
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group>
                        <Form.Label className={styles.everyLabel}>
                          Deskripsi singkat
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          type="text"
                          placeholder="Tuliskan deskripsi singkat"
                          className={styles.controlArea}
                          name="workerDescription"
                          value={workerDescription}
                          onChange={(event) => this.changeText(event)}
                          required
                        />
                      </Form.Group>
                      <Button
                        variant="secondary"
                        className={styles.btnSave}
                        onClick={
                          this.state.isUpdateWorker
                            ? this.updateDataWorker
                            : this.handleEnabledForm
                        }
                      >
                        {this.state.isUpdateWorker ? "Simpan" : "Update"}
                      </Button>
                      <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header>
                          <Modal.Title className={styles.title}>
                            JobShall
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          {this.state.isDelete
                            ? "Success Delete Skill"
                            : this.state.isUpdateWorkerSuccess
                            ? `Success Update Profile, ${worker_name}`
                            : this.state.isCreateSkill
                            ? "Success Create Data Skill"
                            : this.state.isCreateExp
                            ? "Success Create Experience Work"
                            : this.state.isCreatePort
                            ? "Success Create Portfolio"
                            : this.state.isDeleteExp
                            ? "Success Delete Experience Work"
                            : this.state.isDeletePort
                            ? "Success Delete Portfolio"
                            : this.state.isUpdateSkill
                            ? "Success Update Skill"
                            : this.state.isUpdateExp2
                            ? "Success Update Experience Work"
                            : this.state.isUpdatePort2
                            ? "Success Update Portfolio"
                            : this.state.missingRequiredInput
                            ? "Please fill in the required input"
                            : "Modal is Work"}
                        </Modal.Body>
                      </Modal>
                    </Form>
                  </Card.Body>
                </Card>
                <Card className={styles.cardSkill}>
                  <Card.Title className={styles.title}>Skill</Card.Title>
                  <hr />
                  <Form>
                    <Row>
                      <Col sm={10}>
                        <Form.Control
                          type="text"
                          placeholder="Java"
                          className={styles.everyControl}
                          name="skillName"
                          value={skillName}
                          onChange={(event) => this.changeTextSkill(event)}
                        />
                      </Col>
                      <Col sm={2}>
                        <Button
                          variant="secondary"
                          className={styles.btnSaveSkill}
                          onClick={
                            this.state.isUpdate
                              ? (event) => this.updateSkill(event)
                              : (event) => this.createSkill(event)
                          }
                        >
                          {this.state.isUpdate ? "Update" : "Simpan"}
                        </Button>
                      </Col>
                    </Row>
                    <Row xs={2} md={4} className={styles.rowSkill}>
                      {this.props.skill.skills.data.data.map((item, index) => (
                        <Col key={index}>
                          <div
                            title={item.skill_name}
                            className={styles.skillBadge}
                          >
                            <span>{item.skill_name}</span>
                            <div>
                              <PencilSimple
                                weight="bold"
                                className={`me-1 ${styles.actionButton}`}
                                onClick={() =>
                                  this.handleSetUpdate({
                                    skillId: item.skill_id,
                                    skillName: item.skill_name,
                                  })
                                }
                              />
                              <TrashSimple
                                weight="bold"
                                className={styles.actionButton}
                                onClick={() => this.deleteSkill(item.skill_id)}
                              />
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </Form>
                </Card>
                <Card className={styles.cardExp}>
                  <Card.Title className={styles.title}>
                    Pengalaman kerja
                  </Card.Title>
                  <hr />
                  <Form>
                    <Row className="mb-0">
                      <Col>
                        <Form.Group>
                          <Form.Label className={styles.everyLabelExp}>
                            Nama Perusahaan
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="PT Apa Saja"
                            className={styles.everyControl}
                            name="experienceCompany"
                            value={this.state.formExperience.experienceCompany}
                            onChange={(event) => this.changeTextExp(event)}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label className={styles.everyLabelExp}>
                            Tanggal Masuk
                          </Form.Label>
                          <Form.Control
                            type="date"
                            className={styles.everyControl}
                            name="experienceDateStart"
                            value={
                              this.state.formExperience.experienceDateStart
                            }
                            onChange={(event) => this.changeTextExp(event)}
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group>
                          <Form.Label className={styles.everyLabelExp}>
                            Posisi
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Web Developer"
                            className={styles.everyControl}
                            name="experiencePosition"
                            value={this.state.formExperience.experiencePosition}
                            onChange={(event) => this.changeTextExp(event)}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label className={styles.everyLabelExp}>
                            Tanggal Keluar
                          </Form.Label>
                          <Form.Control
                            type="date"
                            className={styles.everyControl}
                            name="experienceDateEnd"
                            value={this.state.formExperience.experienceDateEnd}
                            onChange={(event) => this.changeTextExp(event)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group>
                      <Form.Label className={styles.everyLabelExp}>
                        Deskripsi singkat
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        type="text"
                        placeholder="Tuliskan deskripsi singkat"
                        className={styles.controlAreaExp}
                        name="experienceDesc"
                        value={this.state.formExperience.experienceDesc}
                        onChange={(event) => this.changeTextExp(event)}
                      />
                    </Form.Group>
                  </Form>
                  <hr />
                  {this.state.isUpdateExp ? (
                    <Row>
                      <Col xs={4}>
                        <Button
                          className={styles.btnAdd1}
                          onClick={(event) => this.updateExp(event)}
                        >
                          Update pengalaman kerja
                        </Button>
                      </Col>
                      <Col xs={4}>
                        <Button
                          className={styles.btnAdd2}
                          onClick={(event) => this.resetDataExp(event)}
                        >
                          Batal
                        </Button>
                      </Col>
                      <Col xs={4}>
                        <Button
                          className={styles.btnAdd3}
                          onClick={(event) => this.deleteExp(event)}
                        >
                          Delete
                        </Button>
                      </Col>
                    </Row>
                  ) : (
                    <Button
                      className={styles.btnAdd}
                      onClick={(event) => this.createExp(event)}
                    >
                      Tambah pengalaman kerja
                    </Button>
                  )}

                  <hr />
                  <span
                    style={{ fontWeight: "600", marginBottom: "20px" }}
                    className="d-flex align-items-center"
                  >
                    <Info weight="bold" size={18} className="me-2" /> Click card
                    to edit experience
                  </span>
                  <Row className={styles.mainRowExp}>
                    {this.props.experience.experiences.length > 0 ? (
                      this.props.experience.experiences.map((item, index) => (
                        <Col
                          xs={10}
                          md={8}
                          key={index}
                          onClick={() => this.handleSetUpdateExp(item)}
                        >
                          <div className={styles.experienceList}>
                            <h5>{item.experience_position}</h5>
                            <h6>{item.experience_company}</h6>
                            <div>
                              <span>
                                {moment(item.experience_date_start).format(
                                  "MMM YYYY"
                                )}{" "}
                                -{" "}
                                {moment(item.experience_date_end).format(
                                  "MMM YYYY"
                                )}
                              </span>
                              <span>
                                {moment(item.experience_date_end).from(
                                  item.experience_date_start,
                                  true
                                )}
                              </span>
                            </div>
                            <p>{item.experience_desc}</p>
                          </div>
                        </Col>
                      ))
                    ) : (
                      <Col>
                        <div
                          style={{
                            border: "1px solid #6f707265",
                            borderRadius: "5px",
                            display: "grid",
                            placeItems: "center",
                            height: "100%",
                          }}
                        >
                          No experience
                        </div>
                      </Col>
                    )}
                  </Row>
                </Card>
                <Card className={styles.cardPort}>
                  <Card.Title className={styles.title}>Portofolio</Card.Title>
                  <hr />
                  <Form>
                    <Form.Group>
                      <Form.Label className={styles.everyLabelPort}>
                        Nama aplikasi
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukan nama aplikasi"
                        className={styles.everyControl}
                        name="portfolioName"
                        value={this.state.formPortofolio.portfolioName}
                        onChange={(event) => this.changeTextPort(event)}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label className={styles.everyLabelPort}>
                        Link repository
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukan link repository"
                        className={styles.everyControl}
                        name="portfolioLink"
                        value={this.state.formPortofolio.portfolioLink}
                        onChange={(event) => this.changeTextPort(event)}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label className={styles.everyLabelPort}>
                        Upload gambar
                      </Form.Label>
                      <label for="file">
                        <input
                          type="file"
                          id="file"
                          onChange={(event) => this.handleImage2(event)}
                        />
                        <Card className={styles.cardUpload}>
                          <Card.Img src={upload} className={styles.imgUpload} />
                          <Card.Body>
                            <Card.Text>
                              <p className={styles.subTextPort1}>
                                Drag & Drop untuk Upload Gambar Aplikasi Mobile
                              </p>
                              <p className={styles.subTextPort2}>
                                Atau cari untuk mengupload file dari
                                direktorimu.
                              </p>
                            </Card.Text>
                            <Row className={styles.mainRowImg}>
                              <Col>
                                <Row>
                                  <Col sm={7} className={styles.col1Upload}>
                                    <img alt="" src={setImg} />
                                  </Col>
                                  <Col sm={4} className={styles.col2Upload}>
                                    <p className={styles.uploadSet1}>
                                      High-Res Image
                                      <br /> PNG, JPG or GIF{" "}
                                    </p>
                                  </Col>
                                </Row>
                              </Col>
                              <Col>
                                <Row>
                                  <Col sm={2} className={styles.col3Upload}>
                                    <img alt="" src={sizeImg} />
                                  </Col>
                                  <Col sm={6} className={styles.col4Upload}>
                                    <p className={styles.uploadSet2}>
                                      Size
                                      <br />
                                      1080x1920 or 600x800
                                    </p>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </label>
                    </Form.Group>
                  </Form>

                  <hr />
                  {this.state.isUpdatePort ? (
                    <Row>
                      <Col xs={4}>
                        <Button
                          className={styles.btnAdd1}
                          onClick={(event) => this.updatePort(event)}
                        >
                          Update Portfolio
                        </Button>
                      </Col>
                      <Col xs={4}>
                        <Button
                          className={styles.btnAdd2}
                          onClick={(event) => this.resetDataPort(event)}
                        >
                          Batal
                        </Button>
                      </Col>
                      <Col xs={4}>
                        <Button
                          className={styles.btnAdd3}
                          onClick={(event) => this.deletePort(event)}
                        >
                          Delete
                        </Button>
                      </Col>
                    </Row>
                  ) : (
                    <Button
                      className={styles.btnAdd}
                      onClick={(event) => this.createPort(event)}
                    >
                      Tambah Portfolio
                    </Button>
                  )}
                  <Row className={styles.mainRowPort}>
                    {this.state.dataPort.map((item, index) => {
                      return (
                        <Col key={index} sm={4}>
                          <CardPort
                            dataPort={item}
                            setUpdatePort={this.handleSetUpdatePort.bind(this)}
                          />
                        </Col>
                      );
                    })}
                  </Row>
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
  worker: state.worker,
  skill: state.skill,
  experience: state.experience,
  portfolio: state.portfolio,
});

const mapDispatchToProps = {
  getWorkerById,
  updateWorkerData,
  getWorkers,
  createSkill,
  getSkills,
  getExperiences,
  updateSkill,
  deleteSkill,
  createExperience,
  deleteExperience,
  updateExperience,
  getPortfolios,
  createPortfolio,
  deletePortfolio,
  updatePortfolio,
};
export default connect(mapStateToProps, mapDispatchToProps)(WorkerEditProfile);
