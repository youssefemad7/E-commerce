import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import image14 from "../../images/Untitled-2_360x.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Productdetails() {
  let ApiLink = "https://fakestoreapi.com/products";

  let [product, setProduct] = useState([]);

  let params = useParams();
  useEffect(() => {
    fetch(`${ApiLink}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);
  return (
    <>
      <Container className="productdetails">
        <Row>
          <Col xl={4} lg={6} md={12} sm={12}>
            <img src={product.image} className="imgdet" />
          </Col>
          <Col xl={7} lg={6} md={12} sm={12} className="mt-4 ">
            <div className="details1">
              <h1>
                <Link to="/shop">Shop / </Link> {product.title}
              </h1>
            </div>

            <h4>{product.title}</h4>
            <h5>{`$${product.price}`}</h5>
            <div className="details">
              <input type="number"></input>
              <button>Add to Cart</button>
              <p className="mt-3">{`Total Price: $${product.price}`}</p>
              <Link>
                {" "}
                <FontAwesomeIcon icon={faHeart} className="producticon" />
              </Link>
            </div>
            <p>{product.description}</p>
            <ul>
              <li>
                <h5>
                  Avilable: <span>In stock</span>
                </h5>
              </li>
              {/* <li>
                <h5>
                  Type: <span>Woman</span>
                </h5>
              </li> */}
              <li>
                <h5>
                  Vendor: <span>Fashion</span>
                </h5>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Productdetails;
