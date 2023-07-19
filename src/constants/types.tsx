export interface ReviewType {
    [arg:string] : number
}

export interface ReviewDescType {
    rate: string,
    desc: string,
    writer: string,
    review_date: string,
    stay_date: string,
}

export interface PriceHistoryType {
    date: number
};

export interface DBHotelInfo {
    id: number,
    name: string,
    description: string,
    address: string,
    starRate: number,
    reviewRate: number,
    reviewCount: number,
    telephone: string,
    photoURIs: string,
    fax: string,
    url: string,
    checkin: string,
    checkout: string,
    amenitiesJSON: string,
    reviewsJSON: string,
    reviewDescsJSON: string,
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

export interface AmenityType {
    [arg: string] : Array<string>
};

export interface HotelInfo {
    id: number,
    name: string,
    description: string,
    address: string,
    starRate: number,
    reviewRate: number,
    reviewCount: number,
    telephone: string,
    photoURIs: Array<string>,
    fax: string,
    url: string,
    checkin: string,
    checkout: string,
    amenities: AmenityType,
    reviews: Array<ReviewType>,
    reviewDescs: Array<ReviewDescType>,
    guestNum: number,
    roomNum: number,
    geoLat: number,
    getLon: number,
    priceBookings: number,
    priceHotels: number,
    priceExpedia: number,
    urlBookings: string,
    urlExpedia: string,
    urlHotels: string,
    priceHistoryBookings: Array<PriceHistoryType>,
    priceHistoryExpedia: Array<PriceHistoryType>,
    priceHistoryHotels: Array<PriceHistoryType>
}

export const initialHotelInfo: HotelInfo = {
    id: 0,
    name: '',
    description: '',
    starRate: 0,
    reviewRate: 0,
    reviewCount: 0,
    address: '',
    telephone: '',
    photoURIs: [],
    fax: '',
    url: '',
    checkin: '',
    checkout: '',
    amenities: {},
    reviews: [],
    reviewDescs: [],
    guestNum: 0,
    roomNum: 0,
    geoLat: 0,
    getLon: 0,
    priceBookings: 0,
    priceHotels: 0,
    priceExpedia: 0,
    urlBookings: '',
    urlExpedia: '',
    urlHotels: '',
    priceHistoryBookings: [],
    priceHistoryExpedia: [],
    priceHistoryHotels: []
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

export const TopAmenitiesForSearch = [
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

export interface MapViewState {
    show: boolean,
    lat: number,
    lon: number
};
export const initialMapViewState = {
    show: false,
    lat: 10,
    lon: 10,
}
