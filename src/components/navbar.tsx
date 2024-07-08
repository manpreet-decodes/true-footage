import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "./logo.jpg";
import menu from "./menu.png";
import crossMenu from "./crossMenu.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isOpen]);

  return (
    <PageWrapper>
      <Logo src={logo} alt="logo" />
      <Hamburger onClick={toggleMenu}>
        {isOpen ? (
          <img src={crossMenu} alt="crossMenu" />
        ) : (
          <img src={menu} alt="menu" />
        )}
      </Hamburger>
      <NavLinks isOpen={isOpen}>
        <a href="#about" onClick={() => scrollToId("about")}>
          About
        </a>
        <a href="#services" onClick={() => scrollToId("services")}>
          Services
        </a>
        <a href="#portfolio" onClick={() => scrollToId("portfolio")}>
          Articles
        </a>
        <a href="#login" onClick={() => scrollToId("login")}>
          Our Tech
        </a>
        <a href="#signup" onClick={() => scrollToId("signup")}>
          Join Us
        </a>
        <a href="#contact" onClick={() => scrollToId("contact")}>
          Contact
        </a>
      </NavLinks>
      <Overlay isOpen={isOpen} onClick={toggleMenu} />
    </PageWrapper>
  );
};

const scrollToId = (id: string) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const PageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0rem;
  padding-right: 5rem;
  position: relative; /* Ensure positioning context for NavLinks */
  overflow: hidden; /* Prevent overflow when the menu is open */
`;

const Logo = styled.img`
  width: 15%;
`;

interface NavLinksProps {
  isOpen: boolean;
}

const NavLinks = styled.div<NavLinksProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 300px;
  height: 100%;
  background-color: white;
  padding: 2rem 1rem;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 1000; /* Ensure it overlays other content */
  display: flex;
  flex-direction: column;
  a {
    margin: 1rem 0;
    text-decoration: none;
    color: #333;
    font-weight: 600;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 500; /* Ensure it overlays the main content but below the NavLinks */
`;

export default Navbar;
