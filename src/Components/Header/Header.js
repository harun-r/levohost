import React from "react";

import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap";

// Resource load
import logo from "../../assets/images/logo.png";
import TopHeader from "./TopHeader";
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div className="header-wrap">
      <TopHeader />
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="me-auto">
            <Image src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item>
                <NavLink className="nav-link" to="/" activeClassName="nav-active">HOME</NavLink>
              </Nav.Item>
              <NavDropdown title="HOSTING">
                <NavDropdown.Item to="/">Shared Web Hosting</NavDropdown.Item>
                <NavDropdown.Item href="#">Business Hosting</NavDropdown.Item>
                <NavDropdown.Item href="#">Reseller Hosting</NavDropdown.Item>
                <NavLink className="dropdown-item" to="/vps-hosting" activeClassName="nav-active">VPS Hosting</NavLink>
                <NavDropdown.Item href="#">
                  VPS Hosting (linux)
                </NavDropdown.Item>
                <NavLink className="dropdown-item" to="/dedicated-servers" activeClassName="nav-active">Dedicated Server</NavLink>
              </NavDropdown>
              <NavDropdown title="DOMAIN">
                <NavDropdown.Item href="#">
                  Domain Registration
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Domain Transfer</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  .BD domain registration
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="MORE SERVICES">
                <NavLink className="dropdown-item" to="/ssl-certificate" activeClassName="nav-active">SSL Certificate</NavLink>
                <NavDropdown.Item href="#">
                  Website Security Service
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="COMPANY &amp; FACILITIES ">
                <NavDropdown.Item href="#">Affiliate Program</NavDropdown.Item>
                <NavDropdown.Item href="#">About LevoHost</NavDropdown.Item>
                <NavDropdown.Item href="#">Contact Us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
