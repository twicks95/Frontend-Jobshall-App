import React, { Component } from "react";

import { Button, Col, Row } from "react-bootstrap";
import styles from "./RecruiterProfile.module.css";

import { connect } from "react-redux";

import NavbarComponent from "../../../components/Navbar/Navbar";
import FooterComponent from "../../../components/Footer/Footer";

import NoProfilePicture from "../../../assets/images/defaultprofilepict.png";
import PinLocation from "../../../assets/icons/map-pin.svg";
import Email from "../../../assets/icons/mail.svg";
import Instagram from "../../../assets/icons/instagram.svg";
import Phone from "../../../assets/icons/phone.svg";
import LinkedIn from "../../../assets/icons/linkedin.svg";

class RecruiterProfile extends Component {
  handleEditProfile = () => {
    const { recruiter_id } = this.props.auth.data;
    this.props.history.push(`/recruiter/edit?id=${recruiter_id}`);
  };

  render() {
    const {
      recruiter_company,
      recruiter_field_company,
      recruiter_domicile,
      recruiter_description,
      recruiter_email,
      recruiter_instagram,
      recruiter_phone,
      recruiter_linked_id,
      recruiter_image,
    } = this.props.recruiter.recruiter[0];

    return (
      <>
        <NavbarComponent image={recruiter_image} />
        <main className={`${styles.container}`}>
          <div className={`${styles.mainProfile}`}>
            <div className={`${styles.topStripe}`}>
              <img
                src={
                  recruiter_image
                    ? `http://localhost:3001/api/${recruiter_image}`
                    : NoProfilePicture
                }
                alt="avatar"
              />
            </div>
            <div className={`${styles.detailProfile}`}>
              <h2>{recruiter_company ? recruiter_company : "Company Name"}</h2>
              <h3>
                {recruiter_field_company
                  ? recruiter_field_company
                  : "Company's Field"}
              </h3>
              <span>
                <img src={PinLocation} alt="map-pin" />
                {recruiter_domicile ? recruiter_domicile : "unknown"}
              </span>
              <p>
                {recruiter_description
                  ? recruiter_description
                  : "No description for this company"}
              </p>
              <Button
                onClick={this.handleEditProfile}
                className={`${styles.btnEdit}`}
              >
                Edit profile
              </Button>
              <div className={`${styles.socialAccount}`}>
                <Row className="mb-4">
                  <Col
                    xs={12}
                    md={2}
                    className={`d-flex justify-content-center`}
                  >
                    <img src={Email} alt="icon-email" />
                  </Col>
                  <Col
                    xs={12}
                    md={10}
                    className={`text-center text-md-start ${styles.account}`}
                  >
                    {recruiter_email ? recruiter_email : "not set"}
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col
                    xs={12}
                    md={2}
                    className={`d-flex justify-content-center`}
                  >
                    <img src={Instagram} alt="icon-email" />
                  </Col>
                  <Col
                    xs={12}
                    md={10}
                    className={`text-center text-md-start ${styles.account}`}
                  >
                    {recruiter_instagram ? recruiter_instagram : "not set"}
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col
                    xs={12}
                    md={2}
                    className={`d-flex justify-content-center`}
                  >
                    <img src={Phone} alt="icon-email" />
                  </Col>
                  <Col
                    xs={12}
                    md={10}
                    className={`text-center text-md-start ${styles.account}`}
                  >
                    {recruiter_phone ? recruiter_phone : "not set"}
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col
                    xs={12}
                    md={2}
                    className={`d-flex justify-content-center`}
                  >
                    <img src={LinkedIn} alt="icon-email" />
                  </Col>
                  <Col
                    xs={12}
                    md={10}
                    className={`text-center text-md-start ${styles.account}`}
                  >
                    {recruiter_linked_id ? recruiter_linked_id : "not set"}
                  </Col>
                </Row>
              </div>
            </div>
          </div>
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

export default connect(mapStateToProps, null)(RecruiterProfile);
