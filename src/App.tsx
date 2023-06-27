import './App.scss';
import Home from './pages/home';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const insertScript = (scriptToAdd: string) => {
  const script = document.createElement("script");
  script.src = scriptToAdd;
  // script.async = true;
  document.body.appendChild(script);
}

export const insertLocalScript = (scriptToAdd: string) => {
  const script = document.createElement("script");
  script.innerHTML = require(`./assets/vendor/${scriptToAdd}`);
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
  
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" Component={() => <Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
