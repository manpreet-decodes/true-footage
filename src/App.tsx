import React from "react";
import styled from "styled-components";
import Navbar from "./components/navbar";
import component from "./component.png";
import Middle from "./components/middle";

function App() {
  return (
    <PageWrapper className="App">
      <Component src={component} alt="component" />
      <Navbar />
      <Middle />
      <Footer>© Copyright 2024, Decodes. All rights reserved.</Footer>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  position: relative;
  margin-left: 5rem;
`;
const Component = styled.img`
  width: 70%;
  position: absolute;
  right: 0;
  z-index: -1;
`;

const Footer = styled.footer`
  width: 100%;
  margin-top: 9rem;
  text-align: start;
  color: #333;
  font-size: 0.7rem;
  font-weight: 600;
  opacity: 0.8;
  font-family: "Lato", sans-serif;
`;
export default App;
