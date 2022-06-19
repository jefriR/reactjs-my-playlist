import React from "react";
import "./index.css";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
} from "react-bootstrap";

const Home = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col sm={5} className="mt-5">
          <img src="images/undraw_compose_music_re_wpiw.svg" />
        </Col>

        <Col sm={7}>
          <h1 className="title">Welcome to my playlist</h1>
          <p className="description">
            Enjoy what i heard in your playlist{" "}
            <span className="italic">-- Jr 2022</span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
