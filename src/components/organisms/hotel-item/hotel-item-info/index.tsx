import { HotelInfo } from "@constants/types"
import HotelAmenities from "@organisms/hotel-item/hotel-amenities-section";
import GoogleMapReact from 'google-map-react';

interface PropType {
    hotel: HotelInfo,
}
const HotelItemInfo = ({hotel}: PropType) => {
    return (
    <div>
        <div className="row pt-5 pb-4 px-4">
            <p className="fw-bold fs-5 pb-0 mb-4 text-grey-900">About {hotel.name}</p>
            <p className="text-grey-900 pt-3">{hotel.description}</p>
        </div>
        <div className="px-4">
            <HotelAmenities amenities={hotel.amenities} />
        </div>
        
        <div className="pt-0 px-0">
            <h4 className="px-4 mb-4">Location</h4>
            <div className="position-relative w-100" style={{height:'250px'}}>
                <GoogleMapReact
                    center={{
                        lat: hotel.geoLat,
                        lng: hotel.getLon
                    }}
                    bootstrapURLKeys={{ key: "" }}
                    // yesIWantToUseGoogleMapApiInternals
                    defaultZoom={10}
                >
                </GoogleMapReact>
            </div>
            <p className="p-2 text-grey-900" style={{backgroundColor:'var(--bs-gray-200)'}}>{hotel.address}</p>
        </div>
        <div className="px-4 text-grey-900">
            <h6 className='pt-3 pb-2'>Arrival / Depature</h6>
            <span className='d-block'>Check in: {hotel.checkin}</span>
            <span>Check out: {hotel.checkout}</span>
        </div>
        <div className="pt-3 pb-6 px-4 text-grey-900">
            <h6 className='pt-3 pb-2'>Contact</h6>
            <span className='d-block'>{hotel.address}</span>
            <span>Telephone: {hotel.telephone} | Fax: {hotel.fax} | <a href={hotel.url}>Official Homepage</a></span>
        </div>
    </div>
    )
};
export default HotelItemInfo;