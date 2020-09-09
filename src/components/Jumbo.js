import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, } from
"mdbreact";
import { Jumbotron} from "react-bootstrap";

const Jumbo = () => {
  return (
    <Jumbotron fluid>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
          <img
              className="d-block w-100"
              src="https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/39/21/f62be1684f9082b59898bdf53034/1574342291004_thecabinguard_jumbotron_01resized_16x9Images.jpg"
              alt="Second slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Light mask</h3>
            <p>First text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://www.tentangsinopsis.com/wp-content/uploads/2020/08/Daftar-Lengkap-Nama-Pemain-Bad-Genius-The-Series-Beserta-Biodatanya.jpg"
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Strong mask</h3>
            <p>Second text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://www.sonoma.edu/sites/www/files/field/image/avengers.jpg"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Slight Mast</h3>
            <p>Third text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </Jumbotron>
  );
}

export default Jumbo;