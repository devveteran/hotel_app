const LeftSearchPanel = () => {
    return ( 
        <div className="offcanvas-xl offcanvas-end" tabIndex={-1} id="offcanvasSidebar" aria-labelledby="offcanvasSidebarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasSidebarLabel">Advance Filters</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar" aria-label="Close"></button>
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
    )
}
export default LeftSearchPanel;