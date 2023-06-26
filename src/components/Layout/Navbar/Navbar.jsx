import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Navbar/Navbar.css';
import logoPng from '../../../assets/nurture_svg_logo.svg';

// import react icons here
import { FiMenu } from 'react-icons/fi';

//  import bootsrap components here
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavBar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const closeMenu = () => setShow(false)

    return (
        <div className="nav-container shadow" fixed='top'>
            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} className=" mb-2" >
                    <Container fluid>
                        <Navbar.Brand>
                            <div className='title-logo'>
                                <NavLink to="/">
                                    <img src={logoPng} alt="NurtureReach" />
                                </NavLink>
                            </div>
                        </Navbar.Brand>
                        <FiMenu
                            onClick={handleShow}
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                            style={{ color: "#fff", width: "30px", height: "50px", cursor: "pointer" }}
                            className='menu-bar'
                        />
                        <Navbar.Offcanvas
                            show={show} onHide={handleClose}
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            style={{ width: "80%", backgroundColor: "#006588", }}
                        >
                            <Offcanvas.Header closeButton closeVariant='white'>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    {/* Empty  */}
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-0 gap-2">
                                    <li className="nav-item nav-item-border">
                                        <NavLink
                                            to="/"
                                            style={{ color: "#fff" }}
                                            className="nav-link"
                                            onClick={() => closeMenu()}
                                            activeclassname="active-link"
                                            exact="true"
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="nav-item nav-item-border">
                                        <NavLink
                                            to="/about-us"
                                            style={{ color: "#fff" }}
                                            className="nav-link"
                                            onClick={() => closeMenu()}
                                            activeclassname="active-link"
                                            exact="true"
                                        >
                                            About Us
                                        </NavLink>
                                    </li>
                                    <li className="nav-item nav-item-border">
                                        <NavLink
                                            to="/covid-19"
                                            style={{ color: "#fff" }}
                                            className="nav-link"
                                            onClick={() => closeMenu()}
                                            activeclassname="active-link"
                                            exact="true"
                                        >
                                            COVID-19

                                        </NavLink>
                                    </li>
                                    <li className="nav-item nav-item-border">
                                        <NavLink
                                            to="/our-impact"
                                            style={{ color: "#fff" }}
                                            className="nav-link"
                                            onClick={() => closeMenu()}
                                            activeclassname="active-link"
                                            exact="true"
                                        >
                                            Impact
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/donate"
                                            style={{
                                                color: "#fff", backgroundColor: "#fcb900e1", borderRadius: "5px",
                                                padding: "0.5rem 1.3rem"
                                            }}
                                            className="nav-link"
                                            onClick={() => closeMenu()}
                                            exact="true"
                                        >
                                            DONATE
                                        </NavLink>
                                    </li>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </div>
    );
};

export default NavBar;