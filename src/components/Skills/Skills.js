import React, { Component } from "react";
import { Badge, Col, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import editSkill from "../../assets/img/edit 1.png";
import delSkill from "../../assets/img/delete 1.png";

import styles from "./Skills.module.css";

class Skills extends Component {
  render() {
    return (
      <>
        <Badge className={styles.cardSkills}>
          <Row>
            <Col xs={7}>
              <p className={styles.nameSkills}>{this.props.data.skill_name}</p>
            </Col>
            <Col xs={1} className={styles.colEdit}>
              <img
                alt=""
                src={editSkill}
                className={styles.editSkill}
                onClick={() => this.props.setUpdate(this.props.data)}
              />
            </Col>
            <Col xs={1} className={styles.colDel}>
              <img
                alt=""
                src={delSkill}
                className={styles.delSkill}
                onClick={() => this.props.deleteSkill(this.props.data.skill_id)}
              />
            </Col>
          </Row>
        </Badge>
      </>
    );
  }
}

export default withRouter(Skills);
