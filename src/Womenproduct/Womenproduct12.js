import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import image14 from "../images/0150220428_1_1_3_80x.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Womenproduct12() {
  return (
    <>
      <Container className="productdetails">
        <Row>
          <Col xl={4} lg={6} md={12} sm={12}>
            <img src={image14} className="imgdet" />
          </Col>
          <Col xl={7} lg={6} md={12} sm={12} className="mt-4 ">
            <div className="details1">
              <h1>
                <Link to="/shop">Shop / </Link> mbjkbjknj
              </h1>
            </div>

            <h4>bknn,n</h4>
            <h5>15</h5>
            <div className="details">
              <input type="number"></input>
              <button>Add to Cart</button>
              <p className="mt-3">{`Total Price: $15`}</p>
              <Link>
                {" "}
                <FontAwesomeIcon icon={faHeart} className="producticon" />
              </Link>
            </div>
            <p>hjvahksdjnasd</p>
            <ul>
              <li>
                <h5>
                  Avilable: <span>In stock</span>
                </h5>
              </li>
              <li>
                <h5>
                  Type: <span>Woman</span>
                </h5>
              </li>
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
export default Womenproduct12;
