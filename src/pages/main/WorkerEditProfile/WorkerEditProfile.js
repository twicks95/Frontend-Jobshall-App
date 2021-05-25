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

import NavbarComponent from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import CardSkills from "../../../components/Skills/Skills";
import upload from "../../../assets/img/Vector.png";
import setImg from "../../../assets/img/Group.png";
import sizeImg from "../../../assets/img/expand 2.png";

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

import CardExperience from "../../../components/CardExperience/CardExperience";
import CardPort from "../../../components/CardPort/CardPort";

class WorkerEditProfile extends Component {
  constructor() {
    super();
    this.state = {
      formWorker: {
        workerName: "",
        workerDomicile: "",
        workerStatus: "",
        workerJobDesk: "",
        workerPhone: "",
        workerGithub: "",
        workerGitlab: "",
        workerInstagram: "",
        workerDescription: "",
        imageData: null,
      },
      formSkill: {
        workerId: localStorage.getItem("workerId"),
        skillName: "",
        skillId: "",
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
      isUpdateSkill: false,
      isUpdateExp: false,
      isUpdateExp2: false,
      isUpdatePort: false,
      isUpdatePort2: false,
    };
  }
  componentDidMount() {
    const id = localStorage.getItem("workerId");
    this.getWorkerId(id);
    this.getSkillId(id);
    this.getExperienceId(id);
    this.getPort(id);
  }
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
  updateDataWorker = (event) => {
    const id = localStorage.getItem("workerId");
    event.preventDefault();
    const formData = new FormData();
    formData.append("workerName", this.state.formWorker.workerName);
    formData.append("workerDomicile", this.state.formWorker.workerDomicile);
    formData.append("workerStatus", this.state.formWorker.workerStatus);
    formData.append("workerJobDesk", this.state.formWorker.workerJobDesk);
    formData.append("workerPhone", this.state.formWorker.workerPhone);
    formData.append("workerInstagram", this.state.formWorker.workerInstagram);
    formData.append("workerGithub", this.state.formWorker.workerGithub);
    formData.append("workerGitlab", this.state.formWorker.workerGitlab);

    formData.append("imageData", this.state.formWorker.imageData);
    formData.append(
      "workerDescription",
      this.state.formWorker.workerDescription
    );
    this.props.updateWorkerData(id, formData).then((res) => {
      this.setState({ show: true, isUpdateWorker: true });
      this.getWorkerId(id);
      this.resetDataWorker(event);
    });
  };
  resetDataWorker = (event) => {
    event.preventDefault();
    this.setState({
      formWorker: {
        workerName: "",
        workerDomicile: "",
        workerStatus: "",
        workerJobDesk: "",
        workerPhone: "",
        workerInstagram: "",
        workerGitlab: "",
        workerGithub: "",
        workerDescription: "",
        image: null,
      },
    });
  };
  resetDataSkills = (event) => {
    event.preventDefault();
    this.setState({
      formSkill: {
        workerId: localStorage.getItem("workerId"),
        skillName: "",
      },
    });
  };
  resetDataExp = (event) => {
    event.preventDefault();
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
    this.props.createSkill(this.state.formSkill).then((res) => {
      this.setState({ show: true, isCreateSkill: true });
      this.getSkillId(localStorage.getItem("workerId"));
      this.resetDataSkills(event);
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
    this.setState({ isUpdate: false });
    const { idSkill, formSkill } = this.state;
    event.preventDefault();
    this.props.updateSkill(idSkill, formSkill).then((res) => {
      this.setState({ show: true, isUpdateSkill: true, isUpdate: false });
      this.getSkillId(localStorage.getItem("workerId"));
      this.resetDataSkills(event);
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
    this.props.deleteSkill(id).then((res) => {
      this.getSkillId(localStorage.getItem("workerId"));
      this.setState({ show: true, isDelete: true });
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
  createExp = (event) => {
    event.preventDefault();
    this.props.createExperience(this.state.formExperience).then((res) => {
      this.setState({ show: true, isCreateExp: true });
      this.getExperienceId(localStorage.getItem("workerId"));
      this.resetDataExp(event);
    });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  handleImage = (event) => {
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
      idSkill: data.skill_id,
      formSkill: {
        workerId: data.worker_id,
        skillName: data.skill_name,
        skillId: data.skill_id,
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
    } = this.state.dataWorker;
    return (
      <>
        <Container fluid className={styles.mainBackground}>
          <NavbarComponent />
          <Container>
            <Row className={styles.mainRow}>
              <Col sm={4}>
                <Card className={styles.cardProfile}>
                  <Card.Img
                    variant="top"
                    src={`http://localhost:3001/api/${worker_image}`}
                    className={styles.imgCard}
                  />
                  <Card.Body>
                    <label for="file">
                      <input
                        type="file"
                        id="file"
                        onChange={(event) => this.handleImage(event)}
                      />
                      <div>
                        <Card.Title className={styles.editText}>
                          Edit
                        </Card.Title>
                      </div>
                    </label>
                  </Card.Body>
                  <Card.Body>
                    <h1 className={styles.profileName}>{worker_name}</h1>
                    <p className={styles.profileField}>
                      {worker_job_desk ? worker_job_desk : "Searching for Job"}
                    </p>
                    <p className={styles.profileType}>
                      {worker_status ? worker_status : "Free as Wind"}
                    </p>
                    <p className={styles.profileLoc}>
                      {worker_domicile ? worker_domicile : "Mars"}
                    </p>
                    <p className={styles.profilePhone}>
                      {worker_phone ? worker_phone : "08123456789"}
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
              <Col sm={8}>
                <Card className={styles.cardForm}>
                  <Card.Title className={styles.title}>Data diri</Card.Title>
                  <hr />
                  <Card.Body>
                    <Form>
                      <Form.Row>
                        <Form.Group>
                          <Form.Label className={styles.everyLabel}>
                            Nama lengkap
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Masukan nama lengkap"
                            className={styles.everyControl}
                            name="workerName"
                            value={workerName}
                            onChange={(event) => this.changeText(event)}
                          />
                        </Form.Group>

                        <Form.Group>
                          <Form.Label className={styles.everyLabel}>
                            Job desk
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Masukan job desk"
                            className={styles.everyControl}
                            name="workerJobDesk"
                            value={workerJobDesk}
                            onChange={(event) => this.changeText(event)}
                          />
                        </Form.Group>
                      </Form.Row>

                      <Form.Group>
                        <Form.Label className={styles.everyLabel}>
                          Domisili
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Masukan domisili"
                          className={styles.everyControl}
                          name="workerDomicile"
                          value={workerDomicile}
                          onChange={(event) => this.changeText(event)}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className={styles.everyLabel}>
                          Phone
                        </Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Masukan no phone"
                          className={styles.everyControl}
                          name="workerPhone"
                          value={workerPhone}
                          onChange={(event) => this.changeText(event)}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className={styles.everyLabel}>
                          Worker Type
                        </Form.Label>
                        <Form.Control
                          as="select"
                          className={styles.everyControl}
                          name="workerStatus"
                          value={workerStatus}
                          onChange={(event) => this.changeText(event)}
                        >
                          <option>select status</option>
                          <option>freelance</option>
                          <option>fulltime</option>
                        </Form.Control>
                      </Form.Group>
                      <Row>
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
                        />
                      </Form.Group>
                      <Button
                        className={styles.btnSave}
                        onClick={(event) => this.updateDataWorker(event)}
                      >
                        Simpan
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
                            : this.state.isUpdateWorker
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
                    <Row classNamr={styles.rowSkill}>
                      {this.state.dataSkills.map((item, index) => {
                        return (
                          <Col xs={5} key={index}>
                            <CardSkills
                              data={item}
                              setUpdate={this.handleSetUpdate.bind(this)}
                              updateSkill={this.updateSkill.bind(this)}
                              deleteSkill={this.deleteSkill.bind(this)}
                            />
                          </Col>
                        );
                      })}
                    </Row>
                  </Form>
                </Card>
                <Card className={styles.cardExp}>
                  <Card.Title className={styles.title}>
                    Pengalaman kerja
                  </Card.Title>
                  <hr />
                  <Form>
                    <Row>
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
                  <Row className={styles.mainRowExp}>
                    {this.state.dataExperience.map((item, index) => {
                      return (
                        <Col key={index} xs={6}>
                          <CardExperience
                            data={item}
                            setUpdateExp={this.handleSetUpdateExp.bind(this)}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                </Card>
                <Card className={styles.cardPort}>
                  <Card.Title>Portofolio</Card.Title>
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
