import './App.scss';
import Home from './pages/home';
import { useEffect, useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SearchPage from './pages/searchpage';
import Login from './pages/login';
import LoginModal from '@containers/common/signup_modal';
import { GlobalContext } from '@context/usercontext';
import { STORAGE_USERINFO_KEY } from '@constants/constants';
import { UserInfoType } from '@constants/types';

export const insertScript = (scriptToAdd: string) => {
  const script = document.createElement("script");
  script.src = scriptToAdd;
  // script.async = true;
  document.body.appendChild(script);
}

export const insertLocalScript = (scriptToAdd: string) => {
  const script = document.createElement("script");
  script.innerHTML = require(`./assets/${scriptToAdd}`);
  // script.async = true;
  document.body.appendChild(script);
}

export const removeScript = (scriptToremove: string) => {
  let allsuspects = document.getElementsByTagName("script");
    if (allsuspects === null)
      return;
    for (let i=allsuspects.length; i>=0; i--){
      let suspect = allsuspects[i];
      if (suspect === null)
        return;
      if (allsuspects[i] && allsuspects[i].getAttribute("src")!==null && suspect?.getAttribute("src")?.indexOf(`${scriptToremove}`) !== -1 ){
        suspect?.parentNode?.removeChild(allsuspects[i]);
      }
    }
}

function App() {
  const {userInfo, setUserInfo} = useContext(GlobalContext);
  useEffect(() => {
    if (userInfo.name === '') {
      const userdata = localStorage.getItem(STORAGE_USERINFO_KEY);
//      console.log("---", userdata)

      if (userdata !== null)
        setUserInfo(JSON.parse(userdata) as UserInfoType);
  }
  }, []);
  
  return (
    <BrowserRouter>
    {/* basename={process.env.PUBLIC_URL} */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/search/:param?' element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
