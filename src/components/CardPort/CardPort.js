import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import styles from "./CardPort.module.css";

class CardPort extends Component {
  render() {
    return (
      <>
        <Card
          className={styles.cardExp}
          onClick={() => this.props.setUpdatePort(this.props.dataPort)}
        >
          <Card.Img
            variant="top"
            src={`http://localhost:3001/api/${this.props.dataPort.portfolio_image}`}
          />
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
