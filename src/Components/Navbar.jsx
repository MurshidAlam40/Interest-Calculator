import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

function NavbarPage() {
  // State to track if the navbar is open or closed
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  // Hook to navigate between routes
  const navigate = useNavigate();

  // Toggle navbar on button click
  const toggleNavbar = () => {
    // Toggle the isNavbarOpen state (open/close)
    setIsNavbarOpen(!isNavbarOpen); 
  };

  // Close the navbar if clicked outside or when screen size increases
  const handleClickOutside = (e) => {
    if (isNavbarOpen) {
      setIsNavbarOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener to detect clicks outside the navbar and close it
    document.addEventListener("click", handleClickOutside);

    // Add event listener to detect screen resize and close the navbar on large screens
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsNavbarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    // Clean up event listeners when component is unmounted or updated
    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isNavbarOpen]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary" expanded={isNavbarOpen}>
      <Container>
        {/* Toggle button to open/close the navbar */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={(e) => {
            // Prevent triggering the clickOutside function
            e.stopPropagation();
            // Toggle navbar open/close
            toggleNavbar(); 
          }}
        />

        {/* Brand Name with link to the home page */}
        <Navbar.Brand href="/" className="fs-3 fw-bold">
          Interest Calculator
        </Navbar.Brand>

        {/* Navbar collapse (menu items) with left-to-right animation */}
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-left">
          <Nav className="ms-auto">
            {/* Button to navigate to the Bank Loan calculator */}
            <Nav.Item className="me-3">
              <button
                className="btn btn-outline-primary"
                onClick={() => {
                  navigate("/bankloan"); 
                  setIsNavbarOpen(false);
                }}
              >
                Calculate Bank Loan
              </button>
            </Nav.Item>

            {/* Button to navigate to the Months calculator */}
            <Nav.Item>
              <button
                className="btn btn-outline-primary"
                onClick={() => {
                  navigate("/months");
                  setIsNavbarOpen(false);
                }}
              >
                Calculate Months
              </button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPage;
