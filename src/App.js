
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Route, Routes } from "react-router-dom";
import './App.css';
import Apple from './pages/Apple'
import About from './pages/About'
import Banana from './pages/Banana'
import Home from './pages/Home';
import Contact from './pages/contact';
import {BrowserRouter as Router} from 'react-router-dom'




function App() {
  return (
    <div className="App">
      {/*
      Navbar is used to build a navigation bar to direct user to another pages
      Navbar have to use with router from react-router-dom
      */}
      
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="Apple">Apple</Nav.Link>
            <Nav.Link href="Banana">Banana</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="About">About</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="Contact">Contact</NavDropdown.Item>
          </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      
      {/* 
      Routers redirect user to another pages
      in this case is directs base on the path and direct to a components
      */}
      <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Apple" element={<Apple />} />
                <Route exact path="/Banana" element={<Banana />} />
                <Route exact path="/About" element={<About />} />
                <Route exact path="/Contact" element={<Contact />} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;
