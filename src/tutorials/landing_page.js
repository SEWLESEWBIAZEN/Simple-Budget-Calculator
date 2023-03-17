import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const LandingPage = () =>
{
    return (
        <div>
            <Navbar bg="light" expand="lg" className="rounded m-2 navbar1">
                <Container>
                    <Navbar.Brand href="#">
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#" >Home</Nav.Link>
                            <Nav.Link href="#">About</Nav.Link>
                            <Nav.Link href="#">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#" className="text-light">Sign up</Nav.Link>
                            <Nav.Link href="#" className="text-light">Log in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <nav class="searchbar ">
                    <div class="container-fluid">
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>

            </Container>
            <footer>
                <Container>

                </Container>
            </footer>
        </div>
    );
}

export default LandingPage;
