import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import {
  Button,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Alert,
} from "react-bootstrap";

import Home from "./pages/Home";
import Playing from "./pages/Playing";
import Playlist from "./pages/Playlist";
import Testing from "./pages/Testing";

function App() {
  return (
    <Router>
      <Navbar variant="dark" expand="lg" className="primary-background">
        <Container>
          <Navbar.Brand href="#home">My-Playlist</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/playing">
                <Nav.Link className="me-auto">Playing</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/playlist">
                <Nav.Link>Playlist</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/testing">
                <Nav.Link>testing</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playing" element={<Playing />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </Router>
  );
}

export default App;
