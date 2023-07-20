import { HotelInfo, OtherPrices, PriceFilterType, PriceInfo, initialPriceFilter, initialPriceInfo } from "@constants/types"
import "./style.scss";
import { useState } from "react";
import PriceItem from "../hotel-price-item";

interface PropType {
    hotel: HotelInfo
};

const _price: PriceInfo = {
    title: "Superior King Room - Free WiFi",
    featured: false,
    price: 125,
    priceTwoNights: 250,
    url: "https://localhost:3000",
    priceFeature: initialPriceFilter
}

const _prices = [
    {..._price, featured:true},
    _price,
    _price,
    _price,
    _price
];
const otherPrices: Array<OtherPrices> = [
    {
        from: 'hotels',
        prices: _prices
    },
    {
        from: 'expedia',
        prices: _prices
    },
];

const HotelItemPrices = ({hotel}: PropType) => {
    const [filter, setFilter] = useState<PriceFilterType>({...initialPriceFilter});
    const [expandedFrom, setExpandedFrom] = useState<{[arg:string]:boolean}>({});

    const updateFilter = (v: any) => {
        setFilter({...filter, ...v});
    }

    const toggleExpand = (v: string) => {
        let tmpState = JSON.parse(JSON.stringify(expandedFrom));
        let bFound = false;

        Object.keys(expandedFrom).forEach((ele, i) => {
            if (ele === v) {
                let val = expandedFrom[ele];
                tmpState = {...tmpState, [ele]:!val};
                bFound = true;
            }
        })
        if (!bFound) {
            tmpState = {...tmpState, [v]:true};
        }
        setExpandedFrom({...tmpState});
    }

    return (
        <div className="px-4 d-flex flex-column">
            <div className="d-flex">
                <div className="d-block pe-2">
                    <p className="mb-1 text-grey-900 fw-bold">Sort by:</p>
                    <select className="form-select p-2 rounded-2 border pe-7">
                        <option>Our recommendations</option>
                        <option>Price from low to high</option>
                    </select>
                </div>
                <div className="d-block px-2 mb-3">
                    <p className="mb-1 text-grey-900 fw-bold">Filter by:</p>
                    <div className="d-flex">
                        <label className="cursor-pointer py-2 px-3 rounded-5 border me-2" htmlFor={`chk_free_cancel_${hotel.id}`} >
                            <input className="form-check-input ms-0 me-2" type="checkbox" value="" id={`chk_free_cancel_${hotel.id}`} 
                                checked={filter.freeCancel}
                                onChange={() => updateFilter({freeCancel: !filter.freeCancel})}/>
                            <span className="text-grey-900 user-select-none" >
                                Free Cancellation
                            </span>
                        </label>
                        <label className="cursor-pointer py-2 px-3 rounded-5 border me-2" htmlFor={`chk_free_breakfast_${hotel.id}`}>
                            <input className="form-check-input ms-0 me-2" type="checkbox" value="" id={`chk_free_breakfast_${hotel.id}`} 
                                checked={filter.freeBreakfast}
                                onChange={() => updateFilter({freeBreakfast: !filter.freeBreakfast})}/>
                            <span className="text-grey-900 user-select-none">
                                Free breakfast
                            </span>
                        </label>
                        <label className="cursor-pointer py-2 px-3 rounded-5 border me-0"  htmlFor={`chk_pay_hotel_${hotel.id}`}>
                            <input className="form-check-input ms-0 me-2" type="checkbox" value="" id={`chk_pay_hotel_${hotel.id}`} 
                                checked={filter.payAtHotel}
                                onChange={() => updateFilter({payAtHotel: !filter.payAtHotel})}/>
                            <span className="text-grey-900 user-select-none">
                                Pay at the property
                            </span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column flex-grow-1">
            {
                otherPrices.map((ele, i) => {
                    if(expandedFrom[ele.from] && expandedFrom[ele.from] === true) {
                        ele.prices.filter(e => (e.featured === true)).sort((a, b) => a.price > b.price ? 1 : -1).map((info, j) => {
                            return <PriceItem price={info} from={`${i === 0 ? ele.from : ''}`}/>
                        })
                        ele.prices.filter(e => (e.featured === false)).sort((a, b) => a.price > b.price ? 1 : -1).map((info, j) => {
                            return <PriceItem price={info} 
                                from={`${i === 0 && (ele.prices.filter(fe => (fe.featured === true)).length === 0) ? ele.from : ''}`}/>
                        })
                        return (<label className="text-primary link p-2 w-100 cursor-pointer" onClick={() => toggleExpand(ele.from)}>Show fewer deals</label>)
                    } else {
                        if (ele.prices.filter(e => (e.featured === true)).length > 0) {
                            return <div className="rounded-2 border mb-3">
                                <PriceItem 
                                    price = {
                                        ele.prices.filter(e => (e.featured === true)).sort((a, b) => a.price > b.price ? 1 : -1).at(0) || initialPriceInfo
                                    } 
                                    from={ele.from}/>
                                <label className="text-primary p-2 link cursor-pointer w-100" onClick={() => toggleExpand(ele.from)}>
                                    Show {ele.prices.length - 1} more prices from {ele.from}.com
                                </label>
                            </div>
                        } else {
                            return <div className="rounded-2 border mb-3">
                                <PriceItem 
                                    price = {
                                        ele.prices.sort((a, b) => a.price > b.price ? 1 : -1).at(0) || initialPriceInfo
                                    } 
                                    from={ele.from} />
                                <label className="text-primary link p-2 cursor-pointer w-100" onClick={() => toggleExpand(ele.from)}>
                                    Show {ele.prices.length - 1} more deals
                                </label>
                            </div>
                        }
                    }
                })
            }
            </div>            
        </div>
        
    )
}
export default HotelItemPrices;