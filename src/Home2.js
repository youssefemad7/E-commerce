import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap';
import './index.css';
import image4 from '../src/images/cate-df-3_360x.jpg';


import Footer from "./Footer";
export default class Home extends Component {
    state = {
        activeSlide: 0,
        activeSlide2: 0
    };
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,

            speed: 1000,
            autoplaySpeed: 4000,
            cssEase: "linear",
            slidesToShow: 1,
            slidesToScroll: 1,
            beforeChange: (current, next) => this.setState({ activeSlide: next }),
            afterChange: current => this.setState({ activeSlide2: current })
        };


        var settings2 = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            slidesToShow: 4,
            autoplay: true,

            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <section className="fslider">

                    <p className="pppslide">
                        {this.state.activeSlide + 1}/2
                    </p>
                    <Slider {...settings} >

                        <div className="firstslide">
                            <h3 className="slideh3">The White <br /> Collection</h3>
                            <img src={image4} alt="" />
                        </div>
                        <div className="secondslide">
                            <h3 className="slideh3">The Black <br /> Collection</h3>

                            <img src={image4} alt="" />

                        </div>

                    </Slider>
                </section>
                <section>
                    <Container>
                        <Row>
                            <Col lg="3" md="6" sm="12">
                                <div >
                                    <div className="divsec2">
                                    <img src={image4} alt="" />
                                    </div>

                                    <div className="flexy"><h3>Clothing</h3><p> 5 items</p></div>
                                </div>

                            </Col>
                            <Col lg="3" md="6" sm="12">
                                <div >
                                    <div className="divsec2">

                                    <img src={image4} alt="" />
                                        </div>

                                    <div className="flexy"><h3>Bag Brand</h3><p> 20 items</p></div>
                                </div>
                            </Col>
                            <Col lg="3" md="6" sm="12">
                                <div >
                                    <div className="divsec2">

                                    <img src={image4} alt="" />
                                    </div>

                                    <div className="flexy"><h3>Accessories</h3><p> 6 items</p></div>
                                </div>
                            </Col>
                            <Col lg="3" md="6" sm="12">
                                <div >
                                    <div className="divsec2">

                                    <img src={image4} alt="" />
                                    </div>

                                    <div className="flexy"><h3>Shoes</h3><p> 8 items</p></div>
                                </div>
                            </Col>

                        </Row>



                    </Container>



                </section>
                <section className="sec3">
                    
                    <Container>

                        <div className="flexy2">
                            <h3>Best Selling</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting MERRY</p>
                        </div>

                                <Slider {...settings2}>
                                    <div>
                                        <div>
                                            <div className="divsec3">
                                            <img src={image4} alt="" />

                                            </div>

                                        </div>
                                        <div className="divflexy3">
                                            <div>
                                                <p>Quilted Gilet With Hood</p>
                                                <h3>$179.00</h3>

                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <div className="divsec3">
                                        <img src={image4} alt="" />
                                        </div>
                                        <div className="divflexy3">
                                            <div>
                                                <p>Quilted Gilet With Hood</p>
                                                <h3>$179.00</h3>

                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <div className="divsec3">
                                        <img src={image4} alt="" />
                                        </div>
                                        <div className="divflexy3">
                                            <div>
                                                <p>Quilted Gilet With Hood</p>
                                                <h3>$179.00</h3>

                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <div className="divsec3">
                                        <img src={image4} alt="" />
                                        </div>
                                        <div className="divflexy3">
                                            <div>
                                                <p>Quilted Gilet With Hood</p>
                                                <h3>$179.00</h3>

                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <div className="divsec3">
                                        <img src={image4} alt="" />
                                        </div>
                                        <div className="divflexy3">
                                            <div>
                                                <p>Quilted Gilet With Hood</p>
                                                <h3>$179.00</h3>

                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <div className="divsec3">
                                        <img src={image4} alt="" />
                                        </div>
                                        <div className="divflexy3">
                                            <div>
                                                <p>Quilted Gilet With Hood</p>
                                                <h3>$179.00</h3>

                                            </div>

                                        </div>
                                    </div>

                                </Slider>
                        




               
                    </Container>
<button className="divbuttonsec3">
    All Products
</button>


                </section>
                <section className="sec4">
                    <Container>
                        <Row className="justify-content-between">
                            <Col lg="8" md="8" sm="12" className="div1sec4">
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
                                    <button>Shop Now</button>

                                </div>
                            </Col>
                            <Col lg="3" md="3" sm="12" className="div2sec4">
                                <div className="div11sec4">
                                    <h5>Your Next</h5>
                                    <h4>Purchase</h4>
                                    <div className="flexywrite">
                                        <h3>10</h3>
                                        <p> % Off</p>
                                    </div>
                                    <button>Shop Now</button>

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


                                    </div>
                                    <div className="categorydetail">
                                        <img src="images/6350552300_1_1_1-1_80x.jpg" alt="" />

                                        <div>
                                            <h3>
                                                Anorak Jacket
                                                <br />
                                                $22.00
                                            </h3>
                                            <p>view details</p>
                                        </div>
                                    </div>

                                    <div className="category">
                                    </div>
                                </div>
                                <div className="allcategory2">

                                    <div className="badge">


                                    </div>
                                    <div className="categorydetail">
                                        <img src="images/0150220428_1_1_3_80x.jpg" alt="" />

                                        <div>
                                            <h3>
                                                Wide-Leg Jeans
                                                <br />
                                                $98.00
                                            </h3>
                                            <p>view details</p>
                                        </div>
                                    </div>

                                    <div className="category">
                                    </div>
                                </div>

                                <img src={image4} alt="" />

                                <div className="divflexy3">
                                    <div>
                                        <p>Quilted Gilet With Hood</p>
                                        <h3>$179.00</h3>

                                    </div>

                                </div>


                            </Col>
                            <Col lg="4" md="4" sm="12">
                                <div className="allcategory3">

                                    <div className="badge">


                                    </div>
                                    <div className="categorydetail">
                                    <img src={image4} alt="" />

                                        <div>
                                            <h3>
                                                Quilted Bomber Jacket
                                                <br />
                                                $99.00
                                            </h3>
                                            <p>view details</p>
                                        </div>
                                    </div>

                                    <div className="category">
                                    </div>
                                </div>
                                <div className="allcategory4">

                                    <div className="badge">


                                    </div>
                                    <div className="categorydetail">
                                    <img src={image4} alt="" />

                                        <div>
                                            <h3>
                                                Balloon Fit Jeans
                                                <br />
                                                $299.00
                                            </h3>
                                            <p>view details</p>
                                        </div>
                                    </div>

                                    <div className="category">
                                    </div>
                                </div>

                                <img src={image4} alt="" />

                                <div className="divflexy3">
                                    <div>
                                        <p>Quilted Gilet With Hood</p>
                                        <h3>$179.00</h3>

                                    </div>

                                </div>
                            </Col>
                            <Col lg="4" md="4" sm="12">
                                <div className="allcategory5">

                                    <div className="badge">


                                    </div>
                                    <div className="categorydetail">
                                    <img src={image4} alt="" />

                                        <div>
                                            <h3>
                                                Short-Sleeved White Corset
                                                <br />
                                                $120.00

                                            </h3>
                                            <p>view details</p>
                                        </div>
                                    </div>

                                    <div className="category">
                                    </div>
                                </div>

                                <img src={image4} alt="" />
                                <div className="divflexy3">
                                    <div>
                                        <p>Quilted Gilet With Hood</p>
                                        <h3>$179.00</h3>

                                    </div>

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
                                    <img src={image4} alt="" />
                                        <div className="productdivv">


                                        </div>
                                    </Col>
                                    <Col lg="4" md="4" sm="12">
                                    <img src={image4} alt="" />
                                        <div className="productdivv">


                                        </div>

                                    </Col>
                                    <Col lg="4" md="4" sm="12">
                                    <img src={image4} alt="" />
                                        <div className="productdivv">


                                        </div>

                                    </Col>
                                    <Col lg="4" md="4" sm="12">
                                    <img src={image4} alt="" />
                                        <div className="productdivv">


                                        </div>

                                    </Col>
                                    <Col lg="4" md="4" sm="12">
                                    <img src={image4} alt="" />
                                        <div className="productdivv">


                                        </div>

                                    </Col>
                                    <Col lg="4" md="4" sm="12">
                                    <img src={image4} alt="" />
                                        <div className="productdivv">


                                        </div>

                                    </Col>
                                </Row>

                            </Col>
                            <Col lg="4" md="4" sm="12" className="colproduct">
                                <h3>
                                    Vintage Style
                                </h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                </p>
                                <div className="flexyyyyy"><div></div>  <h5>#Lusiontheme</h5></div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Footer />
            </div>
        );
    }
}