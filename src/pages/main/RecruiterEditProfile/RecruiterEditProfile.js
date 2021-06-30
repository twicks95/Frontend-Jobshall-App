import React, { Component } from "react";
import styles from "./RecruiterEditProfile.module.css";
import NavbarComponent from "../../../components/Navbar/Navbar";
import FooterComponent from "../../../components/Footer/Footer";
import NoProfilePicture from "../../../assets/images/defaultprofilepict.png";
import Edit from "../../../assets/icons/edit.svg";
import PinLocation from "../../../assets/icons/map-pin.svg";
import { Alert, Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { CheckCircle, XCircle } from "phosphor-react";
import { connect } from "react-redux";
import {
  getRecruiterById,
  updateRecruiterImage,
  updateRecruiterData,
  updateRecruiterPassword,
} from "../../../redux/actions/recruiter";

class RecruiterEditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        recruiterCompany: this.props.recruiter.recruiter[0].recruiter_company,
        recruiterFieldCompany:
          this.props.recruiter.recruiter[0].recruiter_field_company,
        recruiterDomicile: this.props.recruiter.recruiter[0].recruiter_domicile,
        recruiterDesc: this.props.recruiter.recruiter[0].recruiter_description,
        recruiterEmail: this.props.recruiter.recruiter[0].recruiter_email,
        recruiterPhone: this.props.recruiter.recruiter[0].recruiter_phone,
        recruiterIG: this.props.recruiter.recruiter[0].recruiter_instagram,
        recruiterLinked: this.props.recruiter.recruiter[0].recruiter_linked_id,
      },
      formPassword: {
        newPassword: "",
        confirmPassword: "",
      },
      image: null,
      isUpdate: false,
      isUpdateDataSuccess: false,
      isUpdateDataError: false,
      isUpdatePasswordSuccess: false,
      isUpdatePasswordError: false,
    };
  }

  componentDidMount = () => {
    const inputText = document.querySelectorAll("input[type = 'text']");
    const inputEmail = document.querySelectorAll("input[type = 'email']")[0];
    const inputTextArea = document.getElementsByTagName("textarea")[0];
    inputEmail.disabled = true;
    for (const el of inputText) {
      el.disabled = true;
    }
    inputTextArea.disabled = true;
  };

  handleFile = (e, id, update) => {
    // console.log(e.target.files[0]);

    this.setState({
      // formData: {
      ...this.state,
      image: e.target.files[0],
      // },
    });

    // console.log(this.state);
    // const { image } = this.state;
    // console.log(this.state);
    update(id);
  };

  handleUpdateImage = (id) => {
    const isContinue = window.confirm("Yakin ingin ubah foto?");

    if (isContinue) {
      // const image = this.props.;
      console.log(this.state.image);
      // const formData = new FormData();
      // formData.append("image", data);
      // for (const field in dataToBeUpdated) {
      //   formData.append(field, dataToBeUpdated[field]);
      // }
      // console.log(formData.entries());
      // for (var pair of formData.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }
      // console.log(data);

      // this.props.updateRecruiterImage(id, formData).then(() => {
      //   this.setState({
      //     ...this.state.form,
      //     image: null,
      //   });
      //   this.props.getRecruiterById(id);
      // });
    }

    return;
  };

  handleUpdateData = (id, data) => {
    this.props
      .updateRecruiterData(id, data)
      .then(() => {
        this.setState({ ...this.state, isUpdateDataSuccess: true });
        this.props.getRecruiterById(id).then((res) => {
          this.setState({
            formData: {
              ...this.state.formData,
              recruiterCompany:
                res.action.payload.data.data[0].recruiter_company,
              recruiterFieldCompany:
                res.action.payload.data.data[0].recruiter_field_company,
              recruiterDomicile:
                res.action.payload.data.data[0].recruiter_domicile,
              recruiterDesc:
                res.action.payload.data.data[0].recruiter_description,
              recruiterEmail: res.action.payload.data.data[0].recruiter_email,
              recruiterPhone: res.action.payload.data.data[0].recruiter_phone,
              recruiterIG: res.action.payload.data.data[0].recruiter_instagram,
              recruiterLinked:
                res.action.payload.data.data[0].recruiter_linked_id,
            },
            isUpdate: false,
          });
          const inputText = document.querySelectorAll("input[type = 'text']");
          const inputEmail = document.querySelectorAll(
            "input[type = 'email']"
          )[0];
          const inputTextArea = document.getElementsByTagName("textarea")[0];
          inputEmail.disabled = true;
          for (const el of inputText) {
            el.disabled = true;
          }
          inputTextArea.disabled = true;
        });
      })
      .catch(() => {
        this.setState({
          ...this.state,
          isUpdateDataError: true,
        });
      });
  };

  handleUpdatePassword = (id, data) => {
    this.setState({
      ...this.state,
      isUpdatePasswordSuccess: false,
      isUpdatePasswordError: false,
    });
    this.props
      .updateRecruiterPassword(id, data)
      .then(() => {
        this.setState({
          ...this.state,
          isUpdatePasswordSuccess: true,
        });
        this.setStatePasswordEmpty();
      })
      .catch(() => {
        this.setState({ isUpdatePasswordError: true });
      });
  };

  changeStateData = (e) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value,
      },
    });
  };

  changeStatePassword = (e) => {
    this.setState({
      formPassword: {
        ...this.state.formPassword,
        [e.target.name]: e.target.value,
      },
    });
  };

  setStatePasswordEmpty = () => {
    this.setState({
      formPassword: {
        ...this.state.formPassword,
        newPassword: "",
        confirmPassword: "",
      },
    });
  };

  setStateDataEmpty = () => {
    this.setState({
      formData: {
        ...this.state.formData,
        recruiterCompany: this.props.recruiter.recruiter[0].recruiter_company,
        recruiterFieldCompany:
          this.props.recruiter.recruiter[0].recruiter_field_company,
        recruiterDomicile: this.props.recruiter.recruiter[0].recruiter_domicile,
        recruiterDesc: this.props.recruiter.recruiter[0].recruiter_description,
        recruiterEmail: this.props.recruiter.recruiter[0].recruiter_email,
        recruiterPhone: this.props.recruiter.recruiter[0].recruiter_phone,
        recruiterIG: this.props.recruiter.recruiter[0].recruiter_instagram,
        recruiterLinked: this.props.recruiter.recruiter[0].recruiter_linked_id,
      },
      isUpdate: false,
    });
    const inputText = document.querySelectorAll("input[type = 'text']");
    const inputEmail = document.querySelectorAll("input[type = 'email']")[0];
    const inputTextArea = document.getElementsByTagName("textarea")[0];
    inputEmail.disabled = true;
    for (const el of inputText) {
      el.disabled = true;
    }
    inputTextArea.disabled = true;
  };

  setInputFormData = () => {
    const inputText = document.querySelectorAll("input[type = 'text']");
    const inputTextArea = document.getElementsByTagName("textarea")[0];
    for (const el of inputText) {
      el.disabled = false;
    }
    inputTextArea.disabled = false;
    this.setState({ ...this.state, isUpdate: true });
  };

  render() {
    const { isUpdate } = this.state;
    const { recruiter_id } = this.props.auth.data;
    const { newPassword, confirmPassword } = this.state.formPassword;
    const {
      recruiterCompany,
      recruiterFieldCompany,
      recruiterDomicile,
      recruiterDesc,
      recruiterEmail,
      recruiterPhone,
      recruiterIG,
      recruiterLinked,
    } = this.state.formData;
    const {
      recruiter_image,
      recruiter_company,
      recruiter_field_company,
      recruiter_domicile,
      recruiter_description,
    } = this.props.recruiter.recruiter[0];
    const {
      isUpdateRecruiterPasswordLoading,
      updatePasswordMsg,
      isUpdateRecruiterDataLoading,
      updateDataMsg,
    } = this.props.recruiter;
    const {
      formData,
      formPassword,
      isUpdateDataSuccess,
      isUpdateDataError,
      isUpdatePasswordSuccess,
      isUpdatePasswordError,
    } = this.state;

    return (
      <>
        <NavbarComponent />
        <main className={`${styles.container}`}>
          <Row md={2} className={`${styles.content}`}>
            <Col xs={12} md={5}>
              <div className={`mb-3 mb-md-0 ${styles.profilePreview}`}>
                <div
                  className={`d-flex flex-column align-items-center ${styles.profilePicture}`}
                >
                  <img
                    src={
                      recruiter_image
                        ? `http://localhost:3001/api/${recruiter_image}`
                        : NoProfilePicture
                    }
                    alt="avatar"
                  ></img>
                  <label for="file">
                    <input
                      type="file"
                      id="file"
                      name="image"
                      onChange={(e) =>
                        this.handleFile(e, recruiter_id, this.handleUpdateImage)
                      }
                    />
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

                <h2>
                  {recruiter_company ? recruiter_company : "Company Name"}
                </h2>
                <h3>
                  {recruiter_field_company
                    ? recruiter_field_company
                    : "Company's Field"}
                </h3>
                <span>
                  <img src={PinLocation} alt="map-pin" />
                  {recruiter_domicile ? recruiter_domicile : "Unknown"}
                </span>
                <p>
                  {recruiter_description
                    ? recruiter_description
                    : "No description for this company"}
                </p>
              </div>
              <div className={`d-flex flex-column ${styles.actionButton}`}>
                {isUpdate ? (
                  isUpdateRecruiterDataLoading ? (
                    <Button variant="primary" disabled>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="me-2"
                      />
                      <span className="sr-only"> Loading...</span>
                    </Button>
                  ) : recruiterCompany &&
                    recruiterFieldCompany &&
                    recruiterDomicile ? (
                    <Button
                      variant="primary"
                      onClick={() =>
                        this.handleUpdateData(recruiter_id, formData)
                      }
                      className="mb-3"
                    >
                      Submit
                    </Button>
                  ) : (
                    <Button variant="light" className="mb-3" disabled>
                      Kolom wajib harus terisi
                    </Button>
                  )
                ) : (
                  <Button
                    variant="primary"
                    onClick={this.setInputFormData}
                    className="mb-3"
                  >
                    Ubah data
                  </Button>
                )}

                <Button
                  variant="outline-primary"
                  onClick={this.setStateDataEmpty}
                  className="mb-5 mb-md-0"
                >
                  Batal
                </Button>
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div className={`${styles.form}`}>
                <h3>Data diri</h3>
                <hr />
                {isUpdateDataSuccess && (
                  <Alert
                    variant="success"
                    className="d-flex align-items-center"
                    style={{ fontWeight: "600" }}
                  >
                    <CheckCircle size={32} className="me-2" />
                    Selamat! Data anda telah berhasil diperbarui.
                  </Alert>
                )}
                {isUpdateDataError && (
                  <Alert
                    variant="danger"
                    className="d-flex align-items-center"
                    style={{ fontWeight: "600" }}
                  >
                    <XCircle size={32} className="me-2" />
                    Gagal! Data tidak dapat diperbarui.
                  </Alert>
                )}
                <Form.Group controlId="company">
                  <Form.Label>
                    Nama Perusahaan
                    {isUpdate && (
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
                    name="recruiterCompany"
                    value={recruiterCompany}
                    onChange={(e) => this.changeStateData(e)}
                    placeholder="Masukan nama perusahan"
                  />
                </Form.Group>

                <Form.Group controlId="field">
                  <Form.Label>
                    Bidang
                    {isUpdate && (
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
                    name="recruiterFieldCompany"
                    value={recruiterFieldCompany}
                    onChange={(e) => this.changeStateData(e)}
                    placeholder="Contoh: Finance"
                  />
                </Form.Group>
                <Form.Group controlId="domicile">
                  <Form.Label>
                    Domisili
                    {isUpdate && (
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
                    name="recruiterDomicile"
                    value={recruiterDomicile}
                    onChange={(e) => this.changeStateData(e)}
                    placeholder="Bandung, Jawa Barat"
                  />
                </Form.Group>
                <Form.Group controlId="description">
                  <Form.Label>Deskripsi Singkat</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="recruiterDesc"
                    value={recruiterDesc}
                    onChange={(e) => this.changeStateData(e)}
                    placeholder="Tuliskan deskripsi singkat perusahaan"
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="recruiterEmail"
                    value={recruiterEmail}
                    onChange={(e) => this.changeStateData(e)}
                    placeholder="company@email.com"
                  />
                </Form.Group>
                <Form.Group controlId="phone">
                  <Form.Label>Nomor Telepon</Form.Label>
                  <Form.Control
                    type="text"
                    name="recruiterPhone"
                    value={recruiterPhone}
                    onChange={(e) => this.changeStateData(e)}
                    placeholder="(021) 2081 ****"
                  />
                </Form.Group>
                <Form.Group controlId="instagram">
                  <Form.Label>Instagram</Form.Label>
                  <Form.Control
                    type="text"
                    name="recruiterIG"
                    value={recruiterIG}
                    onChange={(e) => this.changeStateData(e)}
                    placeholder="Masukan username Instagram"
                  />
                </Form.Group>
                <Form.Group controlId="linkedIn">
                  <Form.Label>Linked In</Form.Label>
                  <Form.Control
                    type="text"
                    name="recruiterLinked"
                    value={recruiterLinked}
                    onChange={(e) => this.changeStateData(e)}
                    placeholder="Masukan nama LinkedIn"
                  />
                </Form.Group>
              </div>
              <div className={`mt-3 ${styles.form}`}>
                <h3>Ubah Password</h3>
                <hr />
                {isUpdatePasswordSuccess ? (
                  <Alert
                    variant="success"
                    className="d-flex align-items-center"
                    style={{ fontWeight: "600" }}
                  >
                    <CheckCircle size={32} className="me-2" />
                    Password anda telah berhasil diperbarui.
                  </Alert>
                ) : isUpdatePasswordError ? (
                  <Alert
                    variant="danger"
                    className="d-flex flex-column align-items-center text-center"
                    style={{ fontWeight: "600" }}
                  >
                    <XCircle size={32} className="mb-1 me-2" />
                    Gagal dikonfirmasi! Coba periksa kembali password yang anda
                    diinputkan.
                  </Alert>
                ) : (
                  <></>
                )}
                <Form.Group controlId="newPassword">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="newPassword"
                    value={newPassword}
                    onChange={(e) => this.changeStatePassword(e)}
                    placeholder="Password baru"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="confirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => this.changeStatePassword(e)}
                    placeholder="Konfirmasi password"
                    required
                  />
                </Form.Group>
                <Row className={`${styles.changePasswordActionBtn}`}>
                  <Col>
                    {newPassword && confirmPassword ? (
                      isUpdateRecruiterPasswordLoading ? (
                        <Button
                          variant="outline-primary"
                          className="w-100"
                          disabled
                        >
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                          <span className="sr-only">Loading...</span>
                        </Button>
                      ) : (
                        <Button
                          variant="outline-primary"
                          className="w-100"
                          onClick={() =>
                            this.handleUpdatePassword(
                              recruiter_id,
                              formPassword
                            )
                          }
                        >
                          Ubah password
                        </Button>
                      )
                    ) : (
                      <Button variant="light" className="w-100" disabled>
                        Ubah password
                      </Button>
                    )}
                  </Col>
                  <Col>
                    <Button
                      variant="seconday"
                      className="w-100"
                      onClick={this.setStatePasswordEmpty}
                    >
                      Batal
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </main>
        <FooterComponent />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  recruiter: state.recruiter,
});

const mapDispatchToProps = {
  getRecruiterById,
  updateRecruiterImage,
  updateRecruiterData,
  updateRecruiterPassword,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecruiterEditProfile);
