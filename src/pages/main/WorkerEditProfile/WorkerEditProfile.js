import React, { Component } from "react";
import styles from "./WorkerEditProfile.module.css";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import imgDummy from "../../../assets/img/Ellipse 326.png";
import NavbarComponent from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import editSkill from "../../../assets/img/edit 1.png";
import delSkill from "../../../assets/img/delete 1.png";
import upload from "../../../assets/img/Vector.png";
import setImg from "../../../assets/img/Group.png";
import sizeImg from "../../../assets/img/expand 2.png";

class WorkerEditProfile extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        name: "Louis Tomlinson",
        field: "Web Developer",
        type: "Freelancer",
        location: "Bogor, Jawa Barat",
        phone: "0812 - 3456 - 789",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.",
        skills: ["Python"],
      },
    };
  }
  render() {
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
                      {this.state.data.name}
                    </h1>
                    <p className={styles.profileField}>
                      {this.state.data.field}
                    </p>
                    <p className={styles.profileType}>{this.state.data.type}</p>
                    <p className={styles.profileLoc}>
                      {this.state.data.location}
                    </p>
                    <p className={styles.profilePhone}>
                      {this.state.data.phone}
                    </p>
                    <p className={styles.profileDesc}>{this.state.data.desc}</p>
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
                        />
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
                        />
                      </Form.Group>
                      <Button className={styles.btnSave}>Simpan</Button>
                    </Form>
                  </Card.Body>
                </Card>
                <Card className={styles.cardSkill}>
                  <Card.Title className={styles.title}>Skill</Card.Title>
                  <hr />
                  <Form inline>
                    <Row>
                      <Col sm={10}>
                        <Form.Control
                          type="text"
                          placeholder="Java"
                          className={styles.everyControl}
                        />
                      </Col>
                      <Col sm={2}>
                        <Button className={styles.btnSaveSkill}>Simpan</Button>
                      </Col>
                    </Row>
                    <Card className={styles.cardSkills}>
                      <Row>
                        <Col xs={7}>
                          <p className={styles.nameSkills}>
                            {this.state.data.skills}
                          </p>
                        </Col>
                        <Col xs={1} className={styles.colEdit}>
                          <img
                            alt=""
                            src={editSkill}
                            className={styles.editSkill}
                          />
                        </Col>
                        <Col xs={1} className={styles.colDel}>
                          <img
                            alt=""
                            src={delSkill}
                            className={styles.delSkill}
                          />
                        </Col>
                      </Row>
                    </Card>
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
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label className={styles.everyLabelExp}>
                            Tanggal Masuk
                          </Form.Label>
                          <Form.Control
                            type="date"
                            className={styles.everyControl}
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
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label className={styles.everyLabelExp}>
                            Tanggal Keluar
                          </Form.Label>
                          <Form.Control
                            type="date"
                            className={styles.everyControl}
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
                      />
                    </Form.Group>
                  </Form>
                  <hr />
                  <Button className={styles.btnAdd}>
                    Tambah pengalaman kerja
                  </Button>
                  <hr />
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

export default WorkerEditProfile;
