import { HotelInfo } from "@constants/types"
import './style.scss';
import GoogleMapReact from 'google-map-react';
import { useSelector } from "react-redux";
import { RootState } from "@store/index";
import BarChart from "./barchart";
import HotelAmenities from "@organisms/hotel-item/hotel-amenities-section";
import HotelRatingSection from "../hotel-rating-section";

interface PropType {
    hotel: HotelInfo;
}

const HotelItemOverview = ({hotel}: PropType) => {
    const mapState = useSelector((state:RootState) => state.global.mapState);
    
    return (
        <div>
            <div role="tabpanel" id="tabs-211-panel-0" aria-labelledby="tabs-211-tab-0" className="w-full">
                <div className="mt-4 px-1 d-flex justify-content-center relative gap-1" aria-hidden="true">
                    <img className="rounded-2 d-sm-block" src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_190,q_auto,w_240//partnerimages/16/19/1619215994.jpeg" draggable="false" alt=""/>
                    <img className="rounded-2 d-none d-sm-block"src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_190,q_auto,w_240//uploadimages/47/15/47150778.jpeg" draggable="false" alt=""/>
                    <img className="rounded-2 d-none d-md-block" src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_190,q_auto,w_240//uploadimages/47/15/47150672.jpeg" draggable="false" alt=""/>
                    <img className="rounded-2 d-none d-xl-block" src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_190,q_auto,w_240//uploadimages/47/15/47150588.jpeg" draggable="false" alt=""/>
                </div>
                <footer className="mt-3 px-4 text-end">
                    <button type="button" className="btn btn-primary-check bg-white text-s font-bold px-3 leading-none h-8 border rounded-2 border-grey-700">Show all photos</button>
                </footer>
                <div className="px-4 pt-2">
                    <div className="pb-2 mb-2">
                        <section className="pt-0">
                            <p className="fw-bold fs-5 pb-0 mb-2 text-grey-900">Price trend</p>
                            <p className="fst-italic text-m" data-testid="date-nav-legal-text-label">
                                Based on average prices on trivago from the last 30 days
                            </p>
                            <div className="relative inline-flex items-end h-32 mb-10 mt-13 w-full">
                                <div className="relative h-full flex items-end m-auto">
                                    <BarChart />
                                </div>
                            </div>
                            <div className="w-100 d-flex justify-content-end">
                                <button type="button" 
                                className="btn btn-primary-check border" data-testid="date-nav-deals-cta">
                                    <span className="flex items-center justify-center">
                                        Show all prices
                                        <span className="inline-flex leading-none transform stroke-current flex-shrink-0 ml-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="pointer-events-none max-h-full max-w-full">
                                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2">
                                                <path vectorEffect="non-scaling-stroke" d="M10 17l5-5M10 7l5 5"></path>
                                            </g>
                                        </svg>
                                        </span>
                                    </span>
                                </button>
                            </div>
                        </section>
                    </div>
                    <div className="row d-flex">
                        <div className={`${mapState.show === true ? 'w-100' : 'col-md-7'}`}>
                            <HotelRatingSection hotel={hotel} showButton={true}/>
                            <div className="mb-6" />
                            <HotelAmenities amenities={hotel.amenities} />
                        </div>
                        {
                            mapState.show === false ? (
                                <div className="col-md-5">
                                    <div className="w-100 h-100 pb-4 ps-3">
                                        <div className="position-relative w-100 h-100">
                                            <GoogleMapReact
                                                center={{
                                                    lat: hotel.geoLat,
                                                    lng: hotel.getLon
                                                }}
                                                bootstrapURLKeys={{ key: "" }}
                                                // yesIWantToUseGoogleMapApiInternals
                                                defaultZoom={10}
                                            >
                                            </GoogleMapReact>
                                            <label className="position-absolute btn border-dark btn-white" style={{left:'50%', transform:'translateX(-50%)', bottom:'1rem'}}>
                                                Location info
                                            </label>
                                        </div>
                                    </div>
                                    {/* <footer className="text-end mt-6 location_button__mGI6n absolute right-0 mb-2"> */}
                                        
                                    {/* </footer> */}
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HotelItemOverview;