import styled from "styled-components";
import React, { useState, useEffect } from "react";
import HomePage from "../../pages/HomePage";
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
        <HomePage />
        <Footer />
      </Router>
    </Root>
  );
}
