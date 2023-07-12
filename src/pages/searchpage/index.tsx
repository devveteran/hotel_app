import Header from "@containers/common/header";
import BannerSection from "@containers/searchpage/bannersection";
import LeftSearchPanel from "@containers/searchpage/searchpanel";
import HotelItemCard from "@organisms/hotel-item-card";
import { useEffect, useRef, useState } from "react";
import './searchpage.scss';
import Footer from "@containers/common/footer";
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import ReactSlider from 'react-slider';
import { Dropdown } from "react-bootstrap";
import { randomInt } from "crypto";
import { useParams, useSearchParams } from "react-router-dom";
import { CustomerRatingType, SearchParamType, StarRatingType, TopAmenities, initialCustomerRating, initialStarRating } from "@constants/types";
import { useSelector } from "react-redux";
import { RootState } from "@store/index";

export interface MapViewState {
    show: boolean,
    lat: number,
    lon: number
};
export const initialMapViewState = {
    show: false,
    lat: 10,
    lon: 10,
}

const MIN_PRICE = 500
const MAX_PRICE = 2000

const SearchPage = () => { 
    const searchParam = useSelector((state:RootState) => state.global.searchParam);

    const [scroll, setScroll] = useState(false);
    const [showSearchPanel, setShowSearchPanel] = useState(false);
    const [visibleToggleButton, setVisibleToggleButton] = useState(false);
    const [viewMode, setViewMode] = useState<string>('list');
    const [mapState, setMapState] = useState<MapViewState>(initialMapViewState);

    const [hotelName, setHotelName] = useState<string>("");
    const [minPrice, setMinPrice] = useState<string>(MIN_PRICE.toFixed(2));
    const [maxPrice, setMaxPrice] = useState<string>(MAX_PRICE.toFixed(2));
    const [popularFilter, setPopularFilter] = useState<string>('Select Option');
    const [hotelTypeFilter, setHotelTypeFilter] = useState<string>('Select Option');
    const [customerRating, setCustomerRating] = useState<CustomerRatingType>(initialCustomerRating);
    const [starRating, setStarRating] = useState<StarRatingType>(initialStarRating);
    const [amenities, setAmenities] = useState<{[arg:string]: boolean}>({});

    const onSelectHotelType = ( v: string ) => {
        setHotelTypeFilter(v);
    }

    useEffect(() => {
        // console.log(searchParam);
    }, [searchParam]);

    const searchHotels = async () => {

    }

    const onChangeHotelName = (v: any) => {
        let val = v.target.value;
        setHotelName(val);
    }
    const toggleCustomerRating = (v: string) => {
        Object.keys(customerRating).forEach((ele, i) => {
            if (ele === v) {
                let val = Object.values(customerRating)[i];
                setCustomerRating(prev => ({...prev, [ele]: !val}));
            }
        })
    }

    const toggleStarRating = (v: string) => {
        Object.keys(starRating).forEach((ele, i) => {
            if (ele === v) {
                let val = Object.values(starRating)[i];
                setStarRating(prev => ({...prev, [ele]: !val}));
            }
        })
    }
    
    const clearAllFilters = () => {
        setHotelName('');
        setMinPrice(MIN_PRICE.toFixed(2));
        setMaxPrice(MAX_PRICE.toFixed(2));
        setPopularFilter('Select Option');
        setHotelTypeFilter('Select Option');
        setCustomerRating(initialCustomerRating);
        setStarRating(initialStarRating);
        setAmenities({});
    }


    const toggleAmenities = (v: string) => {
        let bfound: boolean = false;
        Object.keys(amenities).forEach((ele, i) => {
            if (ele === v) {
                let val = Object.values(amenities)[i];
                setAmenities(prev => ({...prev, [ele]: !val}));
                bfound = true;
            }
        })
        if (!bfound) {
            setAmenities(prev => ({...prev, [v]: true}));
        }
    }

    const onSelectFilter = (v: string) => {
        setPopularFilter(v);
    }

    const toggleMap = () => {
        let tmp_mapState = {...mapState};
        tmp_mapState.show = !tmp_mapState.show;
        setMapState(tmp_mapState);
    }
    const toggleSearchPanel = () => {
        setShowSearchPanel(!showSearchPanel);
    }

    const viewMap = (v: MapViewState) => {
        let tv = {...v};
        setMapState(tv);
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

    // useLayoutEffect(() => {
    //     function updateSize() {
    //         const display = window.getComputedStyle(refButtonToggle.current).getPropertyValue("display");
            
    //         if (viewMode === 'list') {
    //             if (display !== 'none'){
    //                 setVisibleToggleButton(true);
    //                 setShowSearchPanel(false);
    //             }
    //             else{
    //                 setVisibleToggleButton(false);
    //                 setShowSearchPanel(true);
    //             }
    //         }
    //     }
    //     window.addEventListener('resize', updateSize);
    //     updateSize();
    //     return () => window.removeEventListener('resize', updateSize);
    // }, []);

    // useEffect(() => {
    //     function handleClickOutside(event: any) {
    //         if (refButtonToggle.current.contains(event.target))
    //             return;
    //         if (refPanel.current && !refPanel.current.contains(event.target)) {
    //             if(visibleToggleButton)
    //                 setShowSearchPanel(false);
    //         }
    //     }
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // });

    return (
        <div className="home-view"> 
            <Header scroll={scroll} showNavButtons={false} />
            <BannerSection />
            <section className={`pt-0 ${viewMode==='list' ? '' : 'pb-4'}`}>
                <div className={`container ${viewMode==='list' ? '' : 'position-relative'}`}>
                    <div className={`row ${viewMode==='list' ? 'mb-4': ''}`}>
                        <div className='col-12'>
                            <div className={`${'d-flex justify-content-end'}`}>
                                <label className={`${'btn btn-primary-soft btn-primary-check mb-0'} ${showSearchPanel ? 'active':''}`} onClick={toggleSearchPanel}>
                                    <FontAwesomeIcon icon={faSlidersH}/> Show filters
                                </label>
                                <label className={`${'btn btn-primary-soft btn-primary-check mb-0 ms-4'} ${mapState.show ? 'active':''}`} onClick={toggleMap}>
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
                                <div className="row g-4">
                                    <div className="col-md-6 col-lg-4">
                                        <div className="form-control-borderless">
                                            <label className="form-label">Enter Hotel Name</label>
                                            <input type="text" className="form-control form-control-lg" value={hotelName} onChange={(v: any) => onChangeHotelName(v)}/>
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
                                                        value={[Number(minPrice), Number(maxPrice)]}
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
                                            <Dropdown className="custom-selector me-2">
                                                <Dropdown.Toggle id="select-filter-button" variant="link" className="custom-dropdown-button form-control form-control-lg" 
                                                    style={{textAlign:'left'}}>
                                                    {
                                                        popularFilter === 'Select Option' ?
                                                        (
                                                            <span className='no-select'>{popularFilter}</span>
                                                        ) : <span>{popularFilter}</span>
                                                    }
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu className="custom-dropdown-menu filter-selector-dropdown">
                                                    <Dropdown.Item className="d-flex justify-content-between" onClick={() => onSelectFilter('Select Option')} style={{color:'var(--bs-gray-400)'}}>
                                                        Select Option
                                                    </Dropdown.Item>
                                                    <Dropdown.Item className="d-flex justify-content-between" onClick={() => onSelectFilter('Recently Search')}>
                                                        Recently Search
                                                    </Dropdown.Item>
                                                    <Dropdown.Item className="d-flex justify-content-between" onClick={() => onSelectFilter('Most Popular')}>
                                                        Most Popular
                                                    </Dropdown.Item>
                                                    <Dropdown.Item className="d-flex justify-content-between" onClick={() => onSelectFilter('Top rated')}>
                                                        Top rated
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-4">
                                        <div className="form-control-borderless">
                                            <label className="form-label">Customer Rating</label>
                                            <ul className="list-inline mb-0 g-3">
                                                <li className="list-inline-item">
                                                    <input type="checkbox" className="btn-check" id="btn-check-1" checked={customerRating.threePlus} onChange={() => toggleCustomerRating('threePlus')}/>
                                                    <label className="btn btn-white btn-primary-soft-check" htmlFor="btn-check-1">3+</label>
                                                </li>
                                                <li className="list-inline-item">
                                                    <input type="checkbox" className="btn-check" checked={customerRating.threeHalfPlus} id="btn-check-2" onChange={() => toggleCustomerRating('threeHalfPlus')}/>
                                                    <label className="btn btn-white btn-primary-soft-check" htmlFor="btn-check-2">3.5+</label>
                                                </li>
                                                <li className="list-inline-item">
                                                    <input type="checkbox" className="btn-check" checked={customerRating.fourPlus} id="btn-check-3" onChange={() => toggleCustomerRating('fourPlus')}/>
                                                    <label className="btn btn-white btn-primary-soft-check" htmlFor="btn-check-3">4+</label>
                                                </li>
                                                <li className="list-inline-item">
                                                    <input type="checkbox" checked={customerRating.fourHalfPlus} className="btn-check" id="btn-check-4" onChange={() => toggleCustomerRating('fourHalfPlus')}/>
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
                                                    <input type="checkbox" className="btn-check" id="btn-check-9" checked={starRating.starOne} onChange={() => toggleStarRating('starOne')}/>
                                                    <label className="btn btn-white btn-primary-soft-check" htmlFor="btn-check-9">1<i className="bi bi-star-fill"></i></label>
                                                </li>
                                                <li className="list-inline-item">
                                                    <input type="checkbox" className="btn-check" id="btn-check-10" checked={starRating.starTwo} onChange={() => toggleStarRating('starTwo')}/>
                                                    <label className="btn btn-white btn-primary-soft-check" htmlFor="btn-check-10">2<i className="bi bi-star-fill"></i></label>
                                                </li>
                                                <li className="list-inline-item">
                                                    <input type="checkbox" className="btn-check" id="btn-check-11" checked={starRating.starThree} onChange={() => toggleStarRating('starThree')}/>
                                                    <label className="btn btn-white btn-primary-soft-check" htmlFor="btn-check-11">3<i className="bi bi-star-fill"></i></label>
                                                </li>
                                                <li className="list-inline-item">
                                                    <input type="checkbox" className="btn-check" id="btn-check-12" checked={starRating.starFour} onChange={() => toggleStarRating('starFour')}/>
                                                    <label className="btn btn-white btn-primary-soft-check" htmlFor="btn-check-12">4<i className="bi bi-star-fill"></i></label>
                                                </li>
                                                <li className="list-inline-item">
                                                    <input type="checkbox" className="btn-check" id="btn-check-13" checked={starRating.starFive} onChange={() => toggleStarRating('starFive')}/>
                                                    <label className="btn btn-white btn-primary-soft-check" htmlFor="btn-check-13">5<i className="bi bi-star-fill"></i></label>
                                                </li>
                                            </ul>
                                        </div>	
                                    </div>

                                    <div className="col-md-6 col-lg-4">
                                        <div className="form-size-lg form-control-borderless">
                                            <label className="form-label">Hotel Type</label>
                                            <Dropdown className="custom-selector me-2">
                                                <Dropdown.Toggle id="select-filter-button" variant="link" className="custom-dropdown-button form-control form-control-lg" 
                                                    style={{textAlign:'left'}}>
                                                    {
                                                        hotelTypeFilter === 'Select Option' ?
                                                        (
                                                            <span className='no-select'>{hotelTypeFilter}</span>
                                                        ) : <span>{hotelTypeFilter}</span>
                                                    }
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu className="custom-dropdown-menu filter-selector-dropdown">
                                                    <Dropdown.Item className="d-flex justify-content-between" onClick={() => onSelectHotelType('Select Option')} style={{color:'var(--bs-gray-400)'}}>
                                                        Select Option
                                                    </Dropdown.Item>
                                                    <Dropdown.Item className="d-flex justify-content-between" onClick={() => onSelectHotelType('Free Cancellation Available')}>
                                                        Free Cancellation Available
                                                    </Dropdown.Item>
                                                    <Dropdown.Item className="d-flex justify-content-between" onClick={() => onSelectHotelType('Pay At Hotel Available')}>
                                                        Pay At Hotel Available
                                                    </Dropdown.Item>
                                                    <Dropdown.Item className="d-flex justify-content-between" onClick={() => onSelectHotelType('Free Breakfast Included')}>
                                                        Free Breakfast Included
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>                                            
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-control-borderless">
                                            <label className="form-label">Amenities</label>
                                            <div className="row g-3">
                                                {
                                                    TopAmenities.map((ele, i) => {
                                                        return (
                                                            <div key={ele} className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" checked={amenities[ele] ? amenities[ele]: false} id={`filter-${ele}`} onChange={() => toggleAmenities(ele)}/>
                                                                    <label className="form-check-label h6 fw-light mb-0" htmlFor={`filter-${ele}`}>
                                                                        {ele}
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div> 
                                        </div>
                                    </div>

                                    <div className="text-end align-items-center">
                                        <label className="btn btn-link p-0 mb-0" onClick={clearAllFilters}>Clear all</label>
                                        <label className="btn btn-dark mb-0 ms-3" onClick={searchHotels}>Apply filter</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${mapState.show===true ? 'container-fluid' : 'container'}  ${viewMode==='list' ? '' : 'position-relative'}`}>
                    {/* {
                        viewMode === 'list' ? ( */}
                    <div className='row'>
                        <div className={`${mapState.show === true ? 'col-md-7' : ''}`}>
                            <div className='vstack gap-4'>
                                {
                                    [1,2,3,4,5,6,7,8].map((v, i) => {
                                        return (<HotelItemCard 
                                        key={i}
                                        viewMode="list"
                                        images={["@images/category/hotel/4by3/03.jpg", "@images/category/hotel/4by3/03.jpg"]}
                                        rate={4} 
                                        title={"Courtyard by Marriott New York"} 
                                        viewMap={viewMap} 
                                        lat={10 + 10 * i} 
                                        lon={38}
                                        reviewRate={4.8} 
                                        reviewCnt={502}/>)
                                    })
                                }
                            </div>
                        </div>
                        <div className={`${mapState.show === true ? 'p-0 col-md-5 d-none d-md-block' : 'd-none'} map-wrapper rounded-2`}>
                            <GoogleMapReact
                                center={{
                                    lat: mapState.lat,
                                    lng: mapState.lon
                                }}
                                bootstrapURLKeys={{ key: "" }}
                                // yesIWantToUseGoogleMapApiInternals
                                defaultZoom={11}
                            >
                            </GoogleMapReact>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <div className={`back-top ${scroll ? 'back-top-show' : ''}`} onClick={onClickScrollToTop}></div>
        </div>
        
    )
}
export default SearchPage;