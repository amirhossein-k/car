import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Navbars from "./components/Navbars";
import Swipper from "./components/Swipper";
import SearchBox from "./components/SearchBox";

const App = () => {
  return (
    <Container fluid>
      <Navbars />
      {/* <Swipper /> */}
      <SearchBox />
    </Container>
  );
};

export default App;
