import { Col, Container, Row } from 'react-bootstrap';
import './App.css';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassPlus,faHeart,faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import image14 from '../src/images/Untitled-2_c3deccf5-8c45-4eae-8ed0-63383cd413a0_540x.jpg';




function Productss(props) {
    let {product}=props
 
  return (
     <>
     <Container className='productbody' >
      <Row>
        <Col className='m-5'>
          
       
          <img src={image14} alt='' />
   
        <h1>
          {product.title}
        </h1>
        <p>
        {`$ ${product.price}`}

        </p>
        <div className='shopicons'>
        <FontAwesomeIcon icon={faBasketShopping} className='shopi'  />
        <FontAwesomeIcon icon={faHeart} className=' ms-5 me-5 shopi'/>
        <Link variant="primary" to={`/shop/${product.id}`}><FontAwesomeIcon icon={faMagnifyingGlassPlus}  className='shopi' /></Link>

        </div>
       
        
     
   </Col>
      </Row>
     </Container>
    
     </>  
  );
}

export default Productss;
