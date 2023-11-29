import { useEffect, useState } from "react";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Productss from "./Productss";
import { Link } from "react-router-dom";
import image14 from "./images/0150220428_1_1_3_80x.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "./Womenproduct/images/0150220428_2_2_3_1_1024x1024@2x.jpg";
import img2 from "./Womenproduct/images/0419492742_2_4_3-367x497_1024x1024@2x.jpg";
import img3 from "./Womenproduct/images/0503326613_2_4_1-367x497_1024x1024@2x.jpg";
import img4 from "./Womenproduct/images/5576660812_2_4sd_3-367x497_1024x1024@2x.jpg";
import img5 from "./Womenproduct/images/5606326812cvcv_2_4_3_540x.jpg";
import img6 from "./Womenproduct/images/5814619742_2_4_1-367x497_1024x1024@2x.jpg";
import img7 from "./Womenproduct/images/6111.jpg";
import img8 from "./Womenproduct/images/6703777712_2_4_3_80x.jpg";
import img9 from "./Womenproduct/images/minimalist-img-10_1024x1024@2x.jpg";
import img10 from "./Womenproduct/images/minimalist-img-13_1024x1024@2x.jpg";
import img11 from "./Womenproduct/images/minimalist-img-2_540x.jpg";
import img12 from "./Womenproduct/images/minimalist-img-3_900x.jpg";
import img13 from "./Womenproduct/images/minimalist-img-5_a1455f0b-6b39-4c34-a1ce-ff3aa62e53af_1024x1024@2x.jpg";
import img14 from "./Womenproduct/images/minimalist-img-6_1024x1024@2x.jpg";
import img15 from "./Womenproduct/images/minimalist-img-8_1024x1024@2x.jpg";

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
              <Link to="/Women1">
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
              <Link to="/Women2">
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
              <Link to="/Women4">
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
              <Link to="/Women5">
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
              <Link to="/Women7">
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
              <Link to="/Women8">
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
              <Link to="/Women10">
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
              <Link to="/Women11">
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
              <Link to="/Women13">
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
              <Link to="/Women14">
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
