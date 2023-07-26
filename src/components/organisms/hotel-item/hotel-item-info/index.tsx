import { HotelInfo } from "@constants/types"
import HotelAmenities from "@organisms/hotel-item/hotel-amenities-section";
import { RootState } from "@store/index";
import GoogleMap from 'google-map-react';
import { useState } from "react";
import { useSelector } from "react-redux";
import HotelMapMarker from "../hotel-marker-map";

interface PropType {
    hotel: HotelInfo,
    showAll: boolean,
}
const HotelItemInfo = ({hotel, showAll}: PropType) => {
    const [showAllAmenities, setShowAllAmenities] = useState<boolean>(showAll);
    const mapState = useSelector((state:RootState) => state.global.mapState);
    
    const setExtent =  (map: any, maps: any) => {
        let p = JSON.parse(JSON.stringify(hotel)) as HotelInfo
        let places = [p]
        places.map(place => {
            new maps.Marker({
                position: {
                    lat: place.geoLat,
                    lng: place.getLon,
                },
                map,
            });})

        var bounds = new maps.LatLngBounds()
        for (let place of places) {
            bounds.extend(
                new maps.LatLng(place.geoLat, place.getLon)
            )
        }
        map.fitBounds(bounds)
    }
        
    return (
    <div>
        <div className="row pt-5 pb-4 px-4">
            <p className="fw-bold fs-5 pb-0 mb-4 text-grey-900">About {hotel.name}</p>
            <p className="text-grey-900 pt-3">{hotel.description}</p>
        </div>
        <div className="px-4">
            <HotelAmenities hotelId={hotel.id} amenities={hotel.amenities} buttonLeft={true} showAll={showAllAmenities} 
                toggleAllAmenities={() => setShowAllAmenities(!showAllAmenities)}/>
        </div>
        
        {
            mapState.show === false ? (
                <div className="pt-0 px-0">
                    <h4 className="px-4 mb-4">Location</h4>
                    <div className="position-relative w-100" style={{height:'250px'}}>
                        <GoogleMap
                            defaultCenter={{
                                lat: hotel.geoLat,
                                lng: hotel.getLon
                            }}
                            bootstrapURLKeys={{ key: "" }}
                            // yesIWantToUseGoogleMapApiInternals
                            defaultZoom={8}
                            onGoogleApiLoaded={({map, maps}: {map:any, maps:any}) => setExtent(map, maps)}
                        >
                        </GoogleMap>
                    </div>
                    <p className="p-2 text-grey-900" style={{backgroundColor:'var(--bs-gray-200)'}}>{hotel.address}</p>
                </div>
            ) : null
        }

        <div className="px-4 text-grey-900">
            <h6 className='pt-3 pb-2'>Arrival / Depature</h6>
            <span className='d-block'>Check in: {hotel.checkin}</span>
            <span>Check out: {hotel.checkout}</span>
        </div>
        <div className="pt-3 pb-6 px-4 text-grey-900">
            <h6 className='pt-3 pb-2'>Contact</h6>
            <span className='d-block'>{hotel.address}</span>
            <span>Telephone: {hotel.telephone} | Fax: {hotel.fax} | <a target="_blank" href={hotel.url}>Official Homepage</a></span>
        </div>
    </div>
    )
};
export default HotelItemInfo;