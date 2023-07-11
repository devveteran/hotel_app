import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

interface PropType {
    selectedTab : string,
}
const DetailView = ({selectedTab} : PropType) => {
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
                    <h2>Overview</h2>
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