import { faHeart as faHeartSolid, faShareAlt, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './hotelitem.module.scss';
import './hotelitem.scss';
import { useEffect, useRef, useState } from "react";
import DetailView from "@containers/searchpage/detailview";
import { HotelInfo, MapViewState } from "@constants/types";
import { server } from "@services/axios";
import { evalReviewWord } from "@constants/functions";

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
    hotel: HotelInfo,
    viewMap: (v: MapViewState) => void,
}
const HotelItemCard = ({viewMode, hotel, viewMap}: PropType) => 
{
    const [detailTab, setDetailTab] = useState<string>('');
    const refInfoCard = useRef<any>(null);
    const [sortedNames, setSortedNames] = useState<Array<string>>([]);

    let starRates: Array<any> = [];
    for(let i = 0; i<Math.trunc(hotel.starRate); i++) {
        starRates.push (<li key={`star${i+1}`} className="me-0 ms-0 small">
                        <FontAwesomeIcon icon={faStar} className='text-disabled'/>
                    </li>)
    }
    if (Math.trunc(hotel.starRate) < hotel.starRate) {
        starRates.push (<li key={`starlast`} className="me-0 ms-0 small">
                        <FontAwesomeIcon icon={faStarHalfAlt} className='text-disabled'/>
                    </li>)
    }

    let aryPrices = [hotel.priceBookings, hotel.priceHotels, hotel.priceExpedia];
    let aryNames = ["Booking", "Hotels", "Expedia"];
    let aryUrls = [hotel.urlBookings, hotel.urlHotels, hotel.urlExpedia];

    for(let i = 0; i < aryPrices.length-1; i++)
        for(let j = i + 1; j < aryPrices.length; j++) {
            if (aryPrices[i] > aryPrices[j]) {
                let t = aryPrices[i]; aryPrices[i] = aryPrices[j]; aryPrices[j] = t;
                let s = aryNames[i]; aryNames[i] = aryNames[j]; aryNames[j] = s;
                let u = aryUrls[i]; aryUrls[i] = aryUrls[j]; aryUrls[j] = u;
            }
        }

    const viewDetail = (v: string) => {
        if (detailTab === '' || v !== detailTab || v === "info-all")
            setDetailTab(v);
        else if (detailTab === v)
            hideDetailTab();
    }

    const hideDetailTab = () => {
        setDetailTab('');
        if (refInfoCard.current !== null)
            refInfoCard.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    }

    useEffect(() => {
        // console.log(hotel);
    }, [hotel]);

    return viewMode === 'list' ? (
        <div className="card shadow p-0 hotel-item-card">
            <div className="row g-0 flex-column flex-xxl-row flex-lg-row flex-xl-row flex-md-row pe-2">
                <div className="position-relative hotel-card-image">
                    {/* <div className="position-absolute top-0 start-0 z-index-1 m-2">
                        <div className="badge text-bg-danger">30% Off</div>
                    </div> */}
                    <div ref={refInfoCard} className="tiny-slider arrow-round arrow-xs arrow-dark overflow-hidden">
                        <div className="tns-outer">
                            <Carousel
                                className={`tns-ovh cursor-pointer`}
                                swipeable={true}
                                draggable={false}
                                showDots={false}
                                arrows={false}
                                responsive={responsive}
                                infinite={true}
                                autoPlay={false}
                                keyBoardControl={false}
                                customTransition="all 0.5s"
                                centerMode={false}
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                rewind={true}
                            >
                                <div className="tns-item tns-slide-cloned rounded-2" aria-hidden="true" tabIndex={-1} 
                                    onClick={() => viewDetail('photos')}>
                                    <img className="hotel-card-img" src={`${server}/Images/${hotel.name}/${hotel.photoURIs[0]}`}/>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-direction-row justify-content-between col">
                    <div className="col">
                        <div className="card-body py-md-2 d-flex flex-column h-100 position-relative">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="fs-5 card-title fw-bold mb-1 cursor-pointer"><span className="" onClick={() => viewDetail('overview')}>{hotel.name}</span></p>
                                
                                <ul className="list-inline mb-0 z-index-2">
                                    <li className="list-inline-item cursor-pointer">
                                        <a href="#" className="btn btn-sm btn-round btn-light">
                                            <FontAwesomeIcon icon={faHeart} fontSize={'0.6rem'}/>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <ul className="list-inline mb-2 cursor-pointer d-flex" onClick={() => viewDetail('info')}>
                                {
                                    starRates.map((ele, i) => {
                                        return ele;
                                    })
                                }
                                &nbsp;&nbsp;Hotel
                            </ul>
                            <div className="d-flex justify-content-between card-item-hover py-1">
                                <small className="cursor-pointer user-select-none" onClick={() => viewDetail('info')}><i className="bi bi-geo-alt me-2"></i>{hotel.address}</small>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{transform:'rotate(90deg)', color:'var(--bs-gray-900)'}} width="24" height="24" viewBox="0 0 24 24" className="pointer-events-none max-h-full max-w-full"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"><path vectorEffect="non-scaling-stroke" d="M10 17l5-5M10 7l5 5"></path></g></svg>
                            </div>
                            <ul className="nav nav-divider mt-0 cursor-pointer d-flex justify-content-between card-item-hover py-1">
                                <a className="nav-item user-select-none" onClick={() => viewDetail("reviews")}>
                                    <b style={{color:'var(--bs-gray-900)'}}>
                                    {((hotel.reviewBooking + hotel.reviewExpedia + hotel.reviewHotels) / 3).toFixed(1)}
                                    {' - '}
                                    {
                                        evalReviewWord(((hotel.reviewBooking + hotel.reviewExpedia + hotel.reviewHotels) / 3))
                                    }
                                    </b> ({hotel.reviewCountBooking + hotel.reviewCountExpedia + hotel.reviewCountHotels} reviews)
                                </a>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{transform:'rotate(90deg)', color:'var(--bs-gray-900)'}} width="24" height="24" viewBox="0 0 24 24" className="pointer-events-none max-h-full max-w-full"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"><path vectorEffect="non-scaling-stroke" d="M10 17l5-5M10 7l5 5"></path></g></svg>
                            </ul>
                            {/* <ul className="nav nav-divider mt-3">
                                <li className="nav-item">Air Conditioning</li>
                                <li className="nav-item">Wifi</li>
                                <li className="nav-item">Kitchen</li>
                                <li className="nav-item"><a href="#" className="mb-0 text-primary">More+</a></li>
                            </ul> */}

                            {/* <ul className="list-group list-group-borderless small mb-0 mt-2">
                                <li className="list-group-item d-flex text-success p-0">
                                    <i className="bi bi-patch-check-fill me-2"></i>Free Cancellation till 7 Jan 2022
                                </li>
                                <li className="list-group-item d-flex text-success p-0">
                                    <i className="bi bi-patch-check-fill me-2"></i>Free Breakfast
                                </li>
                            </ul> */}
                            
                            {/* <div className="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
                                <div className="d-flex align-items-center">
                                    <h5 className="fw-bold mb-0 me-1">$750</h5>
                                    <span className="mb-0 me-2">/day</span>
                                    <span className="text-decoration-line-through mb-0">$1000</span>
                                </div>
                                <div className="mt-3 mt-sm-0">
                                    <a href="#" className="btn btn-sm btn-dark mb-0 w-100">Select Room</a>    
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="col other-price-div">
                        <div className='d-flex rounded-2 flex-column h-100 p-2 justify-content-between'>
                            <div className='d-flex flex-column align-items-center h-50 recmd-price-section justify-content-between cursor-pointer'
                                onClick={() => window.open(aryUrls[0])}>
                                <div className='d-flex flex-row col-md-12 align-items-center'>
                                    <h6>
                                    {aryNames[0]}.com
                                    </h6>
                                </div>
                                <div className='d-flex flex-row col-md-12 align-items-center'>
                                    <h5 className="fw-bold mb-0 me-1 col ps-0">
                                    ${aryPrices[0]}
                                    </h5>
                                    <label className='btn btn-primary m-auto me-0 pt-1 pb-1' 
                                    onClick={() => window.open(aryUrls[0])}>
                                        View Deal {'>'}
                                    </label>
                                </div>
                            </div>
                            <div className='d-flex flex-row align-items-center justify-content-between mt-2'>
                                <div className='col-md-5 rounded-2 p-1 ps-2 other-price me-2 cursor-pointer' onClick={() => window.open(aryUrls[1])}>
                                    <span style={{fontSize:'0.8rem'}}>
                                    {aryNames[1]}
                                    </span>
                                    <h6 className='mb-0'>${aryPrices[1]}</h6>
                                </div>
                                <div className='rounded-2 p-1 ps-2 other-price flex-grow-1 cursor-pointer' onClick={() => window.open(aryUrls[2])}>
                                    <span style={{fontSize:'0.8rem'}}>{aryNames[2]}</span>
                                    <h6 className='mb-0'>
                                    ${aryPrices[2]}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                detailTab !== '' ? (
                    <div className='row'>
                        <DetailView selectedTab={detailTab} hotel={hotel} hideDetailTab={hideDetailTab} viewDetail={viewDetail}/>
                    </div>
                ) : null
            }
            
        </div>
    ) : (
        <div className="card shadow p-2 pb-0 h-100 hotel-item-card">
            {/* <div className="position-absolute top-0 start-0 z-index-1 m-4">
                <div className="badge bg-danger text-white">30% Off</div>
            </div> */}
            <div className="tiny-slider arrow-round arrow-xs arrow-dark rounded-2 overflow-hidden">
                <div className="tns-outer">
                    <Carousel
                        className={`tns-ovh `}
                        swipeable={false}
                        draggable={false}
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