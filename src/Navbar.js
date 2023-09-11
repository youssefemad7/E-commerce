import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image1 from '../src/images/1.png';


function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Link href="#home" className='items '>Home</Nav.Link>     
            <Nav.Link href="#link" className=' mar'>SHOP</Nav.Link>
            <Nav.Link href="#"  className='img1 '>   <img src={image1} alt=""  /> </Nav.Link>
            <Nav.Link><FontAwesomeIcon icon={faBasketShopping}  className='items  icon1'/></Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;