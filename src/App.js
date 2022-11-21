import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import { Navabr } from "./Component/Navbar";
import { Home } from "./Home";
import { Inventory } from "./Component/Inventory";
import { About } from "./Component/About";
import { Contact } from "./Component/Contact";
import { homeData } from "./Component/navData";
import { infoData } from "./Component/homeData";

function App() {
  const homeElement=homeData.map(hodata =>{
    return(
      <Navabr {...hodata} key={hodata.id}/>
    )
  })
  const infoElement=infoData.map(info =>{
    return(
      <Home {...info} key={info.id}/>
    )
  })
  return (
    <div>
      <BrowserRouter>
      {homeElement}
      <Routes>
        <Route path="/" element={infoElement}/>
        <Route path="/inventory" element={<Inventory/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
