import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import styles from "./CardPort.module.css";

class CardPort extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <Card
          className={styles.cardExp}
          onClick={() => this.props.setUpdatePort(this.props.dataPort)}
        >
          <h1 className={styles.title}>{this.props.dataPort.portfolio_name}</h1>

          <p className={styles.sub1}>
            {this.props.dataPort.portfolio_link_repo}
          </p>
        </Card>
      </>
    );
  }
}

export default withRouter(CardPort);
