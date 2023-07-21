import { evalReviewWord } from "@constants/functions";
import { HotelInfo } from "@constants/types"

interface PropType {
    hotel: HotelInfo,
    showButton: boolean
    viewDetail?: (v: string) => void,
}
const HotelRatingSection = ({hotel, showButton, viewDetail}: PropType) => {
    return (
        <div className="pb-3 mb-0 text-grey-900">
            <div className="mb-2">
                <article>
                    <div className="d-flex flex-row justify-content-between">
                        <div className="col-md-5">
                            {/* <h4 className="text-heading-m font-bold mb-4 leading-none">Rating</h4> */}
                            <p className="fw-bold fs-5 pb-0 mb-2 text-grey-900">Rating</p>
                            <p className="pb-1 mb-0">
                                <meta itemProp="worstRating" content="0"/>
                                <meta itemProp="bestRating" content="10"/>
                                <meta itemProp="ratingCount" content="5105"/>
                                <span className='fs-3 mb-0'><strong>{((hotel.reviewBooking + hotel.reviewExpedia + hotel.reviewHotels) / 3).toFixed(1)}</strong>/10</span>
                            </p>
                            <span className="d-block mt-0">{evalReviewWord(((hotel.reviewBooking + hotel.reviewExpedia + hotel.reviewHotels) / 3))}</span>
                        </div>
                        <div className="col-md-7 text-s text-end small">
                            <a className="mb-2 block text-primary-hover" href="#" target="_blank" rel="noopener noreferrer"><strong>Our Rating Index</strong><sup>®</sup>&nbsp;based on <strong>{hotel.reviewCountBooking + hotel.reviewCountExpedia + hotel.reviewCountHotels}</strong> reviews from: </a>
                            <ul className="list-group mt-2">
                                <li className="list-group-item border-0 p-0 text-grey-900 cursor-pointer user-select-none" title="Read reviews on Hotels.com">
                                    <span><span className="fw-bold">Hotels.com {hotel.reviewHotels}</span>/10</span>
                                </li>
                                <li className="list-group-item border-0 p-0 text-grey-900 cursor-pointer user-select-none" title="Read reviews on Expedia">
                                    <span><span className="fw-bold">Expedia {hotel.reviewExpedia}</span>/10</span>
                                </li>
                                <li className="list-group-item border-0 p-0 text-grey-900 cursor-pointer user-select-none" title="Read reviews on ebookers.com">
                                    <span><span className="fw-bold">Booking.com {hotel.reviewBooking}</span>/10</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
                {
                    showButton === true ? (
                        <footer className="text-end mt-3">
                            <label className="btn btn-primary-check border" onClick={viewDetail ? () => viewDetail("reviews") : () => {}}>Show all reviews</label>
                        </footer>
                    ) : null
                }
                
            </div>
        </div>        
    )
}
export default HotelRatingSection;