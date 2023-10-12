import { HotelInfo, OtherPrices, PriceFilterType, PriceInfo, initialPriceFilter, initialPriceInfo } from "@constants/types"
import "./style.scss";
import { useEffect, useRef, useState } from "react";
import PriceItem from "../hotel-price-item";

interface PropType {
    hotel: HotelInfo
};

const HotelItemPrices = ({hotel}: PropType) => {
    const [filter, setFilter] = useState<PriceFilterType>({...initialPriceFilter});
    const [expandedFrom, setExpandedFrom] = useState<{[arg:string]:boolean}>({});
    const [collapsedSection, setCollapsedSection] = useState<string>("");
    const refScrollTargetAfterCollapsed = useRef<any>(null);
    // const [sort, setSort] = useState<string>("recommended");
    const [otherPrices, setOtherPrices] = useState<Array<OtherPrices>>(JSON.parse(JSON.stringify(hotel.otherPrices)));

    const onChangeSort = (v: any) => {
        // setSort(v.target.value);
        let sort = v.target.value;
        if (sort === 'recommended') {
            setOtherPrices(JSON.parse(JSON.stringify(hotel.otherPrices)));
        } else if (sort === 'price-asc') {
            let tmpPrices = JSON.parse(JSON.stringify(otherPrices)) as Array<OtherPrices>;
            let newPrices = tmpPrices.sort((a, b) => (
                a.prices.sort((pa, pb) => pa.price > pb.price ? 1 : -1)[0] > b.prices.sort((pa, pb) => pa.price > pb.price ? 1 : -1)[0] ? 1: -1
            ));
            setOtherPrices(JSON.parse(JSON.stringify(newPrices)));
        }
    }
    
    const updateFilter = (v: any) => {
        setFilter({...filter, ...v});
    }

    const toggleExpand = (v: string) => {
        let tmpState = JSON.parse(JSON.stringify(expandedFrom));
        let bFound = false;
        let collapsedSec = "";

        Object.keys(expandedFrom).forEach((ele, i) => {
            if (ele === v) {
                let val = expandedFrom[ele];
                tmpState = {...tmpState, [ele]:!val};
                if (val === true)
                    collapsedSec = ele;
                bFound = true;
            }
        })
        if (!bFound) {
            tmpState = {...tmpState, [v]:true};
        }
        // console.log(tmpState);
        setCollapsedSection(collapsedSec);
        setExpandedFrom({...tmpState});
    }
    
    useEffect(() => {
        if (collapsedSection !== "") {
            if (refScrollTargetAfterCollapsed.current !== null)
                refScrollTargetAfterCollapsed.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
            setCollapsedSection("");
        }
    }, [collapsedSection]);

    const getOtherprices = (ele: OtherPrices) => {
        let ary = [];
        ele.prices.filter(e => 
            (
                e.featured === true && 
                (filter.freeCancel === true ? e.priceFeature.freeCancel===true : true) &&
                (filter.freeBreakfast === true ? e.priceFeature.freeBreakfast===true : true) &&
                (filter.payAtHotel === true ? e.priceFeature.payAtHotel===true : true)
            )
        )
        .sort((a, b) => a.price > b.price ? 1 : -1)
        .forEach((info, j) => {
             ary.push(<PriceItem price={info} from={`${j === 0 ? ele.from : ''}`}/>);
        });
        ele.prices.filter(e => 
            (
                e.featured === false && 
                (filter.freeCancel === true ? e.priceFeature.freeCancel===true : true) &&
                (filter.freeBreakfast === true ? e.priceFeature.freeBreakfast===true : true) &&
                (filter.payAtHotel === true ? e.priceFeature.payAtHotel===true : true)
            )
        )
        .sort((a, b) => a.price > b.price ? 1 : -1)
        .forEach((info, j) => {
            ary.push(<PriceItem price={info} 
                from={`${j === 0 && (ele.prices.filter(fe => (fe.featured === true)).length === 0) ? ele.from : ''}`}/>);
        });
        ary.push(<label className="text-primary link p-2 w-100 cursor-pointer ms-4" onClick={() => toggleExpand(ele.from)}>Show fewer deals</label>);        
        
        return <div>
            {ary}
        </div>
    }

    return (
        <div className="px-4 d-flex flex-column">
            <div className="d-flex">
                <div className="d-block pe-2">
                    <p className="mb-1 text-grey-900 fw-bold">Sort by:</p>
                    <select className="form-select p-2 rounded-2 border pe-7" onChange={onChangeSort}>
                        <option value="recommended">Our recommendations</option>
                        <option value="price-asc">Price from low to high</option>
                    </select>
                </div>
                <div className="d-block px-2 mb-3">
                    <p className="mb-1 text-grey-900 fw-bold">Filter by:</p>
                    <div className="d-flex">
                        <label className="chk-hover cursor-pointer py-2 px-3 rounded-5 border me-2" htmlFor={`chk_free_cancel_${hotel.id}`} >
                            <input className="form-check-input ms-0 me-2" type="checkbox" value="" id={`chk_free_cancel_${hotel.id}`} 
                                checked={filter.freeCancel}
                                onChange={() => updateFilter({freeCancel: !filter.freeCancel})}/>
                            <span className="text-grey-900 user-select-none" >
                                Free Cancellation
                            </span>
                        </label>
                        <label className="chk-hover cursor-pointer py-2 px-3 rounded-5 border me-2" htmlFor={`chk_free_breakfast_${hotel.id}`}>
                            <input className="form-check-input ms-0 me-2" type="checkbox" value="" id={`chk_free_breakfast_${hotel.id}`} 
                                checked={filter.freeBreakfast}
                                onChange={() => updateFilter({freeBreakfast: !filter.freeBreakfast})}/>
                            <span className="text-grey-900 user-select-none">
                                Free breakfast
                            </span>
                        </label>
                        <label className="chk-hover cursor-pointer py-2 px-3 rounded-5 border me-0"  htmlFor={`chk_pay_hotel_${hotel.id}`}>
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
                {/* <div className={`rounded-2 border mb-3 ${otherPrices.length === 0 ? 'd-none' : ''}`}></div> */}
                {
                    //a.prices.sort((ap1, ap2) => (ap1.price > ap2.price)).at(0)?.price > 
                    // b.prices.sort((bp1, bp2) => (bp1.price > bp2.price)).at(0)?.price
                    otherPrices.map((ele, i) => {
                        if(expandedFrom[ele.from] && expandedFrom[ele.from] === true) {
                            if (ele.prices.filter(e => 
                                (
                                    (filter.freeCancel === true ? e.priceFeature.freeCancel===true : true) &&
                                    (filter.freeBreakfast === true ? e.priceFeature.freeBreakfast===true : true) &&
                                    (filter.payAtHotel === true ? e.priceFeature.payAtHotel===true : true)
                                )
                            ).length > 0) {
                                return <div key={hotel.code + "_" + ele.from + "_" + i} className="border rounded-2 mb-3">
                                    {getOtherprices(ele)}
                                </div>
                            } else return null
                        } else {
                            if (ele.prices.filter(e => 
                                ( e.featured === true &&
                                    (filter.freeCancel === true ? e.priceFeature.freeCancel===true : true) &&
                                    (filter.freeBreakfast === true ? e.priceFeature.freeBreakfast===true : true) &&
                                    (filter.payAtHotel === true ? e.priceFeature.payAtHotel===true : true)
                                )
                            ).length > 0) {
                                return <div key={hotel.code + "_" + ele.from + "_" + i} className="rounded-2 border mb-3" ref={ele.from === collapsedSection ? refScrollTargetAfterCollapsed : null}>
                                    <PriceItem 
                                        price = {
                                            ele.prices.filter(e => 
                                                (
                                                    e.featured === true  &&
                                                    (filter.freeCancel === true ? e.priceFeature.freeCancel===true : true) &&
                                                    (filter.freeBreakfast === true ? e.priceFeature.freeBreakfast===true : true) &&
                                                    (filter.payAtHotel === true ? e.priceFeature.payAtHotel===true : true)
                                                )
                                            )
                                            .sort((a, b) => a.price > b.price ? 1 : -1).at(0) || initialPriceInfo
                                        }
                                        from={ele.from} />
                                    {
                                        (ele.prices.filter(e => 
                                            (
                                                (filter.freeCancel === true ? e.priceFeature.freeCancel===true : true) &&
                                                (filter.freeBreakfast === true ? e.priceFeature.freeBreakfast===true : true) &&
                                                (filter.payAtHotel === true ? e.priceFeature.payAtHotel===true : true)
                                            )
                                        ).length - 1) > 0 ? (
                                            <label className="text-primary p-2 link cursor-pointer w-100 ms-4" onClick={() => toggleExpand(ele.from)}>
                                                Show {ele.prices.filter(e => 
                                                (
                                                    (filter.freeCancel === true ? e.priceFeature.freeCancel===true : true) &&
                                                    (filter.freeBreakfast === true ? e.priceFeature.freeBreakfast===true : true) &&
                                                    (filter.payAtHotel === true ? e.priceFeature.payAtHotel===true : true)
                                                )
                                            ).length - 1} more prices from {ele.from}.com
                                            </label>
                                        ) : null
                                    }
                                </div>
                            } else if(ele.prices.filter(e => 
                                (
                                    (filter.freeCancel === true ? e.priceFeature.freeCancel===true : true) &&
                                    (filter.freeBreakfast === true ? e.priceFeature.freeBreakfast===true : true) &&
                                    (filter.payAtHotel === true ? e.priceFeature.payAtHotel===true : true)
                                )
                            ).length > 0){
                                return <div key={hotel.code + "_" + ele.from + "_" + i} className="rounded-2 border mb-3" ref={ele.from === collapsedSection ? refScrollTargetAfterCollapsed : null}>
                                    <PriceItem 
                                        price = {
                                            ele.prices.filter(e => 
                                                (
                                                    (filter.freeCancel === true ? e.priceFeature.freeCancel===true : true) &&
                                                    (filter.freeBreakfast === true ? e.priceFeature.freeBreakfast===true : true) &&
                                                    (filter.payAtHotel === true ? e.priceFeature.payAtHotel===true : true)
                                                )
                                            )
                                            .sort((a, b) => a.price > b.price ? 1 : -1).at(0) || initialPriceInfo
                                        } 
                                        from={ele.from} />
                                        {
                                        (ele.prices.filter(e => 
                                            (
                                                (filter.freeCancel === true ? e.priceFeature.freeCancel===true : true) &&
                                                (filter.freeBreakfast === true ? e.priceFeature.freeBreakfast===true : true) &&
                                                (filter.payAtHotel === true ? e.priceFeature.payAtHotel===true : true)
                                            )
                                        ).length - 1) > 0 ? (
                                            <label className="text-primary p-2 link cursor-pointer w-100 ms-4" onClick={() => toggleExpand(ele.from)}>
                                                Show {ele.prices.filter(e => 
                                                (
                                                    (filter.freeCancel === true ? e.priceFeature.freeCancel===true : true) &&
                                                    (filter.freeBreakfast === true ? e.priceFeature.freeBreakfast===true : true) &&
                                                    (filter.payAtHotel === true ? e.priceFeature.payAtHotel===true : true)
                                                )
                                            ).length - 1} more prices from {ele.from}.com
                                            </label>
                                        ) : null
                                    }
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