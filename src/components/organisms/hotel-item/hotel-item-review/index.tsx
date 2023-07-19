import { HotelInfo } from "@constants/types"
import HotelRatingSection from "../hotel-rating-section"
import { useEffect } from "react"
import ReactSlider from 'react-slider';
import './style.scss';

interface PropType {
    hotel: HotelInfo,
}
const HotelItemReview = ({hotel}: PropType) => {
    
    useEffect(() => {
        console.log(hotel.reviews);
    });

    return (
        <div className="px-4 pt-3">
            <HotelRatingSection hotel={hotel} showButton={false}/>
            <div className="row row-cols-2 px-0 mx-0 w-100 justify-content-between">
                {
                    Object.keys(hotel.reviews).map((ele, i) => {
                        return (
                            <div className='d-flex col-md-5 my-2 px-0'>
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
        </div>
    )
}
export default HotelItemReview;