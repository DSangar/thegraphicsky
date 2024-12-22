import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../Assetes/Images/carimg1.jpg";
import Container from "react-bootstrap/esm/Container";
import Cards from "./Cards";
import cr1 from "../Assetes/Images/photofr1.webp"
import cr2 from "../Assetes/Images/photofr4.png"
import cr3 from "../Assetes/Images/photofr3.jpg"

const Home = () => {
  return (
    <div>
      <Carousel id="car-img">
        <Carousel.Item>
          <img
            src={cr1}
            text="First slide"
            width="1200px"
            height="450px"
          />
          <Carousel.Caption>
            <h3>Frame 1</h3>
            <p>Bed Room Wall Frames steel, Wood  and PVC</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={cr2}
            text="Second slide"
            width="1200px"
            height="450px"
          />
          <Carousel.Caption>
            <h3>Frame 2</h3>
            <p>Bed Room Wall Frames steel, Wood  and PVC</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={cr3}
            text="Third slide"
            width="1200px"
            height="450px"
          />
          <Carousel.Caption>
            <h3>Frame 3</h3>
            <p>
            Bed Room Wall Frames steel, Wood  and PVC
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <br />

      <Container>
        <Cards/>
      </Container>
    </div>
  );
};

export default Home;
