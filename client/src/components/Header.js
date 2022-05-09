import React from 'react'
import {Navbar,Nav,Container} from'react-bootstrap'
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg">
  <Container>
    <Navbar.Brand href="#home">myShop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="/cart">Cart</Nav.Link>
        <Nav.Link href="/signin">Signin</Nav.Link>
      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
}

export default Header