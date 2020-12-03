import Router from "./Router/index";
import styled from "styled-components";
import React from "react";
import GlobalState from "./Global/GlobalState";
import {Footer} from "./Components/Footer/Footer";
import "./App.css";

const DivMain = styled.div`
  background-color: rgb(255, 205, 0, 0.7);
`;

function App() {
  return (
    <DivMain>
      <GlobalState>
        <Router />
      </GlobalState>
      <Footer/>
    </DivMain>
  );
}

export default App;
