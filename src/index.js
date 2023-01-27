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
import Collection from './pages/Explore/Collections/Collection';

import { Web3ContextProvider } from "./store/Web3Provider";
import { Web3ReactProvider } from "@web3-react/core";
import { providers } from 'ethers';

const getWeb3Library = (provider) =>  {
  const library = new providers.Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function MainPage() {
  return (
    <Web3ReactProvider  getLibrary={getWeb3Library}>
    <Web3ContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<App/>}>
        <Route index element = {<Advertise/>}/>
        <Route path='create-collection' element = {<CreateCollection/>}/>
        <Route path='explore' element = {<Collection/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </Web3ContextProvider>
    </Web3ReactProvider>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<MainPage></MainPage>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
