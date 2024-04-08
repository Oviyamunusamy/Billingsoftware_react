import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customermaster from "./customermaster";
import Itemmaster from "./itemmaster";
import Gstinvoice from "./gstinvoice";
import "./billing.css";
function Billing() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Customermaster />} />
          <Route path="/itemmaster" element={<Itemmaster />} /> 
          <Route path="/gstinvoice" element={<Gstinvoice />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Billing;