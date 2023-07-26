import { AmenityType } from "@constants/types";
import { useEffect, useRef } from "react";

interface PropType {
    hotelId: number,
    amenities: AmenityType,
    buttonLeft: boolean,
    showAll: boolean,
    toggleAllAmenities: () => void
}

interface AmenityItemType {
    name: string,
    value: boolean,
};
const initialAmenityItem: AmenityItemType = {
    name: '',
    value: false,
};

interface TopAmenitesType {
    freeWiFi: AmenityItemType,
    parking: AmenityItemType,
    pets: AmenityItemType,
    aircond: AmenityItemType,
    restaurant: AmenityItemType,
    pool: AmenityItemType,
    spa: AmenityItemType,
    hotelbar: AmenityItemType,
    gym: AmenityItemType,
};
const initialTopAmenities: TopAmenitesType = {
    freeWiFi: {...initialAmenityItem, name:'Free WiFi'},
    parking: {...initialAmenityItem, name:'Parking'},
    pets: {...initialAmenityItem, name:'Pets'},
    aircond: {...initialAmenityItem, name:'A/C'},
    restaurant: {...initialAmenityItem, name:'Restaurant'},
    pool: {...initialAmenityItem, name:'Pool'},
    spa: {...initialAmenityItem, name:'Spa'},
    hotelbar: {...initialAmenityItem, name:'Hotel Bar'},
    gym: {...initialAmenityItem, name:'Gym'},
};

const HotelAmenities = ({amenities, buttonLeft, showAll, toggleAllAmenities, hotelId}: PropType) => {
    const refAmenitiesToFocus = useRef<any>(null);
    const refAmenitiesToggleBtn = useRef<any>(null);
    let topAmenities: TopAmenitesType = initialTopAmenities;

    Object.keys(amenities).forEach((ele, i) => {
        let items = amenities[ele];
        items.forEach((e, j) => {
            let lower_e = e.toLowerCase();
            if (lower_e === "free wifi") {
                topAmenities.freeWiFi.value = true;
            } else if (lower_e === "a/c" || lower_e === "air conditioning") {
                topAmenities.aircond.value = true;
            } else if (lower_e === "restaurant") {
                topAmenities.restaurant.value = true;
            } else if (lower_e === "hotel bar") {
                topAmenities.hotelbar.value = true;
            } else if (lower_e === "gym") {
                topAmenities.gym.value = true;
            } else if (lower_e === "pool") {
                topAmenities.pool.value = true;
            } else if (lower_e === "spa") {
                topAmenities.spa.value = true;
            } else if (lower_e === "parking") {
                topAmenities.parking.value = true;
            } else if (lower_e === "pets") {
                topAmenities.pets.value = true;
            }
        });
    });
    
    const ElementAmenitiy = (element: string) => {
        if (element.toLowerCase() === "freewifi")
            return <span className="leading-none inline-flex transform h-6 w-6 mr-3" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="pointer-events-none max-h-full max-w-full">
                    <g fill="currentColor">
                    <path d="M13.77 16.73a.54.54 0 01-.36-.14 2 2 0 00-2.82 0 .51.51 0 01-.71 0 .5.5 0 010-.71 3.08 3.08 0 014.24 0 .5.5 0 010 .71.52.52 0 01-.35.14z">
                    </path>
                    <path d="M15.18 15.32a.49.49 0 01-.35-.15 4.1 4.1 0 00-5.66 0 .5.5 0 01-.71 0 .51.51 0 010-.71 5 5 0 017.08 0 .51.51 0 010 .71.51.51 0 01-.36.15zM19.42 11.08a.5.5 0 01-.35-.15 10 10 0 00-14.14 0 .5.5 0 01-.71-.71 11 11 0 0115.56 0 .51.51 0 010 .71.51.51 0 01-.36.15z">
                    </path>
                    <path d="M20.84 9.66a.47.47 0 01-.35-.15 12 12 0 00-17 0 .49.49 0 01-.7-.7 13 13 0 0118.38 0 .5.5 0 01-.35.85zM13.77 16.73a.54.54 0 01-.36-.14 2 2 0 00-2.82 0 .51.51 0 01-.71 0 .5.5 0 010-.71 3.08 3.08 0 014.24 0 .5.5 0 010 .71.52.52 0 01-.35.14zM16.6 13.9a.54.54 0 01-.36-.14 6 6 0 00-8.48 0 .51.51 0 01-.71 0 .5.5 0 010-.71 7 7 0 019.9 0 .5.5 0 010 .71.54.54 0 01-.35.14z">
                    </path>
                    <path d="M18 12.49a.47.47 0 01-.35-.15 8 8 0 00-11.32 0 .49.49 0 01-.7-.7 9 9 0 0112.72 0 .48.48 0 010 .7.47.47 0 01-.35.15z">
                    </path>
                    <circle cx="12" cy="19" r="1">
                    </circle>
                    </g>
                </svg>
            </span>
        else if (element.toLowerCase() === "parking") {
            return <span className="leading-none inline-flex transform h-6 w-6 mr-3" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="pointer-events-none max-h-full max-w-full"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 11h-3v5.46a.5.5 0 11-1 0V5.54A.52.52 0 019.5 5H13a4 4 0 010 8zm0-7h-3v6h3a3 3 0 000-6z" fill="currentColor"></path></svg>
            </span>
        }
        else if (element.toLowerCase() === "pets") {
            return <span className="leading-none inline-flex transform h-6 w-6 mr-3" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="pointer-events-none max-h-full max-w-full">
                    <g fill="currentColor">
                    <path d="M12 11c-3.53 0-6 3-6 7.22C6 19.26 6 21 7.75 21a4.11 4.11 0 002-.82 5.05 5.05 0 012.26-1 5.29 5.29 0 012.29 1 4.14 4.14 0 002 .82c1.7 0 1.7-1.67 1.7-2.78C18 14 15.53 11 12 11z"></path>
                    <ellipse cx="4.5" cy="11.5" rx="2.33" ry="2.66" transform="rotate(-45.01 4.5 11.493)"></ellipse>
                    <ellipse cx="8.5" cy="7" rx="2.49" ry="3.01" transform="rotate(-7.48 8.53 7.01)"></ellipse>
                    <ellipse cx="19.5" cy="11.5" rx="2.66" ry="2.33" transform="rotate(-44.99 19.497 11.497)"></ellipse>
                    <ellipse cx="15.5" cy="7" rx="3.01" ry="2.49" transform="rotate(-82.52 15.5 7.003)"></ellipse>
                    </g>
                </svg>
            </span>
        }
        else if (element.toLowerCase() === "aircond") {
            return <span className="leading-none inline-flex transform h-6 w-6 mr-3" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="pointer-events-none max-h-full max-w-full">
                    <path d="M21.35 12.74L16.58 14 13 12l3.54-2 4.77 1.22a.51.51 0 00.63-.35.49.49 0 00-.37-.61l-3.76-1 3-1.65A.49.49 0 0021 7a.53.53 0 00-.71-.18l-3 1.64 1-3.61a.45.45 0 00-.05-.38.53.53 0 00-.95.12l-1.23 4.58-3.54 2V7.21L16 3.85a.48.48 0 000-.7.53.53 0 00-.74 0l-2.74 2.64V2.5a.52.52 0 00-1 0v3.29L8.73 3.15a.53.53 0 00-.74 0 .48.48 0 000 .7l3.49 3.36v3.92l-3.54-2-1.28-4.54a.52.52 0 00-1 .26l1 3.61-3-1.64A.53.53 0 003 7a.49.49 0 00.19.68l3 1.65-3.76 1a.49.49 0 00-.37.61.51.51 0 00.63.35L7.42 10 11 12l-3.58 2-4.77-1.26a.51.51 0 00-.63.35.49.49 0 00.37.61l3.76 1-3 1.65A.49.49 0 003 17a.53.53 0 00.71.18l3-1.64-1 3.61a.52.52 0 001 .26l1.28-4.58 3.54-2v3.92L8 20.15a.48.48 0 000 .7.53.53 0 00.74 0l2.75-2.64v3.29a.52.52 0 001 0v-3.29l2.75 2.64a.55.55 0 00.37.15.53.53 0 00.37-.15.48.48 0 000-.7l-3.49-3.36v-3.92l3.54 2 1.28 4.58a.51.51 0 00.63.35.5.5 0 00.37-.61l-1-3.61 3 1.64A.53.53 0 0021 17a.49.49 0 00-.19-.68l-3-1.65 3.76-1a.51.51 0 00.32-.23.46.46 0 00.05-.38.51.51 0 00-.59-.32z" fill="currentColor"></path>
                </svg>
            </span>
        }
        else if (element.toLowerCase() === "restaurant") {
            return <span className="leading-none inline-flex transform h-6 w-6 mr-3" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="pointer-events-none max-h-full max-w-full">
                    <g fill="currentColor">
                        <path d="M4.71 4.29a1 1 0 00-1.18-.17.69.69 0 00-.2.13 1 1 0 00-.06 1.35l7.07 8.48a.93.93 0 00.14.14 1 1 0 00.58.22 1 1 0 00.76-.29l.7-.71 6.66 6.37a.5.5 0 00.71-.71zM9.08 14.22l-4.93 4.94a.49.49 0 10.69.69L9.73 15l-.21-.21zM20.86 5.93a.5.5 0 00-.7 0l-3.48 3.48a.47.47 0 01-.69 0 .48.48 0 010-.7l3.47-3.48a.49.49 0 10-.69-.69L15.29 8a.48.48 0 01-.7 0 .47.47 0 010-.69l3.48-3.48a.49.49 0 00-.7-.7L13.55 7a2 2 0 000 2.78l-.91.91.7.68.9-.9a2 2 0 002.78 0l3.83-3.82a.5.5 0 00.01-.72z"></path>
                    </g>
                </svg>
            </span>
        }
        else if (element.toLowerCase() === "pool") {
            return <span className="leading-none inline-flex transform h-6 w-6 mr-3" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="pointer-events-none max-h-full max-w-full">
                    <path d="M22 20.73l-2-7a1 1 0 00-1-.73h-3V3.5a.5.5 0 011 0v1a.5.5 0 001 0v-1a1.5 1.5 0 00-3 0V7H8V3.5a.5.5 0 011 0v1a.5.5 0 001 0v-1a1.5 1.5 0 00-3 0V13H5a1 1 0 00-1 .73l-2 7a1 1 0 00.16.87A1 1 0 003 22h18a1 1 0 00.8-.4 1 1 0 00.2-.87zM15 8v2H8V8zm-7 3h7v2H8zm1 10a2 2 0 01-2-2 1 1 0 00-2 0 .5.5 0 01-1 0 2 2 0 014 0 1 1 0 002 0 .5.5 0 011 0 2 2 0 01-2 2zm1-5a1 1 0 00-2 0 .5.5 0 01-1 0 2 2 0 014 0 1 1 0 002 0 2 2 0 014 0 .5.5 0 01-1 0 1 1 0 00-2 0 2 2 0 01-4 0zm9.5 3.5a.5.5 0 01-.5-.5 1 1 0 00-2 0 2 2 0 01-4 0 .5.5 0 011 0 1 1 0 002 0 2 2 0 014 0 .5.5 0 01-.5.5z" fill="currentColor"></path>
                </svg>
            </span>
        }
        else if (element.toLowerCase() === "spa") {
            return <span className="leading-none inline-flex transform h-6 w-6 mr-3" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="pointer-events-none max-h-full max-w-full">
                    <g fill="currentColor">
                    <path d="M16 12a4 4 0 01-8 0c0-2.21 4-7 4-7s4 4.79 4 7z">
                    </path>
                    <path d="M17 12.53a5.23 5.23 0 01-.21 1C19.43 14.12 21 15.18 21 16c0 1.22-3.51 3-9 3s-9-1.78-9-3c0-.82 1.57-1.88 4.26-2.5a5.23 5.23 0 01-.21-1c-3 .69-5 2-5 3.47 0 2.21 4.48 4 10 4s10-1.79 10-4C22 14.51 20 13.22 17 12.53z">
                    </path>
                    <path d="M17.83 16c-.67.42-2.69 1-5.83 1s-5.16-.58-5.83-1a6.79 6.79 0 012.12-.68 5.1 5.1 0 01-.63-.89C6 14.8 5 15.36 5 16c0 1.1 3.13 2 7 2s7-.9 7-2c0-.64-1-1.2-2.66-1.57a5.1 5.1 0 01-.63.89 6.79 6.79 0 012.12.68z">
                    </path>
                    </g>
                </svg>
            </span>
        }
        else if (element.toLowerCase() === "hotelbar") {
            return <span className="leading-none inline-flex transform h-6 w-6 mr-3" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="pointer-events-none max-h-full max-w-full">
                    <path d="M12.71 15.71l6-6a1 1 0 00.21-1.09A1 1 0 0018 8h-7.92L9 5.31a.36.36 0 00-.11-.16.24.24 0 00-.08-.06L8.69 5a.41.41 0 00-.19 0h-3a.5.5 0 000 1h2.67L9 8H6a1 1 0 00-.92.62 1 1 0 00.21 1.09l6 6 .21.2V21h-3a.5.5 0 000 1h7a.5.5 0 000-1h-3v-5.09zM14 10a1 1 0 11-1 1 1 1 0 011-1z" fill="currentColor"></path>
                </svg>
            </span>
        }
        else if (element.toLowerCase() === "gym") {
            return <span className="leading-none inline-flex transform h-6 w-6 mr-3" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="pointer-events-none max-h-full max-w-full">
                    <g fill="currentColor">
                        <path d="M5 8a1 1 0 011 1v7a1 1 0 01-1 1 1 1 0 01-1-1v-3H2.5a.5.5 0 010-1H4V9a1 1 0 011-1zM16 6a1 1 0 011 1v10a1 1 0 01-1 1 1 1 0 01-1-1v-4H9v4a1 1 0 01-1 1 1 1 0 01-1-1V7a1 1 0 011-1 1 1 0 011 1v5h6V7a1 1 0 011-1zM22 12.5a.5.5 0 01-.5.5H20v3a1 1 0 01-1 1 1 1 0 01-1-1V9a1 1 0 011-1 1 1 0 011 1v3h1.5a.5.5 0 01.5.5z"></path>
                    </g>
                </svg>
            </span>
        }
    }

    const getAmenityItems = (ary: Array<string>) => {
        let ret = [<></>];
        ary.forEach((ele, i) => {
            ret.push(<li className="text-grey-900 small">{ele}</li>);
        });
        return <>{ret}</>
    }

    useEffect(() => {
        if (showAll === true) {
            if (refAmenitiesToFocus.current !== null) {
                refAmenitiesToFocus.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
            }
        } 
        // else {
        //     if (refAmenitiesToggleBtn.current !== null) {
        //         refAmenitiesToggleBtn.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        //     }
        // }
    }, [showAll]);
    
    return (
        <div className="mb-4">
            <article className="text-grey-900 mb-2">
                <p className="fw-bold fs-5 pb-0 mb-4 text-grey-900">Top amenities</p>
                {/* <h4 className="text-heading-m font-bold mb-4">
                    <span>Top amenities</span>
                </h4> */}
                <ul className="row row-cols-3 m-0 p-0">
                    {
                        Object.keys(topAmenities).map((ele, i) => {
                            let val = Object.values(topAmenities)[i];
                            if (val.value === true) {
                                return <li key={"ame_av_"+ hotelId +"_" + i} className={`list-group-item mb-3`}>
                                    {ElementAmenitiy(ele)}
                                    <span className="text-s">{val.name}</span>
                                </li>
                            } else
                                return null
                        })
                    }
                    {
                        Object.keys(topAmenities).map((ele, i) => {
                            let val = Object.values(topAmenities)[i];
                            if (val.value === false) {
                                return <li key={"ame_unav_" + hotelId + "_" + i} className={`list-group-item mb-3 opacity-25`}>
                                    {ElementAmenitiy(ele)}
                                    <span className="text-s">{val.name}</span>
                                </li>
                            } else
                                return null
                        })
                    }
                    {/* <li className={`list-group-item mb-3 ${topAmenities.freeWiFi.value === true ? '' : 'opacity-25'}`}>
                        {ElementAmenitiy('freeWifi')}
                        <span className="text-s">Free WiFi</span>
                    </li>
                    <li className={`list-group-item mb-3 ${topAmenities.aircond.value === true ? '' : 'opacity-25'}`}>
                        {ElementAmenitiy('aircond')}
                        <span className="text-s">A/C</span>
                    </li>
                    <li className={`list-group-item mb-3 ${topAmenities.restaurant.value === true ? '' : 'opacity-25'}`}>
                        {ElementAmenitiy('restaurant')}
                        <span className="text-s">Restaurant</span>
                    </li>
                    <li className={`list-group-item mb-3 ${topAmenities.hotelbar.value === true ? '' : 'opacity-25'}`}>
                        {ElementAmenitiy('hotelbar')}
                        <span className="text-s">Hotel bar</span>
                    </li>
                    <li className={`list-group-item mb-3 ${topAmenities.gym.value === true ? '' : 'opacity-25'}`}>
                        {ElementAmenitiy('gym')}
                        <span className="text-s">Gym</span>
                    </li>
                    <li className={`list-group-item mb-3 ${topAmenities.pool.value === true ? '' : 'opacity-25'}`}>
                        {ElementAmenitiy('pool')}
                        <span className="text-s">Pool</span>
                    </li>
                    <li className={`list-group-item mb-3 ${topAmenities.spa.value === true ? '' : 'opacity-25'}`}>
                        {ElementAmenitiy('spa')}
                        <span className="text-s">Spa</span>
                    </li>
                    <li className={`list-group-item mb-3 ${topAmenities.parking.value === true ? '' : 'opacity-25'}`}>
                        {ElementAmenitiy('parking')}
                        <span className="text-s">Parking</span>
                    </li>
                    <li className={`list-group-item mb-3 ${topAmenities.pets.value === true ? '' : 'opacity-25'}`}>
                        {ElementAmenitiy('pets')}
                        <span className="text-s">Pets</span>
                    </li> */}
                </ul>
            </article>
            <div className={`d-table w-100 ${showAll === true ? 'd-block' : 'd-none'}`}>
                {
                    Object.keys(amenities).map((ele, i) => {
                        return (
                            <div key={hotelId + "_" + ele + "_" + i} className="float-start mb-4 col-4">
                                <p ref={i === 0 ? refAmenitiesToFocus : null} className="text-grey-900">{ele}</p>
                                <ul>
                                    {getAmenityItems(amenities[ele])}
                                </ul>
                            </div>
                        )
                    })
                }
            </div>            
            <footer className={`${buttonLeft === true ? 'text-start' : 'text-end'} mt-0 pt-0`}>
                <label ref={refAmenitiesToggleBtn} className={`${buttonLeft === true ? 'text-primary fw-bold cursor-pointer text-grey-900 mb-3' : 'btn btn-primary-check border'}`}
                    onClick={toggleAllAmenities}>
                    {showAll ? 'Hide' : 'Show'} all amenities
                </label>
            </footer>
        </div>        
    )
}
export default HotelAmenities;