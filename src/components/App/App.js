import styled from "styled-components";
import React from "react";
import { HashRouter as Router, Switch, Route, useParams } from "react-router-dom";

import HomePage from "../../pages/HomePage";

import Header from "../Header";
import Footer from "../Footer";

const Root = styled.div``;

export default function App() {
  return (
    <Root>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/:genre">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Root>
  );
}
