import { HotelInfo } from "@constants/types"

interface PropType {
    hotel: HotelInfo,
    text: string,
    [arg:string]: any
};

const HotelMapMarker = ({hotel, text} : PropType ) => {
    return (<div className="d-flex flex-column align-items-center gap-0 hotel-marker" style={{transform:'translate(-50%, -100%)', left:'50%'}}>
        <span className="border ms-0 rounded-5 p-1 px-2 bg-white text-grey-900 cursor-pointer fs-6 mb-1">$<span>{text}</span></span>
        <i className="bi bi-geo-alt pe-0 fs-5 me-0" style={{color:'red'}}></i>
    </div>)
}
export default HotelMapMarker;