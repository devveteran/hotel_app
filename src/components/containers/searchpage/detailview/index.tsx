import { HotelInfo, MapViewState } from '@constants/types';
import HotelItemInfo from '@organisms/hotel-item/hotel-item-info';
import HotelItemOverview from '@organisms/hotel-item/hotel-item-overview';
import HotelItemPhotos from '@organisms/hotel-item/hotel-item-photos';
import HotelItemReview from '@organisms/hotel-item/hotel-item-review';
import { RootState } from '@store/index';
import { useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

interface PropType {
    selectedTab : string,
    hotel: HotelInfo,
    hideDetailTab: () => void,
}
const DetailView = ({selectedTab, hotel, hideDetailTab} : PropType) => {
   
    return (
        <div className='mt-2'>
            <Tabs className={'border-bottom'}>
                <TabList className={"text-center p-0 border-bottom"}>
                    <Tab>Overview</Tab>
                    <Tab>Info</Tab>
                    <Tab>Photos</Tab>
                    <Tab>Reviews</Tab>
                    <Tab>Prices</Tab>
                </TabList>

                <TabPanel>
                    <HotelItemOverview hotel={hotel}/>
                </TabPanel>
                <TabPanel>
                    <HotelItemInfo hotel={hotel} />
                </TabPanel>
                <TabPanel>
                    <HotelItemPhotos hotel={hotel} />
                </TabPanel>
                <TabPanel>
                    <HotelItemReview hotel={hotel} />
                </TabPanel>
                <TabPanel>
                    <h2>Prices</h2>
                </TabPanel>
            </Tabs>
            <div className="px-6 row d-flex justify-content-end pt-2 pb-2">
                <label className="btn btn-primary-soft w-auto" onClick={hideDetailTab}>Close</label>
            </div>
        </div>
    )
}
export default DetailView;