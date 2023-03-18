import React from 'react';
import reactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";


const reactRoot = reactDOM.createRoot(document.getElementById('root'));
reactRoot.render(
  <React.StrictMode>
   < BrowserRouter >

   <Header />

   </BrowserRouter >
  </React.StrictMode>
);


