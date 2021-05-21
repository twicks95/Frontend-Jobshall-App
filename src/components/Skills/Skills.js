import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import editSkill from "../../assets/img/edit 1.png";
import delSkill from "../../assets/img/delete 1.png";

import styles from "./Skills.module.css";

class Skills extends Component {
  render() {
    console.log(this.props.dataSkills);
    return (
      <>
        <Row className={styles.mainRow}>
          <Col>
            {/* {this.props.dataSkills.map((item, index) => {
              return (
                <Card className={styles.cardSkills} key={index}>
                  <Row>
                    <Col xs={7}>
                      <p className={styles.nameSkills}>{item.skill_name}</p>
                    </Col>
                    <Col xs={1} className={styles.colEdit}>
                      <img
                        alt=""
                        src={editSkill}
                        className={styles.editSkill}
                      />
                    </Col>
                    <Col xs={1} className={styles.colDel}>
                      <img alt="" src={delSkill} className={styles.delSkill} />
                    </Col>
                  </Row>
                </Card>
              );
            })} */}
          </Col>
        </Row>
      </>
    );
  }
}

export default withRouter(Skills);
