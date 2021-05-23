import React, { Component } from "react";
import { Badge } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import styles from "./BadgeHome.module.css";

class BadgeHome extends Component {
  render() {
    // console.log(this.props);
    return (
      <>
        <Badge variant="danger" className={styles.BadgeSkill}>
          {this.props.data.skill_name}
        </Badge>
      </>
    );
  }
}

export default withRouter(BadgeHome);
