import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsOffIcon from "@material-ui/icons/NotificationsOff";

export default class PushToggle extends Component {
  state = {
    isActive: false
  };

  handleClick = () => {
    const active = this.state.isActive;
    this.setState({
      isActive: !active
    });
  };

  render() {
    return (
      <Button onClick={this.handleClick}>
        {this.state.isActive ? <NotificationsIcon /> : <NotificationsOffIcon />}
      </Button>
    );
  }
}
