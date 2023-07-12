export interface HotelInfo {
    id: number,
    name: string,
    description: string,
    address: string,
    telephone: string,
    photoURIs: string,
    fax: string,
    url: string,
    checkin: string,
    checkout: string,
    amenitiesJSON: any,
    reviewsJSON: any,
    reviewDescsJSON: any,
    guestNum: number,
    roomNum: number,
    geoPosition: string,
    priceBookings: number,
    priceHotels: number,
    priceExpedia: number,
    urlBookings: string,
    urlExpedia: string,
    urlHotels: string,
    priceHistoryBookings: string,
    priceHistoryExpedia: string,
    priceHistoryHotels: string
}

export const initialHotelInfo: HotelInfo = {
    id: 0,
    name: '',
    description: '',
    address: '',
    telephone: '',
    photoURIs: '',
    fax: '',
    url: '',
    checkin: '',
    checkout: '',
    amenitiesJSON: {},
    reviewsJSON: {},
    reviewDescsJSON: {},
    guestNum: 0,
    roomNum: 0,
    geoPosition: '',
    priceBookings: 0,
    priceHotels: 0,
    priceExpedia: 0,
    urlBookings: '',
    urlExpedia: '',
    urlHotels: '',
    priceHistoryBookings: '',
    priceHistoryExpedia: '',
    priceHistoryHotels: ''
}
export interface CustomerRatingType {
    threePlus: boolean,
    threeHalfPlus: boolean,
    fourPlus: boolean,
    fourHalfPlus: boolean,
}

export const initialCustomerRating : CustomerRatingType = {
    threePlus : false,
    threeHalfPlus: false,
    fourPlus: false,
    fourHalfPlus: false
}

export interface StarRatingType {
    starOne: boolean,
    starTwo: boolean,
    starThree: boolean,
    starFour: boolean,
    starFive: boolean,
}

export const initialStarRating : StarRatingType = {
    starOne: false,
    starTwo: false,
    starThree: false,
    starFour: false,
    starFive: false,
}

export const TopAmenities = [
    "Air Conditioning",
    "Room Services",
    "Dining",
    "Caretaker",
    "Free Internet",
    "Business Service",
    "Bonfire",
    "Mask",
    "Spa",
    "Swimming pool",
    "Fitness Centre",
    "Bar"
];
export interface SearchParamType {
    location: string,
    dateCheckin: string,
    dateCheckout: string,
    adultNum: number,
    childNum: number,
    roomNum: number,
}
export const initialSearchParam : SearchParamType= {
    location: '',
    dateCheckin: new Date().toString(),
    dateCheckout: new Date().toString(),
    adultNum: 0,
    childNum: 0,
    roomNum: 0
};
