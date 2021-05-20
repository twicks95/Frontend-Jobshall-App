import React, { Component } from "react";

import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "./RecruiterEditProfile.module.css";

import FooterComponent from "../../../components/Footer/Footer";

import ProfilePicture from "../../../assets/images/394260100b438df48a885f4de8255d6c.jpg";
import Edit from "../../../assets/icons/edit.svg";
import PinLocation from "../../../assets/icons/map-pin.svg";

class RecruiterEditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        recruiterCompany: "",
        recruiterFieldCompany: "",
        recruiterDomicile: "",
        recruiterDescription: "",
        recruiterEmail: "",
        recruiterPhone: "",
        recruiterInstagram: "",
        recruiterLinkedIn: "",
      },
    };
  }

  handleSubmit = () => {
    // jalankan proses patch ketika tombol simpan di klik
  };

  render() {
    return (
      <>
        <main className={`${styles.container}`}>
          <Form onSubmit={this.handleSubmit} className={`${styles.editForm}`}>
            <Row md={2} className={`${styles.content}`}>
              <Col xs={12} md={5}>
                <div className={`mb-3 mb-md-0 ${styles.profilePreview}`}>
                  <div
                    className={`d-flex flex-column align-items-center ${styles.profilePicture}`}
                  >
                    <img src={ProfilePicture} alt="avatar"></img>
                    <label for="file">
                      <input type="file" id="file" />
                      <div
                        className={`d-flex align-items-center ${styles.editPictureButton}`}
                      >
                        <img
                          src={Edit}
                          alt="edit"
                          className={`${styles.editIcon}`}
                        />
                        <span>Edit</span>
                      </div>
                    </label>
                  </div>

                  <h2>PT. Hydrofarm Indonesia</h2>
                  <h3>Agriculture</h3>
                  <span>
                    <img src={PinLocation} alt="map-pin" />
                    Bandung, West Java
                  </span>
                  <p>
                    We are a company engaged in agriculture that focuses on
                    producing the needs of fresh vegetables and fruits for urban
                    communities with a hydroponic system.
                  </p>
                </div>
                <div className={`d-flex flex-column ${styles.actionButton}`}>
                  <Button variant="primary" type="submit" className="mb-3">
                    Simpan
                  </Button>
                  <Button variant="outline-primary" className="mb-5 mb-md-0">
                    Batal
                  </Button>
                </div>
              </Col>
              <Col xs={12} md={7}>
                <div className={`${styles.form}`}>
                  <h3>Data diri</h3>
                  <hr />
                  <Form.Group controlId="company">
                    <Form.Label>Nama Perusahaan</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukan nama perusahan"
                    />
                  </Form.Group>

                  <Form.Group controlId="field">
                    <Form.Label>Bidang</Form.Label>
                    <Form.Control type="text" placeholder="Contoh: Finance" />
                  </Form.Group>
                  <Form.Group controlId="domicile">
                    <Form.Label>Domisili</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Bandung, Jawa Barat"
                    />
                  </Form.Group>
                  <Form.Group controlId="description">
                    <Form.Label>Deskripsi Singkat</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Tuliskan deskripsi singkat perusahaan"
                    />
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="company@email.com"
                    />
                  </Form.Group>
                  <Form.Group controlId="phone">
                    <Form.Label>Nomor Telepon</Form.Label>
                    <Form.Control type="text" placeholder="(021) 2081 ****" />
                  </Form.Group>
                  <Form.Group controlId="instagram">
                    <Form.Label>Instagram</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukan username Instagram"
                    />
                  </Form.Group>
                  <Form.Group controlId="linkedIn">
                    <Form.Label>Linked In</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukan nama LinkedIn"
                    />
                  </Form.Group>
                </div>
              </Col>
            </Row>
          </Form>
        </main>
        <FooterComponent />
      </>
    );
  }
}

export default RecruiterEditProfile;
