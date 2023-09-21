import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { faBasketShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image1 from "../src/images/1.png";
import { NavLink } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink to="/" className="itemsl ">
              Home
            </NavLink>
            <NavLink to="/Aboutus" className="itemsl">
              AboutUs
            </NavLink>
            <NavLink to="/Shop" className=" mar">
              SHOP
            </NavLink>
            <NavLink to="/" className="img1 ">
              {" "}
              <img src={image1} alt="" />{" "}
            </NavLink>
            <NavLink to="#link" className="itemsr">
              ContactUs
            </NavLink>
            <NavLink to="#link" className="itemsr ">
              FAQ's
            </NavLink>
            <NavLink to="#link" className=" itemsr">
              Blog
            </NavLink>
            <NavLink>
              <FontAwesomeIcon
                icon={faBasketShopping}
                className="items  icon1"
              />
            </NavLink>
            <NavLink>
              {" "}
              <FontAwesomeIcon icon={faHeart} className="items  icon1 ms-3" />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
