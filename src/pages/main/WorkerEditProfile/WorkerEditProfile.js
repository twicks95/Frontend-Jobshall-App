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
import imgDummy from "../../../assets/img/Ellipse 326.png";
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
} from "../../../redux/actions/experience";
import { connect } from "react-redux";
import CardExperience from "../../../components/CardExperience/CardExperience";

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
        image: null,
      },
      formSkill: {
        workerId: localStorage.getItem("userId"),
        skillName: "",
        skillId: "",
      },
      formExperience: {
        workerId: localStorage.getItem("userId"),
        experienceCompany: "",
        experiencePosition: "",
        experienceDateStart: "",
        experienceDateEnd: "",
        experienceDescription: "",
      },
      formPortofolio: {
        workerId: localStorage.getItem("userId"),
        portfolioName: "",
        portfolioLink: "",
        image: null,
      },
      dataWorker: {},
      dataSkills: [],
      itemSkills: {},
      dataExperience: [],
      idSkill: "",
      id: "",
      idExp: "",
      isDelete: false,
      isDeleteExp: false,
      isCreate: false,
      isCreateExp: false,
      show: false,
      setShow: false,
      isUpdate: false,
      isUpdateWorker: false,
      isUpdateSkill: false,
      isUpdateExp: false,
    };
  }
  componentDidMount() {
    const id = localStorage.getItem("userId");
    this.getWorkerId(id);
    this.getSkillId(id);
    this.getExperienceId(id);
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
      console.log(res);
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
  updateDataWorker = (event) => {
    const { id } = this.props.match.params;
    event.preventDefault();
    const formData = new FormData(); // FORM DATA digunakan untuk menghandle inputan yang memiliki file upload didalamnya
    formData.append("workerName", this.state.formWorker.workerName);
    formData.append("workerDomicile", this.state.formWorker.workerDomicile);
    formData.append("workerStatus", this.state.formWorker.workerStatus);
    formData.append("workerJobDesk", this.state.formWorker.workerJobDesk);
    formData.append("workerPhone", this.state.formWorker.workerPhone);
    formData.append("workerInstagram", this.state.formWorker.workerInstagram);
    formData.append("workerGithub", this.state.formWorker.workerGithub);
    formData.append("workerGitlab", this.state.formWorker.workerGitlab);

    // formData.append("workerImage", this.state.formWorker.workerImage);
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
        workerImage: null,
      },
    });
  };
  resetDataSkills = (event) => {
    event.preventDefault();
    this.setState({
      formSkill: {
        workerId: localStorage.getItem("userId"),
        skillName: "",
      },
    });
  };
  resetDataExp = (event) => {
    event.preventDefault();
    this.setState({
      formExperience: {
        workerId: localStorage.getItem("userId"),
        experienceCompany: "",
        experiencePosition: "",
        experienceDateStart: "",
        experienceDateEnd: "",
        experienceDescription: "",
      },
    });
    this.setState({ isUpdateExp: false });
  };
  createSkill = (event) => {
    // const { id } = this.props.match.params;
    event.preventDefault();
    // console.log(id);
    this.props.createSkill(this.state.formSkill).then((res) => {
      this.setState({ show: true, isCreate: true });
      this.getSkillId(localStorage.getItem("userId"));
      this.resetDataSkills(event);
    });
  };
  updateSkill = (event) => {
    this.setState({ isUpdate: false });
    const { idSkill, formSkill } = this.state;
    event.preventDefault();
    this.props.updateSkill(idSkill, formSkill).then((res) => {
      this.setState({ show: true, isUpdateSkill: true, isUpdate: false });
      this.getSkillId(localStorage.getItem("userId"));
      this.resetDataSkills(event);
    });
  };
  updateExp = () => {
    console.log("work");
  };
  deleteSkill = (id) => {
    this.props.deleteSkill(id).then((res) => {
      this.getSkillId(this.state.idSkill);
      this.setState({ show: true, isDelete: true });
    });
    // console.log("work");
  };
  deleteExp = () => {
    const { idExp } = this.state;
    console.log(idExp);
    this.props.deleteExperience(idExp).then((res) => {
      this.getExperienceId(localStorage.getItem("userId"));
      this.setState({ show: true, isDeleteExp: true });
    });
  };
  createExp = (event) => {
    event.preventDefault();
    // console.log("work");
    this.props.createExperience(this.state.formExperience).then((res) => {
      this.setState({ show: true, isCreateExp: true });
      this.getExperienceId(localStorage.getItem("userId"));
      this.resetDataExp(event);
    });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  handleSetUpdate = (data) => {
    // console.log(data);
    // const { worker_id, skill_name } = this.state.itemSkills;
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
  handleSetUpdateExp = (data) => {
    // console.log(data);
    // console.log("work");
    this.setState({
      isUpdateExp: true,
      idExp: data.experience_id,
      formExperience: {
        workerId: localStorage.getItem("userId"),
        experienceCompany: data.experience_company,
        experiencePosition: data.experience_position,
        experienceDateStart: data.experience_date_start.slice(0, 10),
        experienceDateEnd: data.experience_date_end.slice(0, 10),
        experienceDescription: "",
      },
    });
  };
  render() {
    console.log(this.state.idExp);
    console.log(this.props);
    const { skillName } = this.state.formSkill;
    const {
      workerName,
      workerDomicile,
      workerStatus,
      workerJobDesk,
      workerPhone,
      // workerEmail,
      // workerPassword,
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
                    src={imgDummy}
                    className={styles.imgCard}
                  />
                  <Card.Body>
                    <Card.Title className={styles.editText}>Edit</Card.Title>
                  </Card.Body>
                  <Card.Body>
                    <h1 className={styles.profileName}>
                      {worker_name ? worker_name : "Someone"}
                    </h1>
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
                <Button className={styles.btnBack}>Kembali</Button>
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
                            : this.state.isCreate
                            ? "Success Create Data Skill"
                            : this.state.isCreateExp
                            ? "Success Create Experience Work"
                            : this.state.isDeleteExp
                            ? "Success Delete Experience Work"
                            : this.state.isUpdateSkill
                            ? "Success Update Skill"
                            : "hai"}
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
                          <Col xs={5}>
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
                        name="experienceDescription"
                        value={this.state.formExperience.experienceDescription}
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
                          onClick={(event) => this.createExp(event)}
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
                            updateExp={this.updateExp.bind(this)}
                            // deleteExp={this.deleteExp.bind(this)}
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
                        name="portofolioName"
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
                        name="portofolioLink"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label className={styles.everyLabelPort}>
                        Upload gambar
                      </Form.Label>
                      <Card className={styles.cardUpload}>
                        <Card.Img src={upload} className={styles.imgUpload} />
                        <Card.Body>
                          <Card.Text>
                            <p className={styles.subTextPort1}>
                              Drag & Drop untuk Upload Gambar Aplikasi Mobile
                            </p>
                            <p className={styles.subTextPort2}>
                              Atau cari untuk mengupload file dari direktorimu.
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
                    </Form.Group>
                  </Form>
                  <hr />
                  <Button className={styles.btnAdd}>Tambah portofolio</Button>
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
};
export default connect(mapStateToProps, mapDispatchToProps)(WorkerEditProfile);
