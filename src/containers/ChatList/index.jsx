import React, { Component } from "react";
import PropTypes from "prop-types";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ChatItem from "../../components/ChatItem";
import "./styles.css";

class ChatList extends Component {
  static propTypes = {
    chats: PropTypes.object.isRequired
  };

  render() {
    const { chats } = this.props;

    const chatItem = Object.keys(chats).map(id => (
      <ChatItem
        key={new Date().getTime() * Math.random()}
        chatId={id}
        chatName={chats[id].title}
        hasNews={chats[id].hasNews !== undefined ? chats[id].hasNews : false}
      />
    ));

    return <ul className={"chat__list"}>{chatItem}</ul>;
  }
}

const mapStateToProps = ({ chatReducer }) => ({
  chats: chatReducer.chats
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch); //addChat

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
