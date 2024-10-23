import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        // Footer section with a dark background, light text, padding, and margin-top
        <footer className="bg-dark text-light py-4 mt-5">
            <Container>
                <Row>
                    {/* About Us column */}
                    <Col xs={12} md={4} className="mb-3 mb-md-0">
                        <h5>About Us</h5>
                        <p>
                            I am a Software developer helping users calculate EMI, interest, and plan loans efficiently.
                        </p>
                    </Col>

                    {/* Contact Us column */}
                    <Col xs={12} md={4} className="mb-3 mb-md-0">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li>Email: murshidkhan478@gmail.com</li>
                            <li>Phone: +91 8084983960</li>
                            <li>Address: H6, Sector - 63, Noida, India</li>
                        </ul>
                    </Col>

                    {/* Follow Us column with social media links */}
                    <Col xs={12} md={4}>
                        <h5>Follow Us</h5>
                        {/* Responsive flex layout with gap between icons */}
                        <ul className="list-unstyled d-flex gap-3 justify-content-start justify-content-md-center social-icon">
                            <li>
                                <a href="https://github.com/MurshidAlam40" target='_blank' rel="noreferrer" className="text-light">
                                    <i className="fab fa-github fa-2x"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/murshid_alam40" target='_blank' rel="noreferrer" className="text-light">
                                    <i className="fab fa-instagram fa-2x"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/murshid-alam40/" target='_blank' rel="noreferrer" className="text-light">
                                    <i className="fab fa-linkedin fa-2x"></i>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                {/* Horizontal divider */}
                <hr className="my-4" />

                {/* Copyright row */}
                <Row>
                    <Col className="text-center">
                        <p className="mb-0">
                            &copy; {new Date().getFullYear()} Murshid Alam. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
