import { useEffect, useState } from "react";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Productss from "./Productss";
// import products from "./Product.json";
import { Link } from "react-router-dom";
import productsss from "./products.json";

function Shop() {
  let ApiLink = "https://fakestoreapi.com/products";

  let [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(ApiLink)
      .then((res) => res.json())
      // .then((data) => console.log(data));

      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <section className="shopsec1">
        <div>
          <h3>Shop</h3>
          <Link to="/">Home</Link>
          <span>/ Shop</span>
        </div>
      </section>

      <Container>
        <Row>
          {products.map((productsss) => {
            return (
              <Col key={productsss.id} lg={4} md={6} sm={12}>
                <Productss product={productsss} />
              </Col>
            );
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
