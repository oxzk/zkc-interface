import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CreateCollection from './pages/CreateCollection/CreateCollection';
import Advertise from './pages/Advertise/Advertise';
import ExploreNFT from './pages/ExploreNFT';


function MainPage() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<App/>}>
        <Route index element = {<Advertise/>}/>
        <Route path='create-collection' element = {<CreateCollection/>}/>
        <Route path='explore-nft' element = {<ExploreNFT/>}/>
      </Route>
      
    </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<MainPage></MainPage>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
