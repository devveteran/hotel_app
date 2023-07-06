import Header from "@containers/common/header";
import BannerSection from "@containers/searchpage/bannersection";
import LeftSearchPanel from "@containers/searchpage/searchpanel";
import HotelItemCard from "@organisms/hotel-item-card";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import './searchpage.scss';
import Footer from "@containers/common/footer";

const SearchPage = () => {
    const [scroll, setScroll] = useState(false);
    const [showSearchPanel, setShowSearchPanel] = useState(false);
    const refPanel = useRef<any>(null);
    const refButtonToggle = useRef<any>(null);
    const [visibleToggleButton, setVisibleToggleButton] = useState(false);
    const [viewMode, setViewMode] = useState<string>('list');

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
                        <div className={`${viewMode==='list' ? 'hstack gap-3 justify-content-between justify-content-md-end' : 'd-flex justify-content-between'}`}>
                            <button ref={refButtonToggle} className={`${viewMode==='list' ? 'btn btn-primary-soft btn-primary-check mb-0 d-xl-none' : 'btn btn-primary-soft btn-primary-check mb-0'} `} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar" onClick={toggleSearchPanel}>
                                <i className="fa-solid fa-sliders-h me-1"></i> Show filters
                            </button>
                            <ul className="nav nav-pills nav-pills-dark" id="tour-pills-tab" role="tablist">
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
                    {
                        viewMode === 'list' ? (
                            <div className='row'>
                                <aside className='col-xl-4 col-xxl-3'>
                                    {/* <LeftSearchPanel /> */}
                                    <div ref={refPanel} className="offcanvas-xl offcanvas-end" tabIndex={-1} id="offcanvasSidebar" aria-labelledby="offcanvasSidebarLabel"
                                        style={{visibility:`${showSearchPanel ? 'visible' : 'hidden'}`}}>
                                        <div className="offcanvas-header">
                                            <h5 className="offcanvas-title" id="offcanvasSidebarLabel">Advance Filters</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar" aria-label="Close" onClick={toggleSearchPanel}></button>
                                        </div>
                                        <div className="offcanvas-body flex-column p-3 p-xl-0">
                                            <form className="rounded-3 shadow">
                                                <div className="card card-body rounded-0 rounded-top p-4">
                                                    <h6 className="mb-2">Hotel Type</h6>
                                                    <div className="col-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="hotelType1"/>
                                                            <label className="form-check-label" htmlFor="hotelType1">All</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="hotelType2"/>
                                                            <label className="form-check-label" htmlFor="hotelType2">Hotel</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="hotelType3"/>
                                                            <label className="form-check-label" htmlFor="hotelType3">Apartment</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="hotelType4"/>
                                                            <label className="form-check-label" htmlFor="hotelType4">Resort</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="hotelType5"/>
                                                            <label className="form-check-label" htmlFor="hotelType5">Villa</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="hotelType6"/>
                                                            <label className="form-check-label" htmlFor="hotelType6">Lodge</label>
                                                        </div>
                                                        
                                                        <div className="multi-collapse collapse" id="hotelType">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="hotelType7"/>
                                                                <label className="form-check-label" htmlFor="hotelType7">Guest House</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="hotelType10"/>
                                                                <label className="form-check-label" htmlFor="hotelType10">Cottage</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="hotelType8"/>
                                                                <label className="form-check-label" htmlFor="hotelType8">Beach Hut</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="hotelType9"/>
                                                                <label className="form-check-label" htmlFor="hotelType9">Farm house</label>
                                                            </div>
                                                        </div>
                                                        <a className="p-0 mb-0 mt-2 btn-more d-flex align-items-center collapsed" data-bs-toggle="collapse" href="#hotelType" role="button" aria-expanded="false" aria-controls="hotelType">
                                                            See <span className="see-more ms-1">more</span><span className="see-less ms-1">less</span><i className="fa-solid fa-angle-down ms-2"></i>
                                                        </a>
                                                    </div>
                                                </div>
        
                                                <hr className="my-0"/>
        
                                                <div className="card card-body rounded-0 p-4">
                                                    <h6 className="mb-2">Price range</h6>
                                                    <div className="col-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="priceRange1"/>
                                                            <label className="form-check-label" htmlFor="priceRange1">Up to $500</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="priceRange2"/>
                                                            <label className="form-check-label" htmlFor="priceRange2">$500 - $1000</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="priceRange3"/>
                                                            <label className="form-check-label" htmlFor="priceRange3">$1000 - $1500</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="priceRange4"/>
                                                            <label className="form-check-label" htmlFor="priceRange4">$1500 - $2000</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="priceRange5"/>
                                                            <label className="form-check-label" htmlFor="priceRange5">$2000+</label>
                                                        </div>
                                                    </div>
                                                </div>
        
                                                <hr className="my-0"/>
        
                                                <div className="card card-body rounded-0 p-4">
                                                    <h6 className="mb-2">Popular Type</h6>
                                                    <div className="col-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="popolarType1"/>
                                                            <label className="form-check-label" htmlFor="popolarType1">Free Breakfast Included</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="popolarType2"/>
                                                            <label className="form-check-label" htmlFor="popolarType2">Pay At Hotel Available</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="popolarType3"/>
                                                            <label className="form-check-label" htmlFor="popolarType3">Free Cancellation Available</label>
                                                        </div>
                                                    </div>
                                                </div>
        
                                                <hr className="my-0"/>
        
                                                <div className="card card-body rounded-0 p-4">
                                                    <h6 className="mb-2">Customer Rating</h6>
                                                    <ul className="list-inline mb-0 g-3">
                                                        <li className="list-inline-item mb-0">
                                                            <input type="checkbox" className="btn-check" id="btn-check-c1"/>
                                                            <label className="btn btn-sm btn-light btn-primary-soft-check" htmlFor="btn-check-c1">3+</label>
                                                        </li>
                                                        <li className="list-inline-item mb-0">
                                                            <input type="checkbox" className="btn-check" id="btn-check-c2"/>
                                                            <label className="btn btn-sm btn-light btn-primary-soft-check" htmlFor="btn-check-c2">3.5+</label>
                                                        </li>
                                                        <li className="list-inline-item mb-0">
                                                            <input type="checkbox" className="btn-check" id="btn-check-c3"/>
                                                            <label className="btn btn-sm btn-light btn-primary-soft-check" htmlFor="btn-check-c3">4+</label>
                                                        </li>
                                                        <li className="list-inline-item mb-0">
                                                            <input type="checkbox" className="btn-check" id="btn-check-c4"/>
                                                            <label className="btn btn-sm btn-light btn-primary-soft-check" htmlFor="btn-check-c4">4.5+</label>
                                                        </li>
                                                    </ul>
                                                </div>
        
                                                <hr className="my-0"/> 
        
                                                <div className="card card-body rounded-0 p-4">
                                                    <h6 className="mb-2">Rating Star</h6>
                                                    <ul className="list-inline mb-0 g-3">
                                                        <li className="list-inline-item mb-0">
                                                            <input type="checkbox" className="btn-check" id="btn-check-6"/>
                                                            <label className="btn btn-sm btn-light btn-primary-soft-check" htmlFor="btn-check-6">1<i className="bi bi-star-fill"></i></label>
                                                        </li>
                                                        <li className="list-inline-item mb-0">
                                                            <input type="checkbox" className="btn-check" id="btn-check-7"/>
                                                            <label className="btn btn-sm btn-light btn-primary-soft-check" htmlFor="btn-check-7">2<i className="bi bi-star-fill"></i></label>
                                                        </li>
                                                        <li className="list-inline-item mb-0">
                                                            <input type="checkbox" className="btn-check" id="btn-check-8"/>
                                                            <label className="btn btn-sm btn-light btn-primary-soft-check" htmlFor="btn-check-8">3<i className="bi bi-star-fill"></i></label>
                                                        </li>
                                                        <li className="list-inline-item mb-0">
                                                            <input type="checkbox" className="btn-check" id="btn-check-15"/>
                                                            <label className="btn btn-sm btn-light btn-primary-soft-check" htmlFor="btn-check-15">4<i className="bi bi-star-fill"></i></label>
                                                        </li>
                                                        <li className="list-inline-item mb-0">
                                                            <input type="checkbox" className="btn-check" id="btn-check-16"/>
                                                            <label className="btn btn-sm btn-light btn-primary-soft-check" htmlFor="btn-check-16">5<i className="bi bi-star-fill"></i></label>
                                                        </li>
                                                    </ul>
                                                </div>
        
                                                <hr className="my-0"/> 
        
                                                <div className="card card-body rounded-0 rounded-bottom p-4">
                                                    <h6 className="mb-2">Amenities</h6>
                                                    <div className="col-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="amenitiesType1"/>
                                                            <label className="form-check-label" htmlFor="amenitiesType1">All</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="amenitiesType2"/>
                                                            <label className="form-check-label" htmlFor="amenitiesType2">Air Conditioning</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="amenitiesType3"/>
                                                            <label className="form-check-label" htmlFor="amenitiesType3">Bar</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="amenitiesType4"/>
                                                            <label className="form-check-label" htmlFor="amenitiesType4">Bonfire</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="amenitiesType5"/>
                                                            <label className="form-check-label" htmlFor="amenitiesType5">Business Services</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="amenitiesType6"/>
                                                            <label className="form-check-label" htmlFor="amenitiesType6">Caretaker</label>
                                                        </div>
                                                        
                                                        <div className="multi-collapse collapse" id="amenitiesCollapes">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="amenitiesType7"/>
                                                                <label className="form-check-label" htmlFor="amenitiesType7">Dining</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="amenitiesType8"/>
                                                                <label className="form-check-label" htmlFor="amenitiesType8">Free Internet</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="amenitiesType9"/>
                                                                <label className="form-check-label" htmlFor="amenitiesType9">Hair nets</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="amenitiesType10"/>
                                                                <label className="form-check-label" htmlFor="amenitiesType10">Masks</label>
                                                            </div>
                                                        </div>
                                                        <a className="p-0 mb-0 mt-2 btn-more d-flex align-items-center collapsed" data-bs-toggle="collapse" href="#amenitiesCollapes" role="button" aria-expanded="false" aria-controls="amenitiesCollapes">
                                                            See <span className="see-more ms-1">more</span><span className="see-less ms-1">less</span><i className="fa-solid fa-angle-down ms-2"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="d-flex justify-content-between p-2 p-xl-0 mt-xl-4">
                                            <button className="btn btn-link p-0 mb-0">Clear all</button>
                                            <button className="btn btn-primary mb-0">Filter Result</button>
                                        </div>
                                    </div>                            
                                </aside>
                                <div className='col-xl-8 col-xxl-9'>
                                    <div className='vstack gap-4'>
                                        <HotelItemCard viewMode="list"/>
                                        <HotelItemCard viewMode="list"/>
                                        <HotelItemCard viewMode="list"/>
                                        <HotelItemCard viewMode="list"/>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className={`collapse ${showSearchPanel=== true ? 'show': ''}`} id="collapseFilter" >
                                <div className="card card-body bg-light p-4 mt-4 z-index-9">

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
                                                    <div className="noui-wrapper">
                                                        <div className="d-flex justify-content-between">
                                                            <input type="text" className="text-body input-with-range-min"/>
                                                            <input type="text" className="text-body input-with-range-max"/>
                                                        </div>
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
                        )
                    }
                </div>
            </section>
            {
                viewMode === 'grid' ? (
                    <section className='pt-0'>
                        <div className='container'>
                            <div className='row g-4'>
                                <div className='col-md-6 col-xl-4'>
                                    <HotelItemCard viewMode="grid"/>
                                </div>
                                <div className='col-md-6 col-xl-4'>
                                    <HotelItemCard viewMode="grid"/>
                                </div>
                                <div className='col-md-6 col-xl-4'>
                                    <HotelItemCard viewMode="grid"/>
                                </div>
                                <div className='col-md-6 col-xl-4'>
                                    <HotelItemCard viewMode="grid"/>
                                </div>
                                <div className='col-md-6 col-xl-4'>
                                    <HotelItemCard viewMode="grid"/>
                                </div>
                                <div className='col-md-6 col-xl-4'>
                                    <HotelItemCard viewMode="grid"/>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : null
            }
            <Footer />
        </div>
        
    )
}
export default SearchPage;