import { useState } from "react";
import "../Styles/header.css";
import shoeLogo from "../logo.png";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Navbar expand="lg" sticky="top" className="header">
      <img src={shoeLogo} alt="logo" className="logo" />

      <Navbar.Toggle aria-controls="my-nav" onClick={() => setOpen(!open)} />
      <Container>
        <Navbar.Collapse id="my-nav" in={open}>
          <Nav className="nav-links mx-auto">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
            <NavLink to="/prodect">Products</NavLink>
            <NavLink to="/categories">Categories</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
