import { faHandHoldingHeart, faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReferenceSection = () => {
    return (
        <section className="bg-light">
            <div className="container">
                <div className="row g-4">

                    <div className="col-md-6 col-xxl-4">
                        <div className="bg-body d-flex rounded-3 h-100 p-4">
                            <h3>
                                {/* <i className="fa-solid fa-hand-holding-heart"></i> */}
                                <FontAwesomeIcon icon={faHandHoldingHeart} />
                            </h3>
                            <div className="ms-3">
                                <h5>24x7 Help</h5>
                                <p className="mb-0">If we fall short of your expectation in any way, let us know</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-xxl-4">
                        <div className="bg-body d-flex rounded-3 h-100 p-4">
                            <h3>
                                <i className="fa-solid fa-hand-holding-usd"></i>
                                <FontAwesomeIcon icon={faHandHoldingUsd} />
                            </h3>
                            <div className="ms-3">
                                <h5>Payment Trust</h5>
                                <p className="mb-0">All refunds come with no questions asked guarantee</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-xl-5 col-xxl-3 ms-xxl-auto">
                        <h5 className="mb-4">Download app</h5>
                        <div className="row g-3">
                            <div className="col-6 col-sm-4 col-md-3 col-lg-6">
                                <a href="#"> <img src={require("@images/element/google-play.svg").default} alt=""/> </a>
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 col-lg-6">
                                <a href="#"> <img src={require("@images/element/app-store.svg").default} alt=""/> </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default ReferenceSection;