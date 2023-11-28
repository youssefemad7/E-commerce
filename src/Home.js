import "./App.css";
import { Link } from "react-router-dom";
import Swiper from "./Swiper";
import Swiper2 from "./Swiper2";
import { ImEye } from "react-icons/im";
import { MdMore } from "react-icons/md";
import { SiInstagram } from "react-icons/si";
import image4 from "../src/images/cate-df-3_360x.jpg";
import image5 from "../src/images/cate-df-2_360x.jpg";
import image6 from "../src/images/cate-df-1_360x.jpg";
import image7 from "../src/images/cate-df-4_360x.jpg";
import image8 from "../src/images/Layer-14-2_540x.jpg";
import image9 from "../src/images/Layer-141-1000x1280_540x.jpg";
import image10 from "../src/images/Untitled-2_c3deccf5-8c45-4eae-8ed0-63383cd413a0_540x.jpg";
import image11 from "../src/images/6350552300_1_1_1-1_80x.jpg";
import image12 from "../src/images/0150220428_1_1_3_80x.jpg";
import image13 from "../src/images/minimalist-img-5_a1455f0b-6b39-4c34-a1ce-ff3aa62e53af_80x.jpg";
import image14 from "../src/images/0248251428_1_1_3_80x.jpg";
import image15 from "../src/images/6703777712_2_4_3_80x.jpg";
import image16 from "../src/images/6111.jpg";
import image17 from "../src/images/6222.jpg";
import image18 from "../src/images/6333.jpg";
import image19 from "../src/images/6444.jpg";
import image20 from "../src/images/6555.jpg";
import image21 from "../src/images/6666.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <>
      <Swiper className="sec1" />
      <Container className="mt-5">
        <Row className="images">
          <Col lg={3} sm={6}>
            <div>
              <div className="divhid">
                <img src={image4} className="img7" />
              </div>{" "}
              <h3 className="tex  mt-3">
                Women
                <span className="ms-3">
                  <Link to="/Women">
                    <button class="button">
                      <span class="button-content">Bye </span>
                    </button>
                  </Link>
                </span>
              </h3>
            </div>
          </Col>
          <Col lg={3} sm={6}>
            <div>
              <div className="divhid">
                <img src={image5} className="img7" />
              </div>{" "}
              <h3 className="tex ms-3 mt-3">
                Men
                <span className="ms-4">
                  <Link to="/Men">
                    <button class="button">
                      <span class="button-content">Bye </span>
                    </button>
                  </Link>
                </span>
              </h3>
            </div>
          </Col>
          <Col lg={3} sm={6}>
            <div>
              <div className="divhid">
                <img src={image6} className="img7" />
              </div>{" "}
              <h3 className="tex ms-3 mt-3">
                Boys
                <span className="ms-4">
                  <Link to="/Boys">
                    <button class="button">
                      <span class="button-content">Bye </span>
                    </button>
                  </Link>
                </span>
              </h3>
            </div>
          </Col>
          <Col lg={3} sm={6}>
            <div>
              <div className="divhid">
                <img src={image7} className="img7" />
              </div>
              <h3 className="tex ms-3 mt-3">
                Girls
                <span className="ms-4">
                  <Link to="/Girls">
                    <button class="button">
                      <span class="button-content">Bye </span>
                    </button>
                  </Link>
                </span>
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
      <section className="sec3">
        <Container>
          <h1>Best Silling </h1>
          <Swiper2 />
        </Container>
      </section>
      <section className="sec4">
        <Container>
          <Row className="justify-content-between">
            <Col lg={8} md={8} sm={12} className="sec4div1">
              <div className="div11sec4">
                <h5>MERRY</h5>
                <h4>Christmas</h4>
                <div className="flexywrite">
                  <h3>40</h3>
                  <div>
                    <p>%</p>
                    <p className="ptwo">Off</p>
                  </div>
                </div>
                <button class="c-button c-button--gooey one">
                  {" "}
                  SHOP NOW
                  <div class="c-button__blobs">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </button>
              </div>
            </Col>
            <Col lg={3} md={3} sm={12} className="sec4div2">
              <div className="div11sec4">
                <h5>Your Next</h5>
                <h4>Purchase</h4>
                <div className="flexywrite">
                  <h3>10</h3>
                  <p> % Off</p>
                </div>
                <button class="c-button c-button--gooey">
                  {" "}
                  SHOP NOW
                  <div class="c-button__blobs">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="sec5">
        <Container>
          <h3 className="sec5h3">Trending Outfits</h3>
          <Row>
            <Col lg="4" md="4" sm="12">
              <div className="allcategory">
                <div className="badge">
                  <MdMore className="iconbadge" />
                </div>
                <div className="categorydetail">
                  <img src={image11} alt="" />

                  <div>
                    <h3>
                      Anorak Jacket
                      <br />
                      $22.00
                    </h3>
                    <p>view details</p>
                  </div>
                </div>

                <div className="category"></div>
              </div>
              <div className="allcategory2">
                <div className="badge">
                  <MdMore className="iconbadge" />
                </div>
                <div className="categorydetail">
                  <img src={image12} alt="" />

                  <div>
                    <h3>
                      Wide-Leg Jeans
                      <br />
                      $98.00
                    </h3>
                    <p>view details</p>
                  </div>
                </div>

                <div className="category"></div>
              </div>

              <img src={image8} alt="" />

              <div className="divflexy3">
                <div>
                  <p>Quilted Gilet With Hood</p>
                  <h3>$179.00</h3>
                </div>
                <abbr title="View Details">
                  <ImEye />
                </abbr>
              </div>
            </Col>
            <Col lg="4" md="4" sm="12">
              <div className="allcategory3">
                <div className="badge">
                  <MdMore className="iconbadge" />
                </div>
                <div className="categorydetail">
                  <img src={image13} alt="" />

                  <div>
                    <h3>
                      Quilted Bomber Jacket
                      <br />
                      $99.00
                    </h3>
                    <p>view details</p>
                  </div>
                </div>

                <div className="category"></div>
              </div>
              <div className="allcategory4">
                <div className="badge">
                  <MdMore className="iconbadge" />
                </div>
                <div className="categorydetail">
                  <img src={image14} alt="" />

                  <div>
                    <h3>
                      Balloon Fit Jeans
                      <br />
                      $299.00
                    </h3>
                    <p>view details</p>
                  </div>
                </div>

                <div className="category"></div>
              </div>

              <img src={image9} alt="" />

              <div className="divflexy3">
                <div>
                  <p>Quilted Gilet With Hood</p>
                  <h3>$179.00</h3>
                </div>
                <abbr title="View Details">
                  <ImEye />
                </abbr>
              </div>
            </Col>
            <Col lg="4" md="4" sm="12">
              <div className="allcategory5">
                <div className="badge">
                  <MdMore className="iconbadge" />
                </div>
                <div className="categorydetail">
                  <img src={image15} alt="" />

                  <div>
                    <h3>
                      Short-Sleeved White Corset
                      <br />
                      $120.00
                    </h3>
                    <p>view details</p>
                  </div>
                </div>

                <div className="category"></div>
              </div>

              <img src={image10} alt="" />
              <div className="divflexy3">
                <div>
                  <p>Quilted Gilet With Hood</p>
                  <h3>$179.00</h3>
                </div>
                <abbr title="View Details">
                  <ImEye />
                </abbr>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sec6">
        <Container>
          <Row className="rowproduct">
            <Col lg="8" md="8" sm="12">
              <Row className="productsshow">
                <Col lg="4" md="4" sm="12">
                  <img src={image16} alt="" />
                  <div className="productdivv">
                    <SiInstagram />
                  </div>
                </Col>
                <Col lg="4" md="4" sm="12">
                  <img src={image17} alt="" />
                  <div className="productdivv">
                    <SiInstagram />
                  </div>
                </Col>
                <Col lg="4" md="4" sm="12">
                  <img src={image18} alt="" />
                  <div className="productdivv">
                    <SiInstagram />
                  </div>
                </Col>
                <Col lg="4" md="4" sm="12">
                  <img src={image19} alt="" />
                  <div className="productdivv">
                    <SiInstagram />
                  </div>
                </Col>
                <Col lg="4" md="4" sm="12">
                  <img src={image20} alt="" />
                  <div className="productdivv">
                    <SiInstagram />
                  </div>
                </Col>
                <Col lg="4" md="4" sm="12">
                  <img src={image21} alt="" />
                  <div className="productdivv">
                    <SiInstagram />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg="4" md="4" sm="12" className="colproduct">
              <h3>Vintage Style</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer
              </p>
              <div className="flexyyyyy">
                <div></div> <h5>#Lusiontheme</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
