import React from "react";
import PropTypes from "prop-types";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push } from "connected-react-router";
// import { removeChat } from '../../actions/removeChatAction'

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

class ChatItem extends React.Component {
  static propTypes = {
    chatId: PropTypes.string.isRequired,
    chatName: PropTypes.string.isRequired,
    push: PropTypes.func.isRequired,
    hasNews: PropTypes.bool.isRequired
    // removeChat: PropTypes.func.isRequired,
  };

  handleNavigate = link => {
    this.props.push(link);
  };

  handleRemove = chatId => {
    // this.props.push(`/`);
    // this.props.removeChat(chatId)
  };

  render() {
    return (
      <li style={{ display: "flex" }}>
        <ListItem
          button
          style={{ color: this.props.hasNews ? "red" : "" }}
          onClick={() => this.handleNavigate(`/chat/${this.props.chatId}`)}
        >
          <ListItemText primary={this.props.chatName} />
        </ListItem>
        <IconButton
          className={""}
          style={{ width: "54px" }}
          aria-label="delete"
          onClick={() => this.handleRemove(this.props.chatId)}
        >
          <DeleteIcon />
        </IconButton>
      </li>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch); //, removeChat

export default connect(mapStateToProps, mapDispatchToProps)(ChatItem);
