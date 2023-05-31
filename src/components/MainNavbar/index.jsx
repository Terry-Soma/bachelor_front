
import { useState } from "react";

import { Link } from "react-router-dom";
import Logo from './../../assets/logowhite.png'
import { Container, Navbar, Nav } from 'react-bootstrap';
import "./style.css"
export default function MainNavbar() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar
      collapseOnSelect
      bg="myNav"
      variant="dark"
      expand="lg"
      expanded={expanded}
      sticky="top"
    >
      <Container >
        <Navbar.Brand className="">
          <Link to="/" className='d-flex align-items-center justify-content-evenly gap-2 nav-link p-3 fs-4' onClick={() => setExpanded(false)}>
            <img
              src={Logo}
              className="d-inline-block align-top ms-3"
              alt="Их засаг лого"
              height="50px"
            />
            <p className='fs-4 mx-2 mb-0 navlink'>ИХ ЗАСАГ ЭЛСЭЛТ</p>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle
          onClick={() => {
            setExpanded(expanded ? false : 'expanded');
          }}
        />
        <Navbar.Collapse id="navbarScroll" className="">
          <Nav className="me-auto align-items-center">
            <Link
              className="nav-link p-3 fs-4 mx-4 navlink"
              to="/info"
              onClick={() => setExpanded(false)}
            >
              Хөтөлбөрүүд
            </Link>
            <Link
              className="nav-link fs-4 p-3 mx-4 navlink"
              to="/school"
              onClick={() => setExpanded(false)}
            >
              Салбар сургууль
            </Link>
            <Link
              className="nav-link p-3 fs-4 mx-4 navlink"
              to="/help"
              onClick={() => setExpanded(false)}
            >
              Тусламж
            </Link>
          </Nav>
          {/* Ectx.state.burtgel_Id && Ectx.state.email && Ectx.state.emailVerified */}
          {(1 > 2) ? (
            <Nav className="align-items-center">
              <Link
                className="fs-4  p-3 mainbtn text-center navlink"
                to="/my-info"
                onClick={() => setExpanded(false)}
              >
                Хувийн мэдээлэл
              </Link>
              <Link
                className="fs-4  p-3 mainbtn"
                to="/logout"
                onClick={() => setExpanded(false)}
              >
                Гарах
              </Link>
            </Nav>
          ) : (
            <Nav>
              <Link
                className="fs-4 p-3 mainbtn text-center"
                to="/login"
                onClick={() => setExpanded(false)}
              >
                Бүртгүүлэх
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}