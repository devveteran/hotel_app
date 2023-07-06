import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./homecarosel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlipay } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
};

const CarouselSection = () => {
    return (
        <section className='className="pb-2 pb-lg-5 home-carousel'>
            <div className='container'>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={false}
                    autoPlaySpeed={1000}
                    keyBoardControl={false}
                    customTransition="all 1s"
                    centerMode={false}
                    itemClass={'carousel'}
                    transitionDuration={1000}
                    // containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    rewind={false}
                >
                    <div className="tns-item1">
                        <div className="card border rounded-3 overflow-hidden">
                            <div className="row g-0 align-items-center">
                                <div className="col-sm-6">
                                    <img src={require("@images/offer/01.jpg")} className="card-img rounded-0" alt=""/>
                                </div>

                                <div className="col-sm-6">
                                    <div className="card-body px-3">
                                        <h6 className="card-title">
                                            <Link to={"/"} className="stretched-link">Daily 50 Lucky Winners get a Free Stay</Link>
                                        </h6>
                                        <p className="mb-0">Valid till: 15 Nov</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tns-item1">
                        <div className="tns-item1 card border rounded-3 overflow-hidden">
                            <div className="row g-0 align-items-center">
                                <div className="col-sm-6">
                                    <img src={require("@images/offer/02.jpg")} className="card-img rounded-0" alt=""/>
                                </div>

                                <div className="col-sm-6">
                                    <div className="card-body px-3">
                                        <h6 className="card-title">
                                            <Link to={"/"} className="stretched-link">Daily 50 Lucky Winners get a Free Stay</Link>
                                        </h6>
                                        <p className="mb-0">Valid till: 15 Nov</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tns-item1">
                        <div className="tns-item1 card border rounded-3 overflow-hidden">
                            <div className="row g-0 align-items-center">
                                <div className="col-sm-6">
                                    <img src={require("@images/offer/03.jpg")} className="card-img rounded-0" alt=""/>
                                </div>

                                <div className="col-sm-6">
                                    <div className="card-body px-3">
                                        <h6 className="card-title">
                                            <Link to={"/"} className="stretched-link">Daily 50 Lucky Winners get a Free Stay</Link>
                                        </h6>
                                        <p className="mb-0">Valid till: 15 Nov</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tns-item1">
                        <div className="tns-item1 card border rounded-3 overflow-hidden">
                            <div className="row g-0 align-items-center">
                                <div className="col-sm-6">
                                    <img src={require("@images/offer/04.jpg")} className="card-img rounded-0" alt=""/>
                                </div>

                                <div className="col-sm-6">
                                    <div className="card-body px-3">
                                        <h6 className="card-title">
                                            <Link to={"/"} className="stretched-link">Daily 50 Lucky Winners get a Free Stay</Link>
                                        </h6>
                                        <p className="mb-0">Valid till: 15 Nov</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>                  
            </div>
        </section>
              
    )
}
export default CarouselSection;