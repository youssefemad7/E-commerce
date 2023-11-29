import { useEffect, useState } from "react";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Productss from "./Productss";
import { Link } from "react-router-dom";
import image14 from "./images/0150220428_1_1_3_80x.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlassPlus,
  faHeart,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";

function Women() {
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
          <h3>Women</h3>
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
              <img src={image14} alt="" />

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
              <Link to="/Women1">
                <button class="button ms-5">
                  <span class="button-content ">Bye </span>
                </button>
              </Link>
            </div>{" "}
          </Col>
          <Col className="m-5">
            <div className="productbody1">
              <img src={image14} alt="" />

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
              <Link to="/Women2">
                <button class="button ms-5">
                  <span class="button-content ">Bye </span>
                </button>
              </Link>
            </div>{" "}
          </Col>
          <Col className="m-5">
            <div className="productbody1">
              <img src={image14} alt="" />

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
                <Link to="/Women3">
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
              <img src={image14} alt="" />

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
              <Link to="/Women4">
                <button class="button ms-5">
                  <span class="button-content ">Bye </span>
                </button>
              </Link>
            </div>{" "}
          </Col>
          <Col className="m-5">
            <div className="productbody1">
              <img src={image14} alt="" />

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
              <Link to="/Women5">
                <button class="button ms-5">
                  <span class="button-content ">Bye </span>
                </button>
              </Link>
            </div>{" "}
          </Col>
          <Col className="m-5">
            <div className="productbody1">
              <img src={image14} alt="" />

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
                <Link to="/Women6">
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
              <img src={image14} alt="" />

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
              <Link to="/Women7">
                <button class="button ms-5">
                  <span class="button-content ">Bye </span>
                </button>
              </Link>
            </div>{" "}
          </Col>
          <Col className="m-5">
            <div className="productbody1">
              <img src={image14} alt="" />

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
              <Link to="/Women8">
                <button class="button ms-5">
                  <span class="button-content ">Bye </span>
                </button>
              </Link>
            </div>{" "}
          </Col>
          <Col className="m-5">
            <div className="productbody1">
              <img src={image14} alt="" />

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
                <Link to="/Women9">
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
              <img src={image14} alt="" />

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
              <Link to="/Women10">
                <button class="button ms-5">
                  <span class="button-content ">Bye </span>
                </button>
              </Link>
            </div>{" "}
          </Col>
          <Col className="m-5">
            <div className="productbody1">
              <img src={image14} alt="" />

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
              <Link to="/Women11">
                <button class="button ms-5">
                  <span class="button-content ">Bye </span>
                </button>
              </Link>
            </div>{" "}
          </Col>
          <Col className="m-5">
            <div className="productbody1">
              <img src={image14} alt="" />

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
                <Link to="/Women12">
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
              <img src={image14} alt="" />

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
              <Link to="/Women13">
                <button class="button ms-5">
                  <span class="button-content ">Bye </span>
                </button>
              </Link>
            </div>{" "}
          </Col>
          <Col className="m-5">
            <div className="productbody1">
              <img src={image14} alt="" />

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
              <Link to="/Women14">
                <button class="button ms-5">
                  <span class="button-content ">Bye </span>
                </button>
              </Link>
            </div>{" "}
          </Col>
          <Col className="m-5">
            <div className="productbody1">
              <img src={image14} alt="" />

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
                <Link to="/Women15">
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

export default Women;
