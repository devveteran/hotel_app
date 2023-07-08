import Header from "@containers/common/header";
import BannerSection from "@containers/searchpage/bannersection";
import LeftSearchPanel from "@containers/searchpage/searchpanel";
import HotelItemCard from "@organisms/hotel-item-card";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import './searchpage.scss';
import Footer from "@containers/common/footer";
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import ReactSlider from 'react-slider';

const MIN_PRICE = 500
const MAX_PRICE = 2000
const SearchPage = () => {
    const [scroll, setScroll] = useState(false);
    const [showSearchPanel, setShowSearchPanel] = useState(false);
    const refPanel = useRef<any>(null);
    const refButtonToggle = useRef<any>(null);
    const [visibleToggleButton, setVisibleToggleButton] = useState(false);
    const [viewMode, setViewMode] = useState<string>('list');
    const [showMap, setShowMap] = useState<boolean>(false);
    const [minPrice, setMinPrice] = useState<string>(MIN_PRICE.toFixed(2));
    const [maxPrice, setMaxPrice] = useState<string>(MAX_PRICE.toFixed(2));

    const toggleMap = () => {
        setShowMap(!showMap);
    }
    const toggleSearchPanel = () => {
        setShowSearchPanel(!showSearchPanel);
    }

    const toggleViewMode = (v: string) => {
        setViewMode(v);
        if( v === 'list' && !visibleToggleButton) {
            setShowSearchPanel(true);
        } else if (v === 'grid') {
            setShowSearchPanel(false);
        }
    }

    const onChangePriceRange = (value: Array<number>, index: number) => {
        let minval = value[0];
        let maxval = value[1];
        if (index === 0)
            setMinPrice(minval.toFixed(2));
        else if (index === 1)
            setMaxPrice(maxval.toFixed(2));
    }
    const onClickScrollToTop = () => {
        window.scrollTo({top:0, behavior:'smooth'});
    }

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY < 300)
                setScroll(false);
            else 
                setScroll(true);
        }
        document.addEventListener("scroll", onScroll)
        return () => {
             document.removeEventListener("scroll", onScroll)
        }
    }, [scroll, setScroll]);

    useLayoutEffect(() => {
        function updateSize() {
            const display = window.getComputedStyle(refButtonToggle.current).getPropertyValue("display");
            
            if (viewMode === 'list') {
                if (display !== 'none'){
                    setVisibleToggleButton(true);
                    setShowSearchPanel(false);
                }
                else{
                    setVisibleToggleButton(false);
                    setShowSearchPanel(true);
                }
            }
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (refButtonToggle.current.contains(event.target))
                return;
            if (refPanel.current && !refPanel.current.contains(event.target)) {
                if(visibleToggleButton)
                    setShowSearchPanel(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    return (
        <div className="home-view"> 
            <Header scroll={scroll} showNavButtons={false} />
            <BannerSection />
            <section className={`pt-0 ${viewMode==='list' ? '' : 'pb-4'}`}>
                <div className={`container ${viewMode==='list' ? '' : 'position-relative'}`}>
                    <div className={`row ${viewMode==='list' ? 'mb-4': ''}`}>
                        <div className='col-12'>
                            <div className={`${'d-flex justify-content-end'}`}>
                                <label ref={refButtonToggle} className={`${'btn btn-primary-soft btn-primary-check mb-0'} ${showSearchPanel ? 'active':''}`} onClick={toggleSearchPanel}>
                                    <FontAwesomeIcon icon={faSlidersH}/> Show filters
                                </label>
                                <label ref={refButtonToggle} className={`${'btn btn-primary-soft btn-primary-check mb-0 ms-4'} ${showMap ? 'active':''}`} onClick={toggleMap}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} /> Show Map
                                </label>
                                <ul className="nav nav-pills nav-pills-dark d-none" id="tour-pills-tab" role="tablist">
                                    <li className="nav-item">
                                        <a className={`nav-link rounded-start rounded-0 mb-0 ${viewMode==='list' ? 'active':''}`}  onClick={() => toggleViewMode('list')}><i className="bi fa-fw bi-list-ul"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link rounded-end rounded-0 mb-0 ${viewMode==='grid' ? 'active':''}`} onClick={() => toggleViewMode('grid')}><i className="bi fa-fw bi-grid-fill"></i></a>
                                    </li>
                                </ul>
                            </div>                            
                        </div>
                    </div>
                    <div className={`row mb-4 ${showSearchPanel === true ? '' : 'd-none'}`}>
                        <div>
                            <div className="card card-body bg-light p-4 z-index-9">
                                <form className="row g-4">
                                    <div className="col-md-6 col-lg-4">
                                        <div className="form-control-borderless">
                                            <label className="form-label">Enter Hotel Name</label>
                                            <input type="text" className="form-control form-control-lg"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-4">
                                        <div className="form-control-borderless">
                                            <label className="form-label">Price Range</label>
                                            <div className="position-relative">
                                                <div className='noui-wrapper'>
                                                    <div className="d-flex justify-content-between">
                                                        <input type="text" className="text-body input-with-range-min" value={minPrice} readOnly={true}/>
                                                        <input type="text" className="text-body input-with-range-max" value={maxPrice} readOnly={true}/>
                                                    </div>
                                                    <ReactSlider
                                                        className="price-slider mt-2"
                                                        thumbClassName="price-thumb"
                                                        trackClassName="price-track"
                                                        defaultValue={[MIN_PRICE, MAX_PRICE]}
                                                        min={MIN_PRICE}
                                                        max={MAX_PRICE}
                                                        onChange={(v:Array<number>, i: number) => onChangePriceRange(v, i)}
                                                        ariaLabelledby={['first-slider-label', 'second-slider-label']}
                                                        ariaValuetext={(state:any) => `Thumb value ${state.valueNow}`}
                                                        minDistance={100}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-4">
                                        <div className="form-size-lg form-control-borderless">
                                            <label className="form-label">Popular Filters</label>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-4">
                                        <div className="form-control-borderless">
                                            <label className="form-label">Customer Rating</label>
                                            <ul className="list-inline mb-0 g-3">
                                                <li className="list-inline-item">
                                                    <input type="checkbox" className="btn-check" id="btn-check-1"/>
                                                    <label className="btn btn-white btn-primary-soft-check" htmlFor="btn-check-1">3+</label>
                                                </li>
                                                <li className="list-inline-item">
                                                    <input type="checkbox" className="btn-check" id="btn-check-2"/>
                                                    <label className="btn btn-white btn-primary-soft-check" htmlFor="btn-check-2">3.5+</label>
                                                </li>
                                                <li className="list-inline-item">
                                                    <input type="checkbox" className="btn-check" id="btn-check-3"/>
                                                    <label className="btn btn-white btn-primary-soft-check" htmlFor="btn-check-3">4+</label>
                                                </li>
                                                <li className="list-inline-item">
                                                    <input type="checkbox" className="btn-check" id="btn-check-4"/>
                                                    <label className="btn btn-white btn-primary-soft-check" htmlFor="btn-check-4">4.5+</label>
                                                </li>
                                            </ul>
                                        </div>	
                                    </div>

                                    <div className="col-md-6 col-lg-4">
                                        <div className="form-control-borderless">
                                            <label className="form-label">Star Rating</label>
                                            <ul className="list-inline mb-0 g-3">
                                                <li className="list-inline-item">
                                                    <input type="checkbox" className="btn-check" id="btn-check-9"/>
                                                    <label className="btn btn-white btn-primary-soft-check" htmlFor="btn-check-9">1<i className="bi bi-star-fill"></i></label>
                                                </li>
                                                <li className="list-inline-item">
                                                    <input type="checkbox" className="btn-check" id="btn-check-10"/>
                                                    <label className="btn btn-white btn-primary-soft-check" htmlFor="btn-check-10">2<i className="bi bi-star-fill"></i></label>
                                                </li>
                                                <li className="list-inline-item">
                                                    <input type="checkbox" className="btn-check" id="btn-check-11"/>
                                                    <label className="btn btn-white btn-primary-soft-check" htmlFor="btn-check-11">3<i className="bi bi-star-fill"></i></label>
                                                </li>
                                                <li className="list-inline-item">
                                                    <input type="checkbox" className="btn-check" id="btn-check-12"/>
                                                    <label className="btn btn-white btn-primary-soft-check" htmlFor="btn-check-12">4<i className="bi bi-star-fill"></i></label>
                                                </li>
                                                <li className="list-inline-item">
                                                    <input type="checkbox" className="btn-check" id="btn-check-13"/>
                                                    <label className="btn btn-white btn-primary-soft-check" htmlFor="btn-check-13">5<i className="bi bi-star-fill"></i></label>
                                                </li>
                                            </ul>
                                        </div>	
                                    </div>

                                    <div className="col-md-6 col-lg-4">
                                        <div className="form-size-lg form-control-borderless">
                                            <label className="form-label">Hotel Type</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-control-borderless">
                                            <label className="form-label">Amenities</label>
                                            <div className="row g-3">
                                                <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                        <label className="form-check-label h6 fw-light mb-0" htmlFor="flexCheckDefault">
                                                            Air Conditioning
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
                                                        <label className="form-check-label h6 fw-light mb-0" htmlFor="flexCheckDefault2">
                                                            Room Services
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3"/>
                                                            <label className="form-check-label h6 fw-light mb-0" htmlFor="flexCheckDefault3">
                                                                Dining
                                                            </label>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4"/>
                                                            <label className="form-check-label h6 fw-light mb-0" htmlFor="flexCheckDefault4">
                                                                Caretaker
                                                            </label>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault5"/>
                                                            <label className="form-check-label h6 fw-light mb-0" htmlFor="flexCheckDefault5">
                                                                Free Internet
                                                            </label>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault6"/>
                                                            <label className="form-check-label h6 fw-light mb-0" htmlFor="flexCheckDefault6">
                                                                Business Service
                                                            </label>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault7"/>
                                                            <label className="form-check-label h6 fw-light mb-0" htmlFor="flexCheckDefault7">
                                                                Bonfire
                                                            </label>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault8"/>
                                                            <label className="form-check-label h6 fw-light mb-0" htmlFor="flexCheckDefault8">
                                                                Mask
                                                            </label>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault9"/>
                                                            <label className="form-check-label h6 fw-light mb-0" htmlFor="flexCheckDefault9">
                                                                Spa
                                                            </label>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault10"/>
                                                            <label className="form-check-label h6 fw-light mb-0" htmlFor="flexCheckDefault10">
                                                                Swimming pool
                                                            </label>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault11"/>
                                                            <label className="form-check-label h6 fw-light mb-0" htmlFor="flexCheckDefault11">
                                                                Fitness Centre 
                                                            </label>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault12"/>
                                                            <label className="form-check-label h6 fw-light mb-0" htmlFor="flexCheckDefault12">
                                                                Bar 
                                                            </label>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>

                                    <div className="text-end align-items-center">
                                        <button className="btn btn-link p-0 mb-0">Clear all</button>
                                        <button className="btn btn-dark mb-0 ms-3">Apply filter</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${showMap===true ? 'container-fluid' : 'container'}  ${viewMode==='list' ? '' : 'position-relative'}`}>
                    {/* {
                        viewMode === 'list' ? ( */}
                    <div className='row'>
                        <div className={`${showMap === true ? 'col-md-7' : ''}`}>
                            <div className='vstack gap-4'>
                                <HotelItemCard viewMode="list"/>
                                <HotelItemCard viewMode="list"/>
                                <HotelItemCard viewMode="list"/>
                                <HotelItemCard viewMode="list"/>
                                <HotelItemCard viewMode="list"/>
                                <HotelItemCard viewMode="list"/>
                                <HotelItemCard viewMode="list"/>
                                <HotelItemCard viewMode="list"/>
                            </div>
                        </div>
                        <div className={`${showMap === true ? 'p-0 col-md-5 d-none d-md-block' : 'd-none'} map-wrapper rounded-2`}>
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d198588.45780654624!2d114.16793527669192!3d22.351972730953253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2shk!4v1688759358712!5m2!1sde!2shk" width="100%" height="100%"  */}
                            {/* style={{border:'0'}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "" }}
                                // yesIWantToUseGoogleMapApiInternals
                                defaultCenter={{
                                    lat: 30.99835602,
                                    lng: 47.01502627
                                }}
                                defaultZoom={11}
                            >
                            </GoogleMapReact>
                        </div>
                    </div>
                        {/* ) : (

                        )
                    } */}
                </div>
            </section>

            <Footer />
            <div className={`back-top ${scroll ? 'back-top-show' : ''}`} onClick={onClickScrollToTop}></div>
        </div>
        
    )
}
export default SearchPage;