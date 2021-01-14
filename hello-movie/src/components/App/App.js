import styled from "styled-components";
import React from "react";
import HomePage from "../../pages/HomePage";
import ActionPage from "../../pages/ActionPage";
import DramaPage from "../../pages/DramaPage";
import CrimePage from "../../pages/CrimePage";
import FantasyPage from "../../pages/FantasyPage";
import RomancePage from "../../pages/RomancePage";
import AnimationPage from "../../pages/AnimationPage";
import DocumentaryPage from "../../pages/DocumentaryPage";
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
          <Route exact path="/actions">
            <ActionPage />
          </Route>
          <Route exact path="/drama">
            <DramaPage />
          </Route>
          <Route exact path="/crime">
            <CrimePage />
          </Route>
          <Route exact path="/fantasy">
            <FantasyPage />
          </Route>
          <Route exact path="/romance">
            <RomancePage />
          </Route>
          <Route exact path="/animation">
            <AnimationPage />
          </Route>
          <Route exact path="/documentary">
            <DocumentaryPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Root>
  );
}
