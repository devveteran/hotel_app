import { HotelInfo, MapViewState } from '@constants/types';
import HotelItemInfo from '@organisms/hotel-item/hotel-item-info';
import HotelItemOverview from '@organisms/hotel-item/hotel-item-overview';
import HotelItemPhotos from '@organisms/hotel-item/hotel-item-photos';
import HotelItemPrices from '@organisms/hotel-item/hotel-item-prices';
import HotelItemReview from '@organisms/hotel-item/hotel-item-review';
import { RootState } from '@store/index';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

interface PropType {
    selectedTab : string,
    hotel: HotelInfo,
    hideDetailTab: () => void,
    viewDetail: (v: string) => void,
}
const tabs : {[arg:string] : number} = {
    "overview" : 0,
    "info" : 1,
    "photos" : 2,
    "reviews" : 3,
    "prices" : 4,
    "info-all": 1,
}
var BreakException = {};
const DetailView = ({selectedTab, hotel, hideDetailTab, viewDetail} : PropType) => {
    // const [tabIndex, setTabIndex] = useState<number>(0);
    
    const onSelectTab = (v: any) => {
        let key = "";
        try {
            Object.keys(tabs).forEach((e, i) => {
                let val = Object.values(tabs)[i];
                if (val == v) {
                    key = e;
                    throw BreakException;
                }
            });
        }catch (e) {
            if (e !== BreakException ) throw e;
        }
        if (key !== selectedTab)
            viewDetail(key);
    }

    return (
        <div className='mt-2'>
            <Tabs className={'border-bottom'} selectedIndex={tabs[selectedTab]} onSelect={onSelectTab}>
                <TabList className={"text-center p-0 border-bottom"}>
                    <Tab style={{userSelect:'none'}}>Overview</Tab>
                    <Tab style={{userSelect:'none'}}>Info</Tab>
                    <Tab style={{userSelect:'none'}}>Photos</Tab>
                    <Tab style={{userSelect:'none'}}>Reviews</Tab>
                    <Tab style={{userSelect:'none'}}>Prices</Tab>
                </TabList>

                <TabPanel>
                    <HotelItemOverview hotel={hotel} viewDetail={viewDetail}/>
                </TabPanel>
                <TabPanel>
                    <HotelItemInfo hotel={hotel} showAll={selectedTab === "info-all" ? true : false} />
                </TabPanel>
                <TabPanel>
                    <HotelItemPhotos hotel={hotel} />
                </TabPanel>
                <TabPanel>
                    <HotelItemReview hotel={hotel} />
                </TabPanel>
                <TabPanel>
                    <HotelItemPrices hotel={hotel}/>
                </TabPanel>
            </Tabs>
            <div className="px-4 d-flex justify-content-end pt-2 pb-2">
                <label className="btn btn-primary-soft w-auto" onClick={hideDetailTab}>Close</label>
            </div>
        </div>
    )
}
export default DetailView;