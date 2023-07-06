import { faHeart, faShareAlt, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './hotelitem.module.scss';
import './hotelitem.scss';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
};
interface PropType {
    viewMode: string;
}
const HotelItemCard = ({viewMode}: PropType) => 
{
    return viewMode === 'list' ? (
                <div className="card shadow p-2 hotel-item-card">
                    <div className="row g-0">
                        <div className="col-md-5 position-relative" >
                            <div className="position-absolute top-0 start-0 z-index-1 m-2">
                                <div className="badge text-bg-danger">30% Off</div>
                            </div>
                            <div className="tiny-slider arrow-round arrow-xs arrow-dark overflow-hidden rounded-2">
                                <div className="tns-outer" id="tns1-ow">
                                    <Carousel
                                        className={`tns-ovh `}
                                        swipeable={true}
                                        draggable={true}
                                        showDots={false}
                                        responsive={responsive}
                                        infinite={true}
                                        autoPlay={false}
                                        keyBoardControl={false}
                                        customTransition="all 0.5s"
                                        centerMode={false}
                                        removeArrowOnDeviceType={["tablet", "mobile"]}
                                        rewind={true}
                                    >
                                        <div className="tns-item tns-slide-cloned rounded-2" aria-hidden="true" tabIndex={-1}>
                                            <img src={require("@images/category/hotel/4by3/03.jpg")} alt="Card image"/>
                                        </div>
                                        <div className="tns-item tns-slide-active rounded-2" id="tns1-item0">
                                            <img src={require("@images/category/hotel/4by3/03.jpg")} alt="Card image"/>
                                        </div>
        
                                        <div className="tns-item rounded-2" id="tns1-item1" aria-hidden="true" tabIndex={-1}>
                                            <img src={require("@images/category/hotel/4by3/03.jpg")} alt="Card image"/>
                                        </div>
        
                                        <div className="tns-item rounded-2" id="tns1-item2" aria-hidden="true" tabIndex={-1}>
                                            <img src={require("@images/category/hotel/4by3/03.jpg")} alt="Card image"/>
                                        </div>
        
                                        <div className="tns-item rounded-2" id="tns1-item3" aria-hidden="true" tabIndex={-1}>
                                            <img src={require("@images/category/hotel/4by3/03.jpg")} alt="Card image"/>
                                        </div>
                                        
                                        <div className="tns-item tns-slide-cloned rounded-2" aria-hidden="true" tabIndex={-1}>
                                            <img src={require("@images/category/hotel/4by3/03.jpg")} alt="Card image"/>
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body py-md-2 d-flex flex-column h-100 position-relative">
                                <div className="d-flex justify-content-between align-items-center">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item me-0 small">
                                            <FontAwesomeIcon icon={faStar} className='text-warning'/>
                                        </li>
                                        <li className="list-inline-item me-0 small">
                                            <FontAwesomeIcon icon={faStar} className='text-warning'/>
                                        </li>
                                        <li className="list-inline-item me-0 small">
                                            <FontAwesomeIcon icon={faStar} className='text-warning'/>
                                        </li>
                                        <li className="list-inline-item me-0 small">
                                            <FontAwesomeIcon icon={faStar} className='text-warning'/>
                                        </li>
                                        <li className="list-inline-item me-0 small">
                                            <FontAwesomeIcon icon={faStarHalfAlt} className='text-warning'/>
                                        </li>
                                    </ul>
        
                                    <ul className="list-inline mb-0 z-index-2">
                                        <li className="list-inline-item">
                                            <a href="#" className="btn btn-sm btn-round btn-light">
                                                {/* <i className="fa-solid fa-fw fa-heart"></i> */}
                                                <FontAwesomeIcon icon={faHeart} fontSize={'0.6rem'}/>
                                            </a>
                                        </li>
                                        <li className="list-inline-item dropdown">
                                            <a href="#" className="btn btn-sm btn-round btn-light" role="button" id="dropdownShare" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fa-solid fa-fw fa-share-alt"></i>
                                                <FontAwesomeIcon icon={faShareAlt} fontSize={'0.6rem'}/>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare">
                                                <li><a className="dropdown-item" href="#"><i className="fab fa-twitter-square me-2"></i>Twitter</a></li>
                                                <li><a className="dropdown-item" href="#"><i className="fab fa-facebook-square me-2"></i>Facebook</a></li>
                                                <li><a className="dropdown-item" href="#"><i className="fab fa-linkedin me-2"></i>LinkedIn</a></li>
                                                <li><a className="dropdown-item" href="#"><i className="fa-solid fa-copy me-2"></i>Copy link</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
        
                                <h5 className="card-title mb-1"><a href="hotel-detail.html">Courtyard by Marriott New York </a></h5>
                                <small><i className="bi bi-geo-alt me-2"></i>5855 W Century Blvd, Los Angeles - 90045</small>
                                <ul className="nav nav-divider mt-3">
                                    <li className="nav-item">Air Conditioning</li>
                                    <li className="nav-item">Wifi</li>
                                    <li className="nav-item">Kitchen</li>
                                    <li className="nav-item"><a href="#" className="mb-0 text-primary">More+</a></li>
                                </ul>
        
                                <ul className="list-group list-group-borderless small mb-0 mt-2">
                                    <li className="list-group-item d-flex text-success p-0">
                                        <i className="bi bi-patch-check-fill me-2"></i>Free Cancellation till 7 Jan 2022
                                    </li>
                                    <li className="list-group-item d-flex text-success p-0">
                                        <i className="bi bi-patch-check-fill me-2"></i>Free Breakfast
                                    </li>
                                </ul>
                                
                                <div className="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
                                    <div className="d-flex align-items-center">
                                        <h5 className="fw-bold mb-0 me-1">$750</h5>
                                        <span className="mb-0 me-2">/day</span>
                                        <span className="text-decoration-line-through mb-0">$1000</span>
                                    </div>
                                    <div className="mt-3 mt-sm-0">
                                        <a href="#" className="btn btn-sm btn-dark mb-0 w-100">Select Room</a>    
                                    </div>                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="card shadow p-2 pb-0 h-100 hotel-item-card">
					<div className="position-absolute top-0 start-0 z-index-1 m-4">
						<div className="badge bg-danger text-white">30% Off</div>
					</div>

					<div className="tiny-slider arrow-round arrow-xs arrow-dark rounded-2 overflow-hidden">
						<div className="tns-outer" id="tns1-ow">
                            <Carousel
                                className={`tns-ovh `}
                                swipeable={true}
                                draggable={true}
                                showDots={false}
                                responsive={responsive}
                                infinite={true}
                                autoPlay={false}
                                keyBoardControl={false}
                                customTransition="all 0.5s"
                                centerMode={false}
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                rewind={true}
                            >
                                <div className="tns-item tns-slide-cloned rounded-2" aria-hidden="true" tabIndex={-1}>
                                    <img src={require("@images/category/hotel/4by3/03.jpg")} alt="Card image"/>
                                </div>
                                <div className="tns-item tns-slide-active rounded-2" id="tns1-item0">
                                    <img src={require("@images/category/hotel/4by3/03.jpg")} alt="Card image"/>
                                </div>

                                <div className="tns-item rounded-2" id="tns1-item1" aria-hidden="true" tabIndex={-1}>
                                    <img src={require("@images/category/hotel/4by3/03.jpg")} alt="Card image"/>
                                </div>

                                <div className="tns-item rounded-2" id="tns1-item2" aria-hidden="true" tabIndex={-1}>
                                    <img src={require("@images/category/hotel/4by3/03.jpg")} alt="Card image"/>
                                </div>

                                <div className="tns-item rounded-2" id="tns1-item3" aria-hidden="true" tabIndex={-1}>
                                    <img src={require("@images/category/hotel/4by3/03.jpg")} alt="Card image"/>
                                </div>
                                <div className="tns-item tns-slide-cloned rounded-2" aria-hidden="true" tabIndex={-1}>
                                    <img src={require("@images/category/hotel/4by3/03.jpg")} alt="Card image"/>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <div className="card-body px-3 pb-0">
                        <div className="d-flex justify-content-between mb-3">
                            <a href="#" className="badge bg-dark text-white"><i className="bi fa-fw bi-star-fill me-2 text-warning"></i>4.5</a>
                            <a href="#" className="h6 mb-0 z-index-2"><i className="bi fa-fw bi-bookmark"></i></a>
                        </div>

                        <h5 className="card-title"><a href="hotel-detail.html">Hotel Baljees Regency</a></h5>

                        <ul className="nav nav-divider mb-2 mb-sm-3">
                            <li className="nav-item">Air Conditioning</li>
                            <li className="nav-item">Wifi</li>
                            <li className="nav-item">Kitchen</li>
                            <li className="nav-item">Pool</li>
                        </ul>
                    </div>
                    <div className="card-footer pt-0">
                        <div className="d-sm-flex justify-content-sm-between align-items-center">
                            <div className="d-flex align-items-center">
                                <h5 className="fw-normal text-success mb-0 me-1">$750</h5>
                                <span className="mb-0 me-2">/day</span>
                                <span className="text-decoration-line-through">$1000</span>
                            </div>
                            <div className="mt-2 mt-sm-0">
                                <a href="hotel-detail.html" className="btn btn-sm btn-primary-soft mb-0 w-100">View Detail<i className="bi bi-arrow-right ms-2"></i></a>    
                            </div>
                        </div>
                    </div>
                </div>
            )
}
export default HotelItemCard;