import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

function MyNavbar() {
  const expand = "md";

  return (
    <Navbar
      expand={expand}
      style={{ backgroundColor: "rgb(186, 182, 253)" }}
    >
      <Container fluid fle>
        <Navbar.Brand href="#">
          <h2 className="nav"> هری پاتر افسانه یی</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Collapse id={`offcanvasNavbar-expand-${expand}`}>
          <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
            <NavLink to="/" className="nav-link">
              صفحه اصلی
            </NavLink>
            <NavLink to="/serials" className="nav-link">
              سریال
            </NavLink>
            <NavLink to="/characters" className="nav-link">
              شخصیت ها
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
