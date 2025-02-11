import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import { GITHUB_URL, LINKEDIN_URL, GOOGLE_DOCS_URL } from '../../constants';

const Brand = () => (
    <Navbar.Brand className="p-2" href="/">BENMATH.COM</Navbar.Brand>
);

const NavLinks = ({ handleNavLinkClick }) => (
    <Nav className="justify-content flex-grow-1 pe-3">
        <Nav.Link as={Link} to="/blog" onClick={handleNavLinkClick}>Blog</Nav.Link>
        {/* <Nav.Link as={Link} to="/portfolio" onClick={handleNavLinkClick}>Portfolio</Nav.Link> */}
        <Nav.Link as={Link} to="/contact" onClick={handleNavLinkClick}>Contact</Nav.Link>
    </Nav>
);

const SocialLinks = ({ handleNavLinkClick }) => (
    <Nav className="justify-content-end flex-grow-1 pe-3">
        <Nav.Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer" onClick={handleNavLinkClick}>
            <FaGithub className="rotate-icon" size={20} />
        </Nav.Link>
        <Nav.Link href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" onClick={handleNavLinkClick}>
            <FaLinkedin className="rotate-icon" size={20} />
        </Nav.Link>
        <Nav.Link href={GOOGLE_DOCS_URL} target="_blank" rel="noopener noreferrer" onClick={handleNavLinkClick}>
            <FaFilePdf className="rotate-icon" size={20} />
        </Nav.Link>
    </Nav>
);

const CustomOffcanvas = ({ handleNavLinkClick }) => (
    <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">BENMATH.COM</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <NavLinks handleNavLinkClick={handleNavLinkClick} />
            <SocialLinks handleNavLinkClick={handleNavLinkClick} />
        </Offcanvas.Body>
    </Navbar.Offcanvas>
);

const CustomNavBar = () => {
    const handleNavLinkClick = () => {
        const offcanvasElement = document.querySelector('.offcanvas');
        if (offcanvasElement) {
            const bsOffcanvas = new window.bootstrap.Offcanvas(offcanvasElement);
            bsOffcanvas.hide();
        }
    };

    return (
        <Navbar expand="lg" className="mb-0 pb-0 border border-1" bg="dark">
            <Brand />
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <CustomOffcanvas handleNavLinkClick={handleNavLinkClick} />
        </Navbar>
    );
};

export default CustomNavBar;