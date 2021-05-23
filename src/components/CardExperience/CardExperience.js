import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import styles from "./CardExperience.module.css";

class CardExperience extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <Card
          className={styles.cardExp}
          onClick={() => this.props.setUpdateExp(this.props.data)}
        >
          <h1 className={styles.title}>{this.props.data.experience_company}</h1>

          <p className={styles.sub1}>{this.props.data.experience_position}</p>
          <div className="d-flex flex-row">
            <div className={styles.sub2}>
              {this.props.data.experience_date_start.slice(0, 10)} -{" "}
            </div>

            <div className={styles.sub2}>
              {" "}
              {this.props.data.experience_date_end.slice(0, 10)}
            </div>
          </div>
          <hr />
          <p className={styles.sub3}>{this.props.data.experience_desc}</p>
        </Card>
      </>
    );
  }
}

export default withRouter(CardExperience);
