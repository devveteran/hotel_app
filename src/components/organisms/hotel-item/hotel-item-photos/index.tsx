import { HotelInfo } from "@constants/types"
import './style.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { server } from "@services/axios";
import { useEffect, useRef, useState } from "react";

interface PropType {
    hotel: HotelInfo,
}

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
};
const HotelItemPhotos = ({hotel}: PropType ) => {
    const refCarousel = useRef<any>(null);
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [totalSlides, setTotalSlides] = useState<number>(0);

    const updateLabelCarousel = () => {
        if (refCarousel.current !== null) {
            setCurrentSlide(refCarousel.current.state.currentSlide);
        }
    }
    useEffect(() => {
        if (refCarousel.current !== null) {
            setTotalSlides(refCarousel.current.state.totalItems);
        }
    }, []);

    return (
        <div>
            <div className="position-relative mb-2 d-none d-xl-block">
                <div className="row row-cols-4 mb-0 px-4">
                    {
                        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((ele, i) => {
                            return (
                                <li key={ele} className="list-group-item">
                                    <img className="rounded-3 d-sm-block w-100 p-1 hotel-card-img" 
                                    src={`${server}/Images/${hotel.id}/${i<9 && i > 0 ? i : i===0 ? 1 : (i-8)}.webp`} draggable="false"/>
                                </li>
                            )
                        })
                    }
                </div>
                <div className='position-absolute w-100 bg-gradient-bottom pb-2 px-0 mx-0' >
                    <label className='btn border-dark btn-white' style={{left:'50%', transform:'translateX(-50%)'}}>
                        Show more photos
                    </label>
                </div>
            </div>
            <div className="d-block d-xl-none mb-3">
                <Carousel
                    ref={refCarousel}
                    afterChange={updateLabelCarousel}
                    className={`tns-ovh `}
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    // infinite={true}
                    // autoPlay={false}
                    // keyBoardControl={false}
                    customTransition="all 0.5s"
                    centerMode={false}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // rewind={true}
                >
                    {
                        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((ele, i) => {
                            return (
                                <div key={ele} className="tns-item rounded-2 d-flex justify-content-center">
                                    <img src={`${server}/Images/${hotel.id}/${i<9 && i > 0 ? i : i===0 ? 1 : (i-8)}.webp`} draggable="false"/>
                                </div>
                            )
                        })
                    }
                </Carousel>
                <div className="d-flex justify-content-center w-100 py-2">
                    <span className="text-grey-900">
                        {currentSlide + 1} / {totalSlides}
                    </span>
                </div>
            </div>
        </div>
    )
}
export default HotelItemPhotos;