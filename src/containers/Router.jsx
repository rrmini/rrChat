import React, { Component } from "react";
import { Switch, Route } from "react-router-dom"; //, useRouteMatch
import Layout from "../components/Layout";

export default class Router extends Component {
  render() {
    return [
      <Switch key={"switchRouters"}>
        <Route exact path="/" component={Layout} />
        <Route
          exact
          path="/chat/:chatId/"
          render={obj => <Layout chatId={Number(obj.match.params.chatId)} />}
        />
      </Switch>
    ];
  }
}
