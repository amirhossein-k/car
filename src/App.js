import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Navbars from "./components/Navbars";
import Swipper from "./components/Swipper";
import SearchBox from "./components/SearchBox";
import CarsShow from "./components/CarsShow";
import Info from "./components/Info";

const App = () => {
  return (
    <Container fluid>
      <Navbars />
      <Swipper />
      <SearchBox />
      <CarsShow />
      <Info />
    </Container>
  );
};

export default App;
