import { Navbar, Row, Col, Image, Container } from 'react-bootstrap';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';


const NavBar = ({ title }) => {
    return (
        <Container fluid>
            <Navbar id='inicio' expand="lg" style={{
            backgroundColor: '#009ddd',
            minWidth: '100vh',
            minHeight: '15vh',
        }}>
            <Row className="w-100">
                <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-start">
                    <Navbar.Brand>
                        {/* <Image src={Mps} alt="Logo" style={{ maxHeight: '15vh', marginRight: '10px'}} /> */}
                    </Navbar.Brand>
                </Col>
                <Col xs={12} md={4} className="d-flex justify-content-center align-items-center">
                    <span className='fira-sans-condensed-black' style={{ fontSize: '35px', color: '#2b2928'}}>
                        {title}
                    </span>
                </Col>
            </Row>
        </Navbar>
    </Container>
        
    );
};

export default NavBar;