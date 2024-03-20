import { Navbar, Row, Col, Image, Container } from 'react-bootstrap';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';


const NavBar = ({ title }) => {
    return (
        <Navbar expand="lg" style={{ backgroundColor: '#009ddd' }} className="py-lg-3">
            <Container>
                <Row className="w-100">
                    <Col xs={12} className="d-flex justify-content-center align-items-center my-3 my-md-0">
                        <span className='fira-sans-condensed-black' style={{ fontSize: '2.2rem', color: '#2b2928' }}>
                            {title}
                        </span>
                    </Col>
                </Row>
            </Container>
        </Navbar>      
    );
};

export default NavBar;