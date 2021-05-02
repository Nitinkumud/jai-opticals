import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
import Media from "react-bootstrap/Media";
import Carousel from "react-bootstrap/Carousel";

function App() {
  return (
    <div className="App">
      <Media>
        <img
          width={140}
          className="logo"
          height={60}
          src={process.env.PUBLIC_URL + "/logo3.png"}
          alt="Jai Opticals"
        />
        <img
          width={200}
          className="logo"
          height={60}
          src={process.env.PUBLIC_URL + "/jai.png"}
          alt="Jai Opticals"
        />
      </Media>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Jai Opticals</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Eyeglasses" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Men</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Women </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Kid </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#computer">Computer Glasses</Nav.Link>
            <Nav.Link href="#reading">Reading Glasses</Nav.Link>
            <Nav.Link href="#reading">Sun Glasses</Nav.Link>
            <Nav.Link href="#reading">Contact Lenses</Nav.Link>
            <Nav.Link href="#reading">Helmet</Nav.Link>
            <Nav.Link href="#reading">Locks</Nav.Link>
            <Nav.Link href="#reading">Accessories</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    <h3>We are serving in lock down Call- 8440800800</h3>
      <Carousel fade>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/image1.jpg"}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/image2.jpg"}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/image3.jpg"}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
