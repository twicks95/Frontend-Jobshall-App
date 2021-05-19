import React, { Component } from "react";

import { Button, Col, Row } from "react-bootstrap";
import styles from "./RecruiterProfile.module.css";

import FooterComponent from "../../../components/Footer/Footer";

import ProfilePicture from "../../../assets/images/394260100b438df48a885f4de8255d6c.jpg";
import PinLocation from "../../../assets/icons/map-pin.svg";
import Email from "../../../assets/icons/mail.svg";
import Instagram from "../../../assets/icons/instagram.svg";
import Phone from "../../../assets/icons/phone.svg";
import LinkedIn from "../../../assets/icons/linkedin.svg";

class RecruiterProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          image: ProfilePicture,
          recruiterCompany: "PT. Hydrofarm",
          recruiterCompanyField: "Agriculture",
          recruiterDomicile: "Bandung, West Java",
          recruiterPhone: "+62 77 2567 2222",
          recruiterEmail: "hydrofarm@indonesia.com",
          recruiterInstagram: "hydrofarm_id",
          recruiterLinkedIn: "Hydrofarm Indonesia",
          recruiterDescription:
            "We are a company engaged in agriculture that focuses on producing the needs of fresh vegetables and fruits for urban communities with a hydroponic system.",
        },
      ],
    };
  }

  handleEditProfile = () => {
    this.props.history.push("/recruiter/edit");
  };

  render() {
    const {
      image,
      recruiterCompany,
      recruiterCompanyField,
      recruiterDomicile,
      recruiterDescription,
      recruiterEmail,
      recruiterInstagram,
      recruiterPhone,
      recruiterLinkedIn,
    } = this.state.data[0];
    return (
      <>
        <main className={`${styles.container}`}>
          <div className={`${styles.mainProfile}`}>
            <div className={`${styles.topStripe}`}>
              <img src={image} alt="avatar" />
            </div>
            <div className={`${styles.detailProfile}`}>
              <h3>{recruiterCompany}</h3>
              <h4>{recruiterCompanyField}</h4>
              <span>
                <img src={PinLocation} alt="map-pin" />
                {recruiterDomicile}
              </span>
              <p>{recruiterDescription}</p>
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
                    {recruiterEmail}
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
                    {recruiterInstagram}
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
                    {recruiterPhone}
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
                    {recruiterLinkedIn}
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

export default RecruiterProfile;
