import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customermaster from "./customermaster";
import Itemmaster from "./itemmaster";
import Gstinvoice from "./gstinvoice";
import Report from "./report";
import "./billing.css";
function Billing() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/customermaster" element={<Customermaster />} />
          <Route path="/itemmaster" element={<Itemmaster />} /> 
          <Route path="/gstinvoice" element={<Gstinvoice />} /> 
          <Route path="/report" element={<Report />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Billing;