export interface ReviewType {
    [arg:string] : number
}

export interface ReviewDescType {
    rate: string,
    desc: string,
    writer: string,
    review_date: string,
    stay_date: string,
    review_from: '' | 'hotels' | 'booking' | 'expedia', // new
}

export interface PriceHistoryType {
    date: number
};

export interface DBHotelInfo {
    id: number,
    code: number,
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
    priceHistoryHotels: string,
    reviewHotels: number,
    reviewExpedia: number,
    reviewBooking: number,
    reviewCountHotels: number,
    reviewCountExpedia: number,
    reviewCountBooking: number,
    otherPrices: string,
}

export interface AmenityType {
    [arg: string] : Array<string>
};

export interface PriceFilterType {
    freeCancel: boolean,
    freeBreakfast: boolean,
    payAtHotel: boolean,
};

export const initialPriceFilter: PriceFilterType = {
    freeCancel: false,
    freeBreakfast: false,
    payAtHotel: false,
};

export interface OtherPrices {
    from: '' | 'hotels' | 'booking' | 'expedia',
    prices: Array<PriceInfo>
}
export const initialOtherPrices: OtherPrices = {
    from: '',
    prices: [],
};

export interface HotelInfo {
    id: number,
    code: number,
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
    priceHistoryHotels: Array<PriceHistoryType>,
    
    otherPrices: Array<OtherPrices>, //new
    reviewHotels: number,
    reviewExpedia: number,
    reviewBooking: number,
    reviewCountHotels: number,
    reviewCountExpedia: number,
    reviewCountBooking: number,
}

export const initialHotelInfo: HotelInfo = {
    id: 0,
    code: 0,
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
    priceHistoryHotels: [],

    otherPrices: [], //new
    reviewHotels: 0,
    reviewExpedia: 0,
    reviewBooking: 0,
    reviewCountHotels: 0,
    reviewCountExpedia: 0,
    reviewCountBooking: 0,
}

export interface PriceInfo {
    title: string,
    featured: boolean,
    price: number,
    priceTwoNights: number,
    url: string,
    priceFeature: PriceFilterType,
}

export const initialPriceInfo : PriceInfo = {
    title: '',
    featured: false,
    price: 0,
    priceTwoNights: 0,
    url: '',
    priceFeature: {...initialPriceFilter},
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
    lat: 0,
    lon: 0,
}

export interface UserInfoType {
    id: number,
    name: string,
    email: string,
    password: string,
    regdate: string,
    logcount: number,
    lastlogindate: string,
}

export const defaultUserInfo: UserInfoType = {
    id: 0,
    name: '',
    email: '',
    password: '',
    regdate: '',
    logcount: 0,
    lastlogindate : ''
}