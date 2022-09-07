import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="sticky">
      <Navbar collapseOnSelect expand="lg" bg="light" text="dark">
        <Container>
          <div className="head">
            {/* <Navbar.Brand href="#">datapine</Navbar.Brand> */}
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav variant="dark">
              <Nav.Link href="#product">PRODUCT</Nav.Link>
              <Nav.Link href="#solutions">SOLUTIONS</Nav.Link>
              <Nav.Link href="#services">SERVICES</Nav.Link>
              <Nav.Link href="#learn">LEARN</Nav.Link>
              <Nav.Link href="#company">COMPANY</Nav.Link>
              <Nav.Link href="#">EN</Nav.Link>
              <Button variant="success">Trial</Button>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
