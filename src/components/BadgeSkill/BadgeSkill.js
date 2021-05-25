import React, { Component } from "react";
import { Badge } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getSkills } from "../../redux/actions/skill";

import styles from "./BadgeSkill.module.css";

class BadgeSkill extends Component {
  constructor() {
    super();
    this.state = {
      dataSkill: [],
    };
  }
  componentDidMount() {
    const id = this.props.data;
    this.getSkill(id);
  }
  getSkill = (id) => {
    this.props.getSkills(id).then((res) => {
      this.setState({ dataSkill: res.action.payload.data.data });
    });
  };
  render() {
    return (
      <>
        {this.state.dataSkill.map((item, index) => {
          return <Badge className={styles.BadgeSkill}>{item.skill_name}</Badge>;
        })}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  skill: state.skill,
});

const mapDispatchToProps = { getSkills };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BadgeSkill));
