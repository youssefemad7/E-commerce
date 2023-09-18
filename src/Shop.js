import { useEffect, useState } from 'react';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import Productss from './Components/Productss'
import products from './Components/products.json'
import { Link } from 'react-router-dom';

function Shop() {
  // let ApiLink = './Components/products';
  // let [products,setProducts] = useState([])
  // useEffect(() =>{
  //   fetch(ApiLink)
  //   .then((res) =>res.json())
  //   .then((data) =>setProducts(data))
  // },[])


  let ApiLink = 'https://fakestoreapi.com/products';
  let [products,setProducts] = useState([])
  useEffect(() =>{
    fetch(ApiLink)
    .then((res) =>res.json())
    .then((data) =>setProducts(data))
  },[])
  
  return (
    <>
    <section className='shopsec1'>
      <div>
        <h3>Shop</h3>
        <Link to='/'>Home</Link>
        <span>/ Shop</span>
      </div>
      
    </section>

    <Container>
      <Row>
        {products.map((productsss) =>{
          return(
            <Col  key={productsss.id} lg={4}  md={6} sm={12}>
            <Productss  product= {productsss} />
          </Col>
          )
        })}

      </Row>
    </Container>

  
    {/* <Container>
      <Row>
        {products.map((product) =>{
          return(
          <Col lg={3} key={product.id}>
            <Productss product={product} />
          </Col>
          )
        })}
        
      </Row>
    </Container> */}


    </>
  );
}

export default Shop;
