import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Navbars from "./components/Navbars";
import Swipper from "./components/Swipper";
import SearchBox from "./components/SearchBox";
import CarsShow from "./components/CarsShow";

const App = () => {
  return (
    <Container fluid>
      <Navbars />
      <Swipper />
      <SearchBox />
      <CarsShow />
    </Container>
  );
};

export default App;
