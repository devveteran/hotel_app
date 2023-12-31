import { Link } from "react-router-dom";

const ExploreSection = () => {
    return (
        <section>
            <div className="container">
                <div className="row mb-4">
                    <div className="col-12 text-center">
                        <h2 className="mb-0">Explore Nearby</h2>
                    </div>
                </div>

                <div className="row g-4 g-md-5">
                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                        <div className="card bg-transparent text-center p-1 h-100">
                            <img src={require("@images/category/hotel/nearby/01.jpg")} className="rounded-circle" alt=""/>

                            <div className="card-body p-0 pt-3">
                                <h5 className="card-title">
                                    <Link to={"/"} className="stretched-link">San Francisco</Link>
                                </h5>
                                <span>13 min drive</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                        <div className="card bg-transparent text-center p-1 h-100">
                            <img src={require("@images/category/hotel/nearby/02.jpg")} className="rounded-circle" alt=""/>

                            <div className="card-body p-0 pt-3">
                                <h5 className="card-title"><Link to={'/'} className="stretched-link">Los Angeles</Link></h5>
                                <span>25 min drive</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                        <div className="card bg-transparent text-center p-1 h-100">
                            <img src={require("@images/category/hotel/nearby/03.jpg")} className="rounded-circle" alt=""/>

                            <div className="card-body p-0 pt-3">
                                <h5 className="card-title"><Link to={'/'} className="stretched-link">Miami</Link></h5>
                                <span>45 min drive</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                        <div className="card bg-transparent text-center p-1 h-100">
                            <img src={require("@images/category/hotel/nearby/04.jpg")} className="rounded-circle" alt=""/>

                            <div className="card-body p-0 pt-3">
                                <h5 className="card-title"><Link to={'/'} className="stretched-link">Sanjosh</Link></h5>
                                <span>55 min drive</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                        <div className="card bg-transparent text-center p-1 h-100">
                            <img src={require("@images/category/hotel/nearby/05.jpg")} className="rounded-circle" alt=""/>

                            <div className="card-body p-0 pt-3">
                                <h5 className="card-title"><Link to={'/'} className="stretched-link">New York</Link></h5>
                                <span>1-hour drive</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                        <div className="card bg-transparent text-center p-1 h-100">
                            <img src={require("@images/category/hotel/nearby/06.jpg")} className="rounded-circle" alt=""/>

                            <div className="card-body p-0 pt-3">
                                <h5 className="card-title"><Link to={'/'} className="stretched-link">North Justen</Link></h5>
                                <span>2-hour drive</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                        <div className="card bg-transparent text-center p-1 h-100">
                            <img src={require("@images/category/hotel/nearby/07.jpg")} className="rounded-circle" alt=""/>

                            <div className="card-body p-0 pt-3">
                                <h5 className="card-title"><Link to={'/'} className="stretched-link">Rio</Link></h5>
                                <span>20 min drive</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                        <div className="card bg-transparent text-center p-1 h-100">
                            <img src={require("@images/category/hotel/nearby/08.jpg")} className="rounded-circle" alt=""/>

                            <div className="card-body p-0 pt-3">
                                <h5 className="card-title"><Link to={'/'} className="stretched-link">Las Vegas</Link></h5>
                                <span>3-hour drive</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                        <div className="card bg-transparent text-center p-1 h-100">
                            <img src={require("@images/category/hotel/nearby/09.jpg")} className="rounded-circle" alt=""/>

                            <div className="card-body p-0 pt-3">
                                <h5 className="card-title"><Link to={'/'} className="stretched-link">Texas</Link></h5>
                                <span>55 min drive</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                        <div className="card bg-transparent text-center p-1 h-100">
                            <img src={require("@images/category/hotel/nearby/10.jpg")} className="rounded-circle" alt=""/>

                            <div className="card-body p-0 pt-3">
                                <h5 className="card-title"><Link to={'/'} className="stretched-link">Chicago</Link></h5>
                                <span>13 min drive</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                        <div className="card bg-transparent text-center p-1 h-100">
                            <img src={require("@images/category/hotel/nearby/11.jpg")} className="rounded-circle" alt=""/>

                            <div className="card-body p-0 pt-3">
                                <h5 className="card-title"><Link to={'/'} className="stretched-link">New Keagan</Link></h5>
                                <span>35 min drive</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                        <div className="card bg-transparent text-center p-1 h-100">
                            <img src={require("@images/category/hotel/nearby/01.jpg")} className="rounded-circle" alt=""/>

                            <div className="card-body p-0 pt-3">
                                <h5 className="card-title"><Link to={'/'} className="stretched-link">Oslo</Link></h5>
                                <span>1 hour 13 min drive</span>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    );
}
export default ExploreSection;