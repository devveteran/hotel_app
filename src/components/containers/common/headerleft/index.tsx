import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCar, faEllipsis, faGlobe, faGlobeAmericas, faHotel, faPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavDropdown, Container, Navbar, Nav } from "react-bootstrap";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import '@fonts/fa-brands-400.ttf';
import { MouseEvent, useRef, useState } from 'react';
import "react-bootstrap-submenu/dist/index.css";
import Notifications from '@organisms/header/notifications';


const HeaderLeft = () => {
    const [showUserMenu, setShowUserMenu] = useState<boolean>(false);
    
    const handleMenuOpen = (e: MouseEvent<HTMLElement>) => {
        let target = e.target;
    }
    const toggleShowUserMenu = () => {
        setShowUserMenu(!showUserMenu);
    }

    // document.getElementsByClassName('nav-link')
    return (
        <div className={'headerleft'}> 
            <Navbar expand="lg" style={{width:'100%', position:'initial'}}>
                {/* <Container> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" onMouseEnter={handleMenuOpen} >
                            <NavDropdownMenu title="Listings" className='item-listings' renderMenuOnMount={true} id="collasible-nav-dropdown">
                                <DropdownSubmenu href="#action/3.7" title="Hotel">
                                    <NavDropdown.Item href="#action/8.1">Hotel Home</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Hotel Chain</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Hotel Resort</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Hotel Grid</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Hotel List</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Hotel Detail</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Room Detail</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Hotel Booking</NavDropdown.Item>
                                </DropdownSubmenu>
                                <DropdownSubmenu href="#action/3.7" title="Flight"> 
                                    <NavDropdown.Item href="#action/8.1">Flight Home</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Flight List</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Flight Detail</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Flight Booking</NavDropdown.Item>
                                </DropdownSubmenu>
                                <DropdownSubmenu href="#action/3.7" title="Tour">
                                    <NavDropdown.Item href="#action/8.1">Tour Home</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Tour Grid</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Tour Detail</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Tour Booking</NavDropdown.Item>
                                </DropdownSubmenu>
                                <DropdownSubmenu href="#action/3.7" title="Cab">
                                    <NavDropdown.Item href="#action/8.1">Cab Home</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Cab List</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Cab Detail</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Cab Booking</NavDropdown.Item>
                                </DropdownSubmenu>
                                <DropdownSubmenu href="#action/3.7" title="Directory">
                                    <NavDropdown.Item href="#action/8.1">Directory Home</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Directory Detail</NavDropdown.Item>
                                </DropdownSubmenu>
                                <DropdownSubmenu href="#action/3.7" title="Add Listing">
                                    <NavDropdown.Item href="#action/8.1">Join us</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Add Listing</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Add Listing Minimal</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Listing Added</NavDropdown.Item>
                                </DropdownSubmenu>
                                <DropdownSubmenu href="#action/3.7" title="Hero">
                                    <NavDropdown.Item href="#action/8.1">Hero Inline Form</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Hero Multiple Search</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Hero Image Gallery</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Hero Split</NavDropdown.Item>
                                </DropdownSubmenu>
                                <NavDropdown.Item href="#action/3.1">Book Confirmed</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Compare Listing</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Offer Detail</NavDropdown.Item>
                            </NavDropdownMenu>
                            <NavDropdownMenu title="Pages" className='item-pages' renderMenuOnMount={true}>
                                <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Contact</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Contact 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Our Team</NavDropdown.Item>
                                <DropdownSubmenu href="#action/3.7" title="Authentication">
                                    <NavDropdown.Item href="#action/8.1">Sign In</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Sign Up</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Forgot Password</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Two factor authentication</NavDropdown.Item>
                                </DropdownSubmenu>
                                <DropdownSubmenu href="#action/3.7" title="Blog">
                                    <NavDropdown.Item href="#action/8.1">Blog</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Blog Detail</NavDropdown.Item>
                                </DropdownSubmenu>
                                <DropdownSubmenu href="#action/3.7" title="Help">
                                    <NavDropdown.Item href="#action/8.1">Help Center</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Help Detail</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Privacy Policy</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Terms of Service</NavDropdown.Item>
                                </DropdownSubmenu>
                                <NavDropdown.Item href="#action/3.1">Pricing</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">FAQs</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Error 404</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Coming Soon</NavDropdown.Item>
                            </NavDropdownMenu>
                            <NavDropdownMenu title="Accounts" className='item-accounts' renderMenuOnMount={true}>
                                <DropdownSubmenu href="#action/3.7" title="User Profile">
                                    <NavDropdown.Item href="#action/8.1">My Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">My Bookings</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Travelers</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Payment Details</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Wishlist</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Settings</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Delete Profile</NavDropdown.Item>
                                </DropdownSubmenu>
                                <DropdownSubmenu href="#action/3.7" title="Agent Dashboard">
                                    <NavDropdown.Item href="#action/8.1">Dashboard</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Listings</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Bookings</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Activities</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Earnings</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Reviews</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/8.1">Settings</NavDropdown.Item>
                                </DropdownSubmenu>
                                <NavDropdown.Item href="#action/3.1">Master Admin</NavDropdown.Item>
                            </NavDropdownMenu>
                            <NavDropdownMenu title="" className='item-custom' renderMenuOnMount={true}>
                                <NavDropdown.Item href="#action/3.1" className='menu-icon-item' id='custom-support'>Support</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1" className='menu-icon-item' id='custom-doc'>Documentation</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1" className='menu-icon-item' id='custom-rtl'>RTL Demo</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1" className='menu-icon-item' id='custom-buy'>Buy Booking!</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1" className='menu-icon-item' id='custom-comp'>Components</NavDropdown.Item>
                            </NavDropdownMenu>
                        </Nav>
                    </Navbar.Collapse>
                {/* </Container> */}
            </Navbar>            
            <Navbar expand="lg" style={{width:'100%'}}>
                <Navbar.Toggle aria-controls="basic-navbar-nav-right" />
                <Navbar.Collapse id="basic-navbar-nav-right" style={{justifyContent:'flex-end'}}>
                    <Nav>
                        <NavDropdown.Item href="#action/3.1" className='menu-icon-fa nav-link' id='nav-item-hotel'>Hotel</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1" className='menu-icon-fa nav-link' id='nav-item-flight'>Flight</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1" className='menu-icon-fa nav-link' id='nav-item-tour'>Tour</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1" className='menu-icon-fa nav-link' id='nav-item-cab'>Cab</NavDropdown.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Navbar expand="lg" style={{position:'initial'}} className='ms-md-3'>
                <Navbar.Toggle aria-controls="basic-navbar-notification" />
                <Navbar.Collapse id="basic-navbar-notification" aria-expanded={true}>
                    <Nav className="me-auto" style={{position:'relative'}}>
                        <NavDropdownMenu title="" className='item-notification' renderMenuOnMount={true} id="nav-notification">
                            <Notifications />
                        </NavDropdownMenu>
                        <span className="notif-badge animation-blink"></span>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Navbar expand="lg" className='ms-3' style={{position:'initial'}}>
                <Navbar.Toggle aria-controls="basic-navbar-user" />
                <Navbar.Collapse id="basic-navbar-user">
                    <Nav className="me-auto" style={{position:'relative'}}>
                        <img src={require('@images/avatar-1.jpg')} className="avatar-img rounded-2 user-avatar"/>
                        <NavDropdownMenu title="" className={`item-user`} renderMenuOnMount={true} id="nav-profile">
                            <div className='px-3 mb-3'>
                                <div className="d-flex align-items-center">
                                    <div className="avatar me-3">
                                        <img className="avatar-img rounded-circle shadow" src={require('@images/avatar-1.jpg')} alt="avatar"/>
                                    </div>
                                    <div>
                                        <a className="h6 mt-2 mt-sm-0" href="#">Lori Ferguson</a>
                                        <p className="small m-0">example@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="dropdown-divider"/>
                            <NavDropdown.Item href="#action/8.1" className='menu-icon-item' id='navmenu-user-booking'>My Bookings</NavDropdown.Item>
                            <NavDropdown.Item href="#action/8.1" className='menu-icon-item' id='navmenu-user-wishlist'>My Wishlist</NavDropdown.Item>
                            <NavDropdown.Item href="#action/8.1" className='menu-icon-item' id='navmenu-user-settings'>Settings</NavDropdown.Item>
                            <NavDropdown.Item href="#action/8.1" className='menu-icon-item' id='navmenu-user-help'>Help Center</NavDropdown.Item>
                            <NavDropdown.Item href="#action/8.1" className='menu-icon-item bg-danger-soft-hover' id='navmenu-user-signout'>Sign Out</NavDropdown.Item>
                            <hr className="dropdown-divider"/>
                            <div className="nav-pills-primary-soft theme-icon-active d-flex justify-content-between align-items-center p-2 pb-0">
								<span>Mode:</span>
								<button type="button" className="btn btn-link nav-link text-primary-hover mb-0 p-0" data-bs-theme-value="light" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Light">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sun fa-fw mode-switch" viewBox="0 0 16 16">
										<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
										<use href="#"></use>
									</svg>
								</button>
								<button type="button" className="btn btn-link nav-link text-primary-hover mb-0 p-0 active" data-bs-theme-value="dark" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Dark">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-stars fa-fw mode-switch" viewBox="0 0 16 16">
										<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"></path>
										<path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
										<use href="#"></use>
									</svg>
								</button>
								<button type="button" className="btn btn-link nav-link text-primary-hover mb-0 p-0" data-bs-theme-value="auto" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Auto">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle-half fa-fw mode-switch" viewBox="0 0 16 16">
										<path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"></path>
										<use href="#"></use>
									</svg>
								</button>
							</div>
                        </NavDropdownMenu>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
export default HeaderLeft;