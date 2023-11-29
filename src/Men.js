import { useEffect, useState } from "react";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Productss from "./Productss";
import { Link } from "react-router-dom";
import image14 from "./images/0150220428_1_1_3_80x.jpg";
import img1 from "./Menproduct/images/1.png";
import img2 from "./Menproduct/images/2.jpg";
import img3 from "./Menproduct/images/3.jpg";
import img4 from "./Menproduct/images/4.jpg";
import img5 from "./Menproduct/images/5.jpg";
import img6 from "./Menproduct/images/6.jpg";
import img7 from "./Menproduct/images/7.jpg";
import img8 from "./Menproduct/images/8.jpg";
import img9 from "./Menproduct/images/9.jpg";
import img10 from "./Menproduct/images/10.jpg";
import img11 from "./Menproduct/images/11.jpg";
import img12 from "./Menproduct/images/12.jpg";
import img13 from "./Menproduct/images/13.png";
import img14 from "./Menproduct/images/14.jpg";
import img15 from "./Menproduct/images/15.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlassPlus,
  faHeart,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";

function Men() {
  // let ApiLink = "https://fakestoreapi.com/products";
  // let [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch(ApiLink)
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  return (
    <>
      <section className="shopsec1">
        <div>
          <h3>Men</h3>
          <Link to="/">Home</Link>
          <span>/ Shop</span>
        </div>
      </section>
      {/* 
      <Container className="mt-5">
        <Row>
          <Col lg={4} md={4} sm={12}>
            <img src={image14} width={300} />
            <p>djfashl;sfjdkshjn</p>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <img src={image14} width={300} />
            <p>djfashl;sfjdkshjn</p>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <img src={image14} width={300} />
            <p>djfashl;sfjdkshjn</p>
          </Col>
        </Row>
      </Container> */}

      <Container className="productbody overflow-hidden">
        <Row>
          <Col className="m-5">
            <div className="productbody1">
              <img src={img1} alt="" />

              {/* <div className="shopicons me-5 ms-5">
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faBasketShopping}
                      className="shopi shopi3 me-5 ms-5"
                    />
                  </Link>
                </div>
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="  shopi shopi2 ms-5 me-5 "
                    />
                  </Link>
                </div>
                <div>
                  <Link variant="primary" to={`/Shop`}>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlassPlus}
                      className="shopi"
                    />
                  </Link>
                </div>
              </div> */}
            </div>
            <h1 className="mt-4">
              {" "}
              titilehjkjbnbcvhjkblnbvhjvbaskdbvassssssss
            </h1>
            <div className="d-flex justify-center">
              {" "}
              <p className="mt-2 me-5">50</p>
              <Link to="/men1">
                <button class="button ms-5">
                  <span class="button-content ">Bye </span>
                </button>
              </Link>
            </div>{" "}
          </Col>
          <Col className="m-5">
            <div className="productbody1">
              <img src={img2} alt="" />

              {/* <div className="shopicons me-5 ms-5">
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faBasketShopping}
                      className="shopi shopi3 me-5 ms-5"
                    />
                  </Link>
                </div>
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="  shopi shopi2 ms-5 me-5 "
                    />
                  </Link>
                </div>
                <div>
                  <Link variant="primary" to={`/Shop`}>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlassPlus}
                      className="shopi"
                    />
                  </Link>
                </div>
              </div> */}
            </div>
            <h1 className="mt-4">
              {" "}
              titilehjkjbnbcvhjkblnbvhjvbaskdbvas,jvdasasdasd
            </h1>
            <div className="d-flex justify-center">
              {" "}
              <p className="mt-2 me-5">50</p>
              <Link to="/men2">
                <button class="button ms-5">
                  <span class="button-content ">Bye </span>
                </button>
              </Link>
            </div>{" "}
          </Col>
          <Col className="m-5">
            <div className="productbody1">
              <img src={img3} alt="" />

              {/* <div className="shopicons me-5 ms-5">
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faBasketShopping}
                      className="shopi shopi3 me-5 ms-5"
                    />
                  </Link>
                </div>
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="  shopi shopi2 ms-5 me-5 "
                    />
                  </Link>
                </div>
                <div>
                  <Link variant="primary" to={`/Shop`}>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlassPlus}
                      className="shopi"
                    />
                  </Link>
                </div>
              </div> */}
            </div>
            <div>
              <h1 className="mt-4">
                titilehjkjbnbcvhjkblnbvhjvbaskdbvas,jvdasasdasd
              </h1>
              <div className="d-flex justify-center">
                {" "}
                <p className="mt-2 me-5">50</p>
                <Link to="/men3">
                  <button class="button ms-5">
                    <span class="button-content ">Bye </span>
                  </button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="productbody overflow-hidden">
        <Row>
          <Col className="m-5">
            <div className="productbody1">
              <img src={img4} alt="" />

              {/* <div className="shopicons me-5 ms-5">
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faBasketShopping}
                      className="shopi shopi3 me-5 ms-5"
                    />
                  </Link>
                </div>
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="  shopi shopi2 ms-5 me-5 "
                    />
                  </Link>
                </div>
                <div>
                  <Link variant="primary" to={`/Shop`}>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlassPlus}
                      className="shopi"
                    />
                  </Link>
                </div>
              </div> */}
            </div>
            <h1 className="mt-4">
              {" "}
              titilehjkjbnbcvhjkblnbvhjvbaskdbvassssssss
            </h1>
            <div className="d-flex justify-center">
              {" "}
              <p className="mt-2 me-5">50</p>
              <Link to="/men4">
                <button class="button ms-5">
                  <span class="button-content ">Bye </span>
                </button>
              </Link>
            </div>{" "}
          </Col>
          <Col className="m-5">
            <div className="productbody1">
              <img src={img5} alt="" />

              {/* <div className="shopicons me-5 ms-5">
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faBasketShopping}
                      className="shopi shopi3 me-5 ms-5"
                    />
                  </Link>
                </div>
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="  shopi shopi2 ms-5 me-5 "
                    />
                  </Link>
                </div>
                <div>
                  <Link variant="primary" to={`/Shop`}>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlassPlus}
                      className="shopi"
                    />
                  </Link>
                </div>
              </div> */}
            </div>
            <h1 className="mt-4">
              {" "}
              titilehjkjbnbcvhjkblnbvhjvbaskdbvas,jvdasasdasd
            </h1>
            <div className="d-flex justify-center">
              {" "}
              <p className="mt-2 me-5">50</p>
              <Link to="/men5">
                <button class="button ms-5">
                  <span class="button-content ">Bye </span>
                </button>
              </Link>
            </div>{" "}
          </Col>
          <Col className="m-5">
            <div className="productbody1">
              <img src={img6} alt="" />

              {/* <div className="shopicons me-5 ms-5">
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faBasketShopping}
                      className="shopi shopi3 me-5 ms-5"
                    />
                  </Link>
                </div>
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="  shopi shopi2 ms-5 me-5 "
                    />
                  </Link>
                </div>
                <div>
                  <Link variant="primary" to={`/Shop`}>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlassPlus}
                      className="shopi"
                    />
                  </Link>
                </div>
              </div> */}
            </div>
            <div>
              <h1 className="mt-4">
                titilehjkjbnbcvhjkblnbvhjvbaskdbvas,jvdasasdasd
              </h1>
              <div className="d-flex justify-center">
                {" "}
                <p className="mt-2 me-5">50</p>
                <Link to="/men6">
                  <button class="button ms-5">
                    <span class="button-content ">Bye </span>
                  </button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="productbody overflow-hidden">
        <Row>
          <Col className="m-5">
            <div className="productbody1">
              <img src={img7} alt="" />

              {/* <div className="shopicons me-5 ms-5">
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faBasketShopping}
                      className="shopi shopi3 me-5 ms-5"
                    />
                  </Link>
                </div>
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="  shopi shopi2 ms-5 me-5 "
                    />
                  </Link>
                </div>
                <div>
                  <Link variant="primary" to={`/Shop`}>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlassPlus}
                      className="shopi"
                    />
                  </Link>
                </div>
              </div> */}
            </div>
            <h1 className="mt-4">
              {" "}
              titilehjkjbnbcvhjkblnbvhjvbaskdbvassssssss
            </h1>
            <div className="d-flex justify-center">
              {" "}
              <p className="mt-2 me-5">50</p>
              <Link to="/men7">
                <button class="button ms-5">
                  <span class="button-content ">Bye </span>
                </button>
              </Link>
            </div>{" "}
          </Col>
          <Col className="m-5">
            <div className="productbody1">
              <img src={img8} alt="" />

              {/* <div className="shopicons me-5 ms-5">
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faBasketShopping}
                      className="shopi shopi3 me-5 ms-5"
                    />
                  </Link>
                </div>
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="  shopi shopi2 ms-5 me-5 "
                    />
                  </Link>
                </div>
                <div>
                  <Link variant="primary" to={`/Shop`}>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlassPlus}
                      className="shopi"
                    />
                  </Link>
                </div>
              </div> */}
            </div>
            <h1 className="mt-4">
              {" "}
              titilehjkjbnbcvhjkblnbvhjvbaskdbvas,jvdasasdasd
            </h1>
            <div className="d-flex justify-center">
              {" "}
              <p className="mt-2 me-5">50</p>
              <Link to="/men8">
                <button class="button ms-5">
                  <span class="button-content ">Bye </span>
                </button>
              </Link>
            </div>{" "}
          </Col>
          <Col className="m-5">
            <div className="productbody1">
              <img src={img9} alt="" />

              {/* <div className="shopicons me-5 ms-5">
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faBasketShopping}
                      className="shopi shopi3 me-5 ms-5"
                    />
                  </Link>
                </div>
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="  shopi shopi2 ms-5 me-5 "
                    />
                  </Link>
                </div>
                <div>
                  <Link variant="primary" to={`/Shop`}>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlassPlus}
                      className="shopi"
                    />
                  </Link>
                </div>
              </div> */}
            </div>
            <div>
              <h1 className="mt-4">
                titilehjkjbnbcvhjkblnbvhjvbaskdbvas,jvdasasdasd
              </h1>
              <div className="d-flex justify-center">
                {" "}
                <p className="mt-2 me-5">50</p>
                <Link to="/men9">
                  <button class="button ms-5">
                    <span class="button-content ">Bye </span>
                  </button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="productbody overflow-hidden">
        <Row>
          <Col className="m-5">
            <div className="productbody1">
              <img src={img10} alt="" />

              {/* <div className="shopicons me-5 ms-5">
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faBasketShopping}
                      className="shopi shopi3 me-5 ms-5"
                    />
                  </Link>
                </div>
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="  shopi shopi2 ms-5 me-5 "
                    />
                  </Link>
                </div>
                <div>
                  <Link variant="primary" to={`/Shop`}>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlassPlus}
                      className="shopi"
                    />
                  </Link>
                </div>
              </div> */}
            </div>
            <h1 className="mt-4">
              {" "}
              titilehjkjbnbcvhjkblnbvhjvbaskdbvassssssss
            </h1>
            <div className="d-flex justify-center">
              {" "}
              <p className="mt-2 me-5">50</p>
              <Link to="/men10">
                <button class="button ms-5">
                  <span class="button-content ">Bye </span>
                </button>
              </Link>
            </div>{" "}
          </Col>
          <Col className="m-5">
            <div className="productbody1">
              <img src={img11} alt="" />

              {/* <div className="shopicons me-5 ms-5">
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faBasketShopping}
                      className="shopi shopi3 me-5 ms-5"
                    />
                  </Link>
                </div>
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="  shopi shopi2 ms-5 me-5 "
                    />
                  </Link>
                </div>
                <div>
                  <Link variant="primary" to={`/Shop`}>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlassPlus}
                      className="shopi"
                    />
                  </Link>
                </div>
              </div> */}
            </div>
            <h1 className="mt-4">
              {" "}
              titilehjkjbnbcvhjkblnbvhjvbaskdbvas,jvdasasdasd
            </h1>
            <div className="d-flex justify-center">
              {" "}
              <p className="mt-2 me-5">50</p>
              <Link to="/men11">
                <button class="button ms-5">
                  <span class="button-content ">Bye </span>
                </button>
              </Link>
            </div>{" "}
          </Col>
          <Col className="m-5">
            <div className="productbody1">
              <img src={img12} alt="" />

              {/* <div className="shopicons me-5 ms-5">
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faBasketShopping}
                      className="shopi shopi3 me-5 ms-5"
                    />
                  </Link>
                </div>
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="  shopi shopi2 ms-5 me-5 "
                    />
                  </Link>
                </div>
                <div>
                  <Link variant="primary" to={`/Shop`}>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlassPlus}
                      className="shopi"
                    />
                  </Link>
                </div>
              </div> */}
            </div>
            <div>
              <h1 className="mt-4">
                titilehjkjbnbcvhjkblnbvhjvbaskdbvas,jvdasasdasd
              </h1>
              <div className="d-flex justify-center">
                {" "}
                <p className="mt-2 me-5">50</p>
                <Link to="/men12">
                  <button class="button ms-5">
                    <span class="button-content ">Bye </span>
                  </button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="productbody overflow-hidden">
        <Row>
          <Col className="m-5">
            <div className="productbody1">
              <img src={img13} alt="" />

              {/* <div className="shopicons me-5 ms-5">
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faBasketShopping}
                      className="shopi shopi3 me-5 ms-5"
                    />
                  </Link>
                </div>
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="  shopi shopi2 ms-5 me-5 "
                    />
                  </Link>
                </div>
                <div>
                  <Link variant="primary" to={`/Shop`}>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlassPlus}
                      className="shopi"
                    />
                  </Link>
                </div>
              </div> */}
            </div>
            <h1 className="mt-4">
              {" "}
              titilehjkjbnbcvhjkblnbvhjvbaskdbvassssssss
            </h1>
            <div className="d-flex justify-center">
              {" "}
              <p className="mt-2 me-5">50</p>
              <Link to="/men13">
                <button class="button ms-5">
                  <span class="button-content ">Bye </span>
                </button>
              </Link>
            </div>{" "}
          </Col>
          <Col className="m-5">
            <div className="productbody1">
              <img src={img14} alt="" />

              {/* <div className="shopicons me-5 ms-5">
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faBasketShopping}
                      className="shopi shopi3 me-5 ms-5"
                    />
                  </Link>
                </div>
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="  shopi shopi2 ms-5 me-5 "
                    />
                  </Link>
                </div>
                <div>
                  <Link variant="primary" to={`/Shop`}>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlassPlus}
                      className="shopi"
                    />
                  </Link>
                </div>
              </div> */}
            </div>
            <h1 className="mt-4">
              {" "}
              titilehjkjbnbcvhjkblnbvhjvbaskdbvas,jvdasasdasd
            </h1>
            <div className="d-flex justify-center">
              {" "}
              <p className="mt-2 me-5">50</p>
              <Link to="/men14">
                <button class="button ms-5">
                  <span class="button-content ">Bye </span>
                </button>
              </Link>
            </div>{" "}
          </Col>
          <Col className="m-5">
            <div className="productbody1">
              <img src={img15} alt="" />

              {/* <div className="shopicons me-5 ms-5">
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faBasketShopping}
                      className="shopi shopi3 me-5 ms-5"
                    />
                  </Link>
                </div>
                <div>
                  <Link>
                    {" "}
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="  shopi shopi2 ms-5 me-5 "
                    />
                  </Link>
                </div>
                <div>
                  <Link variant="primary" to={`/Shop`}>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlassPlus}
                      className="shopi"
                    />
                  </Link>
                </div>
              </div> */}
            </div>
            <div>
              <h1 className="mt-4">
                titilehjkjbnbcvhjkblnbvhjvbaskdbvas,jvdasasdasd
              </h1>
              <div className="d-flex justify-center">
                {" "}
                <p className="mt-2 me-5">50</p>
                <Link to="/men15">
                  <button class="button ms-5">
                    <span class="button-content ">Bye </span>
                  </button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Men;
