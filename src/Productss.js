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
     <Container className='productbody overflow-hidden' >
      <Row>
        <Col className='m-5'>
          
       <div className='productbody1'>
       <img src={image14} alt='' />
   
   <div className='shopicons me-5 ms-5'>
    <div>
    <Link> <FontAwesomeIcon icon={faBasketShopping} className='shopi shopi3 me-5 ms-5'  /></Link> 

    </div>
<div>
<Link>  <FontAwesomeIcon icon={faHeart} className='  shopi shopi2 ms-5 me-5 '/></Link> 

</div>
<div>
<Link variant="primary" to={`/shop/${product.id}`}><FontAwesomeIcon icon={faMagnifyingGlassPlus}  className='shopi' /></Link>

</div>

   </div>
       </div>
         
        
        <h1 className='mt-4'>
          {product.title}
        </h1>
        <p>
        {`$ ${product.price}`}

        </p>
       
        
     
   </Col>
      </Row>
     </Container>
    
     </>  
  );
}

export default Productss;
