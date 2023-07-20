import { HotelInfo } from "@constants/types"

interface PropType {
    hotel: HotelInfo,
    showButton: boolean
}
const HotelRatingSection = ({hotel, showButton}: PropType) => {
    return (
        <div className="pb-3 mb-0 text-grey-900">
            <div className="mb-2">
                <article>
                    <div className="row">
                        <div className="col-md-5">
                            {/* <h4 className="text-heading-m font-bold mb-4 leading-none">Rating</h4> */}
                            <p className="fw-bold fs-5 pb-0 mb-2 text-grey-900">Rating</p>
                            <p className="pb-1 mb-0">
                                <meta itemProp="worstRating" content="0"/>
                                <meta itemProp="bestRating" content="10"/>
                                <meta itemProp="ratingCount" content="5105"/>
                                <span className='fs-3 mb-0'><strong>9.2</strong>/10</span>
                            </p>
                            <span className="d-block mt-0">Excellent</span>
                        </div>
                        <div className="col-md-7 text-s text-end">
                            <a className="mb-2 block text-primary-hover" href="https://company.trivago.com/trivago-rating-index" target="_blank" rel="noopener noreferrer"><strong>trivago Rating Index</strong><sup>®</sup>&nbsp;based on <strong>5105</strong> reviews from: </a>
                            <ul className="list-group mt-2">
                                <li className="list-group-item border-0 p-0 text-grey-900" title="Read reviews on Hotels.com">
                                    <span><span className="fw-bold">Hotels.com 9.4</span>/10</span>
                                </li>
                                <li className="list-group-item border-0 p-0 text-grey-900" title="Read reviews on Expedia">
                                    <span><span className="fw-bold">Expedia 9.4</span>/10</span>
                                </li>
                                <li className="list-group-item border-0 p-0 text-grey-900" title="Read reviews on ebookers.com">
                                    <span><span className="fw-bold">ebookers.com 9.0</span>/10</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
                {
                    showButton === true ? (
                        <footer className="text-end mt-3">
                            <button type="button" className="btn btn-primary-check border">Show all reviews</button>
                        </footer>
                    ) : null
                }
                
            </div>
        </div>        
    )
}
export default HotelRatingSection;