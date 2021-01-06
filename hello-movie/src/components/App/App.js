import styled from "styled-components";
import React from "react";
import { useEffect, useState } from "react";
import HomePage from "../../pages/HomePage";
import IntroPage from "../../pages/IntroPage";
import ActionPage from "../../pages/ActionPage";
import Header from "../Header";
import Footer from "../Footer";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

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
        </Switch>
        <Footer />
      </Router>
    </Root>
  );
}
