import './App.css';
import Swiper from './Swiper';
import Swiper2 from './Swiper2';

import image4 from '../src/images/cate-df-3_360x.jpg';
import image5 from '../src/images/cate-df-2_360x.jpg';
import image6 from '../src/images/cate-df-1_360x.jpg';
import image7 from '../src/images/cate-df-4_360x.jpg';
import image8 from '../src/images/banner-2.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer';

function Home() {
  return (
    < >
    
        <Swiper className='sec1' />
        <Container  >
            <Row className='images' >
        <Col lg={3} sm={6}>
            <div>
            <div className='divhid'>
                <img  src={image4} className='img7' />

                </div>            <h3  className='tex ms-3 mt-3'>Clothing <span className='ms-5'> 5 items</span></h3>
            </div>
        </Col>
        <Col lg={3} sm={6}>
            <div>
            <div className='divhid'>
                <img  src={image5} className='img7' />

                </div>            <h3 className='tex  mt-3'>Bag Brand <span className='ms-5'> 20 items</span></h3>
            </div>
        </Col>
        <Col lg={3} sm={6}>
            <div>
            <div className='divhid'>
                <img  src={image6} className='img7' />

                </div>            <h3 className='tex  mt-3' >Accessories <span className='ms-5'> 6 items</span></h3>
            </div>
        </Col>
        <Col lg={3} sm={6}>
            <div>
                <div className='divhid'>
                <img  src={image7} className='img7' />

                </div>
            <h3 className='tex ms-5 mt-3'>Shoes <span className='ms-5'> 8 items</span></h3>
            </div>
        </Col>

        

            </Row>
        </Container>
        <section className='sec3'>
        <Container >
    <h1>Best Silling </h1>
    <Swiper2 />

    </Container>
        </section>
        <section className='sec4'>
    <Container>
        <Row>
            <Col lg={8} sm={6} md={6}>
                <div className='sec4div1'>
                <img src={image8} className='img8' />
                <h1>MERRY
                    <br></br>
              <span>Christmas</span>  
                <br></br>
                <span>40</span>  

                
                %

                Off</h1>
                <button class="c-button c-button--gooey one"> SHOP NOW
  <div class="c-button__blobs">
  <div></div>
  <div></div>
  <div></div>
  </div>
</button>
                </div>  </Col>
            <Col lg={4} sm={6} md={6}>
                <div className='sec4div2'>
                    <h1>
                    Your Next
                    <br></br>
             <span>Purchase</span>   
                <br></br>
                <span>10</span>
                
                % Off
                    </h1>
               
                </div>
                <button class="c-button c-button--gooey"> SHOP NOW
  <div class="c-button__blobs">
  <div></div>
  <div></div>
  <div></div>
  </div>
</button>            </Col>

        </Row>
    </Container>
        </section>
<Footer />   

    </>
  );
}

export default Home;