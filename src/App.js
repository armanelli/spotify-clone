import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";

import { Wrapper, Container, Content } from "./styles/components";

import Sidebar from "./components/Sidebar/Sidebar";
import Player from "./components/Player/Player";
import Header from "./components/Header/Header";

import Routes from "./routes";

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Wrapper>
      <Container>
        <Sidebar />
        <Content>
          <Header />
          <Routes />
        </Content>
      </Container>
      <Player />
    </Wrapper>
  </BrowserRouter>
);

export default App;
