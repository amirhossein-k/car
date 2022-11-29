import React from "react";
import { Container } from "react-bootstrap";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/register" exact element={<RegisterScreen />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
