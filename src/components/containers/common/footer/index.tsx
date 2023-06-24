import './style.scss';
import { faFacebook, faFacebookF, faInstagram, faLinkedin, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCar, faGlobeAmericas, faHotel, faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className="bg-dark pt-5">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-3">
                        <a href="index.html">
                            <img className="h-40px" src={require("@images/logo-light.svg").default} alt="logo"/>
                        </a>
                        <p className="my-3 text-muted">Departure defective arranging rapturous did believe him all had supported.</p>
                        <p className="mb-2"><a href="#" className="text-muted text-primary-hover"><i className="bi bi-telephone me-2"></i>+1234 568 963</a> </p>
                        <p className="mb-0"><a href="#" className="text-muted text-primary-hover"><i className="bi bi-envelope me-2"></i>example@gmail.com</a></p>
                    </div>

                    <div className="col-lg-8 ms-auto">
                        <div className="row g-4">
                            <div className="col-6 col-md-3">
                                <h5 className="text-white mb-2 mb-md-4">Page</h5>
                                <ul className="nav flex-column text-primary-hover">
                                    <li className="nav-item"><a className="nav-link text-muted" href="#">About us</a></li>
                                    <li className="nav-item"><a className="nav-link text-muted" href="#">Contact us</a></li>
                                    <li className="nav-item"><a className="nav-link text-muted" href="#">News and Blog</a></li>
                                    <li className="nav-item"><a className="nav-link text-muted" href="#">Meet a Team</a></li>
                                </ul>
                            </div>

                            <div className="col-6 col-md-3">
                                <h5 className="text-white mb-2 mb-md-4">Link</h5>
                                <ul className="nav flex-column text-primary-hover">
                                    <li className="nav-item"><a className="nav-link text-muted" href="#">Sign up</a></li>
                                    <li className="nav-item"><a className="nav-link text-muted" href="#">Sign in</a></li>
                                    <li className="nav-item"><a className="nav-link text-muted" href="#">Privacy Policy</a></li>
                                    <li className="nav-item"><a className="nav-link text-muted" href="#">Terms</a></li>
                                    <li className="nav-item"><a className="nav-link text-muted" href="#">Cookie</a></li>
                                    <li className="nav-item"><a className="nav-link text-muted" href="#">Support</a></li>
                                </ul>
                            </div>
                                            
                            <div className="col-6 col-md-3">
                                <h5 className="text-white mb-2 mb-md-4">Global Site</h5>
                                <ul className="nav flex-column text-primary-hover">
                                    <li className="nav-item"><a className="nav-link text-muted" href="#">India</a></li>
                                    <li className="nav-item"><a className="nav-link text-muted" href="#">California</a></li>
                                    <li className="nav-item"><a className="nav-link text-muted" href="#">Indonesia</a></li>
                                    <li className="nav-item"><a className="nav-link text-muted" href="#">Canada</a></li>
                                    <li className="nav-item"><a className="nav-link text-muted" href="#">Malaysia</a></li>
                                </ul>
                            </div>

                            <div className="col-6 col-md-3">
                                <h5 className="text-white mb-2 mb-md-4">Booking</h5>
                                <ul className="nav flex-column text-primary-hover">
                                    <li className="nav-item"><a className="nav-link text-muted" href="#"><FontAwesomeIcon icon={faHotel} className='me-2'/>Hotel</a></li>
                                    <li className="nav-item"><a className="nav-link text-muted" href="#"><FontAwesomeIcon icon={faPlane} className='me-2'/>Flight</a></li>
                                    <li className="nav-item"><a className="nav-link text-muted" href="#"><FontAwesomeIcon icon={faGlobeAmericas} className='me-2'/>Tour</a></li>
                                    <li className="nav-item"><a className="nav-link text-muted" href="#"><FontAwesomeIcon icon={faCar} className='me-2'/>Cabs</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row mt-5">
                    <h5 className="mb-2 text-white">Top Links</h5>
                    <ul className="list-inline text-primary-hover lh-lg">
                        <li className="list-inline-item"><a href="#" className="text-muted">Flights</a></li>
                        <li className="list-inline-item"><a href="#" className="text-muted">Hotels</a></li>
                        <li className="list-inline-item"><a href="#" className="text-muted">Tours</a></li>
                        <li className="list-inline-item"><a href="#" className="text-muted">Cabs</a></li>
                        <li className="list-inline-item"><a href="#" className="text-muted">About</a></li>
                        <li className="list-inline-item"><a href="#" className="text-muted">Contact us</a></li>
                        <li className="list-inline-item"><a href="#" className="text-muted">Blogs</a></li>
                        <li className="list-inline-item"><a href="#" className="text-muted">Services</a></li>
                        <li className="list-inline-item"><a href="#" className="text-muted">Detail page</a></li>
                        <li className="list-inline-item"><a href="#" className="text-muted">Services</a></li>
                        <li className="list-inline-item"><a href="#" className="text-muted">Policy</a></li>
                        <li className="list-inline-item"><a href="#" className="text-muted">Testimonials</a></li>
                        <li className="list-inline-item"><a href="#" className="text-muted">Newsletters</a></li>
                        <li className="list-inline-item"><a href="#" className="text-muted">Podcasts</a></li>
                        <li className="list-inline-item"><a href="#" className="text-muted">Protests</a></li>
                        <li className="list-inline-item"><a href="#" className="text-muted">NewsCyber</a></li>
                        <li className="list-inline-item"><a href="#" className="text-muted">Education</a></li>
                        <li className="list-inline-item"><a href="#" className="text-muted">Sports</a></li>
                        <li className="list-inline-item"><a href="#" className="text-muted">Tech and Auto</a></li>
                        <li className="list-inline-item"><a href="#" className="text-muted">Opinion</a></li>
                        <li className="list-inline-item"><a href="#" className="text-muted">Share Market</a></li>
                    </ul>
                </div>

                <div className="row g-4 justify-content-between mt-0 mt-md-2">

                    <div className="col-sm-7 col-md-6 col-lg-4">
                        <h5 className="text-white mb-2">Payment &amp; Security</h5>
                        <ul className="list-inline mb-0 mt-3">
                            <li className="list-inline-item"> <a href="#"><img src={require("@images/element/paypal.svg").default} className="h-30px" alt=""/></a></li>
                            <li className="list-inline-item"> <a href="#"><img src={require("@images/element/visa.svg").default} className="h-30px" alt=""/></a></li>
                            <li className="list-inline-item"> <a href="#"><img src={require("@images/element/mastercard.svg").default} className="h-30px" alt=""/></a></li>
                            <li className="list-inline-item"> <a href="#"><img src={require("@images/element/expresscard.svg").default} className="h-30px" alt=""/></a></li>
                        </ul>
                    </div>

                    <div className="col-sm-5 col-md-6 col-lg-3 text-sm-end">
                        <h5 className="text-white mb-2">Follow us on</h5>
                        <ul className="list-inline mb-0 mt-3">
                            <li className="list-inline-item"> 
                                <a className="btn btn-sm px-2 bg-facebook mb-0" href="#" style={{width:33}}>
                                    <FontAwesomeIcon icon={faFacebookF} style={{width:14, height:14}} />
                                </a>
                            </li>
                            <li className="list-inline-item"> 
                                <a className="btn btn-sm shadow px-2 bg-instagram mb-0" href="#" style={{width:33}}>
                                    <FontAwesomeIcon icon={faInstagram} style={{width:14, height:14}}/>
                                </a>
                            </li>
                            <li className="list-inline-item" style={{marginRight:'0.9rem'}}>
                                <a className="btn btn-sm shadow px-2 bg-twitter mb-0" href="#" style={{width:33}}>
                                    <FontAwesomeIcon icon={faTwitter} style={{width:14, height:14}} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn btn-sm shadow px-2 bg-linkedin mb-0" href="#" style={{width:33}}>
                                    <FontAwesomeIcon icon={faLinkedinIn} style={{width:14, height:14}} />
                                </a>
                            </li>
                        </ul>	
                    </div>
                </div>

                <hr className="mt-4 mb-0"/>

                <div className="row">
                    <div className="container">
                        <div className="d-lg-flex justify-content-between align-items-center py-3 text-center text-lg-start">
                            <div className="text-muted text-primary-hover"> Copyrights ©2023 Booking. Build by <a href="https://www.webestica.com/" className="text-muted">Webestica</a>. </div>
                            <div className="nav mt-2 mt-lg-0">
                                <ul className="list-inline text-primary-hover mx-auto mb-0">
                                    <li className="list-inline-item me-0"><a className="nav-link py-1 text-muted" href="#">Privacy policy</a></li>
                                    <li className="list-inline-item me-0"><a className="nav-link py-1 text-muted" href="#">Terms and conditions</a></li>
                                    <li className="list-inline-item me-0"><a className="nav-link py-1 text-muted pe-0" href="#">Refund policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;