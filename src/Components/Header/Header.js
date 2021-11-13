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
                <NavLink className="dropdown-item" to="/shared-hosting" activeClassName="nav-active">Shared Web Hosting</NavLink>
                <NavLink className="dropdown-item" to="/business-hosting" activeClassName="nav-active">Business Hosting</NavLink>
                <NavLink className="dropdown-item" to="/reseller-hosting" activeClassName="nav-active">Reseller Hosting</NavLink>
                <NavLink className="dropdown-item" to="/vps-hosting" activeClassName="nav-active">VPS Hosting</NavLink>
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
                <NavLink className="dropdown-item" to="/affiliate" activeClassName="nav-active">Affiliate Program</NavLink>
                <NavLink className="dropdown-item" to="/about-us" activeClassName="nav-active">About LevoHost</NavLink>
                <NavLink className="dropdown-item" to="/about-us" activeClassName="nav-active">Contact Us</NavLink>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
