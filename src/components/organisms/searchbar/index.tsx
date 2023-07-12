import Searchable from 'react-searchable-dropdown';
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import { Dropdown } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchParam } from '@store/reducers/global';
import { RootState } from '@store/index';
import { SearchParamType } from '@constants/types';

const SearchBar = () => {
    const searchParam = useSelector((state:RootState) => state.global.searchParam);
    const [localSearchParam, setLocalSearchParam] = useState<SearchParamType>(searchParam);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect( () => {
        setLocalSearchParam({...searchParam});
    }, [searchParam]);

    const onSearch = () => {
        dispatch(setSearchParam(localSearchParam));
        navigate('/search');
    }
    const increaseAdult = (e: any, v:number) => {
        e.preventDefault();
        if (localSearchParam.adultNum + v >= 0)
            setLocalSearchParam({...localSearchParam, adultNum: (localSearchParam.adultNum + v) }  );
        else
            setLocalSearchParam({...localSearchParam, adultNum: 0 }  );
    }

    const increaseChild = (e: any, v:number) => {
        e.preventDefault();
        if (localSearchParam.childNum + v >= 0)
            setLocalSearchParam({...localSearchParam, childNum: (localSearchParam.childNum + v) } );
        else
            setLocalSearchParam({...localSearchParam, childNum: 0 }  );
    }
    const increaseRoom = (e: any, v:number) => {
        e.preventDefault();
        if (localSearchParam.roomNum + v >= 0)
            setLocalSearchParam({...localSearchParam, roomNum: (localSearchParam.roomNum + v) } );
        else
            setLocalSearchParam({...localSearchParam, roomNum: 0 } );
    }
    return (
        // bg-mode shadow rounded-3 position-relative p-4 pe-md-5 pb-5 pb-md-4 mb-4
            <form className="card shadow rounded-3 position-relative p-4 pe-md-5 pb-5 pb-md-4">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-4">
                        <div className="form-control-border form-control-transparent form-fs-md d-flex">
                            <i className="bi bi-geo-alt fs-3 me-2 mt-2"></i>
                            <div className="flex-grow-1">
                                <label className="form-label" style={{zIndex:11}}>Location</label>
                                <div id="selected-location" className="choices" data-type="select-one" tabIndex={0} role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false" style={{position:'relative'}}>
                                    <Searchable 
                                        value={localSearchParam.location}
                                        placeholder="Select Location" // by default "Search"
                                        notFoundText="No results found" // by default "No result found"
                                        
                                        options={[{
                                            value: '1',
                                            label: 'San Jacinto, USA'
                                        }, {
                                            value: '2',
                                            label: 'North Dakota, Canada'
                                        },{
                                            value: '3',
                                            label: 'West Virginia, Paris'
                                        }]}
                                        onSelect={(value:any) => {
                                            setLocalSearchParam({...localSearchParam, location: value})
                                        }}
                                        listMaxHeight={200} //by default 140
                                    />                                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="d-flex">
                            <i className="bi bi-calendar fs-3 me-2 mt-2"></i>
                            <div className="form-control-border form-control-transparent form-fs-md">
                                <label className="form-label">Check in - out</label>
                                <Flatpickr
                                    placeholder="Select date"
                                    className="form-control flatpickr flatpickr-input"
                                    options={{mode:'range', dateFormat:'d M', enableTime:false}}
                                    value={[new Date(Date.parse(localSearchParam.dateCheckin)), new Date(Date.parse(localSearchParam.dateCheckout))]}
                                    onChange={(data : Array<Date>) => {
                                        if (data.length === 2){
                                            setLocalSearchParam({...localSearchParam, dateCheckin:data[0].toString(), dateCheckout:data[1].toString()})
                                        }
                                    }}
                                />                                                
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="form-control-border form-control-transparent form-fs-md d-flex">
                            <i className="bi bi-person fs-3 me-2 mt-2"></i>
                            <div className="w-100" id="select-guest-div">
                                <label className="form-label">Guests &amp; rooms</label>
                                <Dropdown className="guest-selector me-2" autoClose={"outside"}>
                                    <Dropdown.Toggle id="select-guest-button" variant="link" className="form-guest-selector form-control selection-result" style={{textAlign:'left'}}>
                                        {`${localSearchParam.adultNum + localSearchParam.childNum} Guests ${localSearchParam.roomNum} Rooms`}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="dropdown-menu guest-selector-dropdown">
                                        <Dropdown.Item className="d-flex justify-content-between">
                                            <div>
                                                <h6 className="mb-0">Adults</h6>
                                                <small>Ages 13 or above</small>
                                            </div>

                                            <div className="hstack gap-1 align-items-center">
                                                <button type="button" className="btn btn-link adult-remove p-0 mb-0" onClick={(e:any) => increaseAdult(e, -1)}>
                                                    <i className="bi bi-dash-circle fs-5 fa-fw"></i>
                                                </button>
                                                <h6 className="guest-selector-count mb-0 adults">{localSearchParam.adultNum}</h6>
                                                <button type="button" className="btn btn-link adult-add p-0 mb-0" onClick={(e:any) => increaseAdult(e, 1)}>
                                                    <i className="bi bi-plus-circle fs-5 fa-fw"></i>
                                                </button>
                                            </div>
                                        </Dropdown.Item>
                                        <div className="dropdown-divider"></div>
                                        <Dropdown.Item className="d-flex justify-content-between">
                                            <div>
                                                <h6 className="mb-0">Child</h6>
                                                <small>Ages 13 below</small>
                                            </div>

                                            <div className="hstack gap-1 align-items-center">
                                                <button type="button" className="btn btn-link child-remove p-0 mb-0" onClick={(e: any) => increaseChild(e, -1)}>
                                                    <i className="bi bi-dash-circle fs-5 fa-fw"></i>
                                                </button>
                                                <h6 className="guest-selector-count mb-0 child">{localSearchParam.childNum}</h6>
                                                <button type="button" className="btn btn-link child-add p-0 mb-0" onClick={(e: any) => increaseChild(e, 1)}>
                                                    <i className="bi bi-plus-circle fs-5 fa-fw"></i>
                                                </button>
                                            </div>
                                        </Dropdown.Item>
                                        <div className="dropdown-divider"></div>
                                        <Dropdown.Item className="d-flex justify-content-between">
                                            <div>
                                                <h6 className="mb-0">Rooms</h6>
                                                <small>Max room 8</small>
                                            </div>

                                            <div className="hstack gap-1 align-items-center">
                                                <button type="button" className="btn btn-link room-remove p-0 mb-0" onClick={(e: any) => increaseRoom(e, -1)}>
                                                    <i className="bi bi-dash-circle fs-5 fa-fw"></i>
                                                </button>
                                                <h6 className="guest-selector-count mb-0 rooms">{localSearchParam.roomNum}</h6>
                                                <button type="button" className="btn btn-link room-add p-0 mb-0" onClick={(e: any) => increaseRoom(e, 1)}>
                                                    <i className="bi bi-plus-circle fs-5 fa-fw"></i>
                                                </button>
                                            </div>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>                                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-position-md-middle">
                    <label className="icon-lg btn btn-round btn-primary mb-0" 
                        onClick={onSearch}>
                        {
                            //to={`/search/${getURLParam()}`}
                        }
                        <i className="bi bi-search fa-fw"></i>
                    </label>
                </div>
            </form>
    );
}
export default SearchBar;