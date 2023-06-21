import Header from '@containers/common/header';
import {ConfigProvider} from 'antd';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {
  
  return (
    <ConfigProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={() => <Home/>} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
