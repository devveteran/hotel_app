import { HotelInfo } from "@constants/types"
import HotelRatingSection from "../hotel-rating-section"
import { useEffect, useRef, useState } from "react"
import ReactSlider from 'react-slider';
import './style.scss';

interface PropType {
    hotel: HotelInfo,
}
const HotelItemReview = ({hotel}: PropType) => {
    const [showAllReviews, setShowAllReviews] = useState<boolean>(false);
    const refFirstReview = useRef<any>(null);
    
    useEffect(() => {
        // console.log(hotel.reviews);
    });

    const toggleShowAllReviews = (v: boolean) => {
        setShowAllReviews(v);
        if (refFirstReview.current !== null) {
            refFirstReview.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        }
    }

    return (
        <div className="px-4 pt-3">
            <HotelRatingSection hotel={hotel} showButton={false}/>
            <div className="row row-cols-2 px-0 mx-0 w-100 justify-content-between">
                {
                    Object.keys(hotel.reviews).map((ele, i) => {
                        return (
                            <div key={ele} className='d-flex col-md-5 my-2 px-0'>
                                <label className="text-grey-900 col-md-4">{ele}</label>
                                <ReactSlider
                                    className="rating-slider mt-2 col-md-8"
                                    disabled={true}
                                    trackClassName="rating-track"
                                    min={0}
                                    max={10}
                                    value={[0, Number(Object.values(hotel.reviews)[i])]}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <div className="mt-4 pb-4">
                <p className="fw-bold fs-5 pb-0 mb-4 text-grey-900">Guest reviews</p>
                {
                    hotel.reviewDescs.map((ele, i) => {
                        if (showAllReviews === true || (showAllReviews === false && i === 0))
                            return (
                                <div ref={i===0 ? refFirstReview : null} key={ele.writer + ele.review_date} className="d-block">
                                    <div className="d-flex justify-content-between">
                                        <p className="fs-5 text-grey-900">{ele.rate}</p>
                                        <div className="d-block text-end">
                                            <span className="d-block small">Genuine review from</span>
                                            <img className="review-brand" src={require(`@images/brands/${ele.review_from ? ele.review_from : 'hotels'}.png`)}/>
                                        </div>
                                    </div>
                                    <p className="mt-2 mb-3">{ele.desc}</p>
                                    <p className="my-1 fw-bold">{ele.writer}</p>
                                    <p className="my-0 small">Date of <span className="fw-bold">review</span>: {ele.review_date}</p>
                                    <p className="mt-0 small">Date of <span className="fw-bold">stay</span>: {ele.stay_date}</p>
                                </div>
                            )
                        else
                            return null
                    })
                }
                {
                    showAllReviews === false ?
                        <a className="fw-bold text-primary cursor-pointer link" onClick={() => toggleShowAllReviews(true)}>Show more reviews</a>
                    : 
                        <a className="fw-bold text-primary cursor-pointer link" onClick={() => toggleShowAllReviews(false)}>Show less reviews</a>
                }
            </div>
        </div>
    )
}
export default HotelItemReview;