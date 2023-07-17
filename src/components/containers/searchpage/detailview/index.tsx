import { HotelInfo } from '@constants/types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

interface PropType {
    selectedTab : string,
    hotel: HotelInfo,
}
const DetailView = ({selectedTab, hotel} : PropType) => {
    return (
        <div className='mt-2'>
            <Tabs>
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Info</Tab>
                    <Tab>Photos</Tab>
                    <Tab>Reviews</Tab>
                </TabList>

                <TabPanel>
                    {hotel.description}
                </TabPanel>
                <TabPanel>
                    <h2>Info</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Photos</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Reviews</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}
export default DetailView;