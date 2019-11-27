import React, { Component } from "react";
import { Container, Grid } from "@material-ui/core";
import Header from "../../containers/Header";
import ChatList from "../../containers/ChatList";
import MessageField from "../../containers/MessageField";

export default class Layout extends Component {
  render() {
    return (
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Header title={"Chat name"} />
          </Grid>
          <Grid item xs={12} md={4}>
            <ChatList key={"chatList"} />
          </Grid>
          <Grid item xs={12} md={8}>
            <MessageField chatId={this.props.chatId} />
          </Grid>
        </Grid>
      </Container>
    );
  }
}
