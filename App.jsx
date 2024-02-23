import { BrowserRouter, Route, Routes } from "react-router-dom";
import DigitalClock from "./DigitalClock";
import React from "react";

 export default function App(){
    return(
 <>
 <BrowserRouter>
 <Routes>
   
    <Route path= '/' element ={<DigitalClock></DigitalClock>}></Route>
 </Routes>
 </BrowserRouter>
       
       
               </>
    )
 }