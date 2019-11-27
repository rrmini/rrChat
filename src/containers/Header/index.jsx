import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import PersonIcon from "@material-ui/icons/Person";

import PushToggle from "../../components/PushToggle";
import "./styles.css";

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <div className="header">
          <PushToggle />
          <div style={{ display: "flex" }}>
            <p className="userName">Signed in as: </p>
            <Button>
              <PersonIcon />
            </Button>
          </div>
        </div>
        <h1 className="header__title">{this.props.title}</h1>
      </div>
    );
  }
}
