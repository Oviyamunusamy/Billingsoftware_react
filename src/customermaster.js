import { useState, useEffect, useRef } from "react";
import "./billing.css";
import { Divider } from "antd";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import profilepic from "./profilepic.jpg"
import { Link } from "react-router-dom";
function Customermaster() {
  
  const [openmaster, setopenmaster] = useState(true);
  const [openinvoice, setopeninvoice] = useState(true);
  const [openreport, setopenreport] = useState(true);

  const handlemastermenu = () => {
    setopenmaster(!openmaster);
  };
  const handleinvoicemenu = () => {
    setopeninvoice(!openinvoice);
  };
  const handlereportmenu = () => {
    setopenreport(!openreport);
  };
  return (
    <>
      <div className="Full_container">
        
        <div className="menu_container">
        <div className="profile_container">
          <img src={profilepic} className="image_menu"/>
         <p className="profile_name">Joyaila</p>
        </div>
        <Divider className="divider"/>
        <div className="dropdown">
      <button className="dropdown-button_1" onClick={handlemastermenu}>
        Master
      </button>
      {!openmaster && (
        <ul className="dropdown-menu">
          <Link to="/itemmaster">
          <ol >Customer Name</ol>
              </Link>
          
          <Link to="/itemmaster">
          <ol>Item master</ol>
              </Link>
        </ul>
      )}
      <button className="dropdown-button_1" onClick={handleinvoicemenu}>
        Invoice
      </button>
      {!openinvoice && (
        <ul className="dropdown-menu">
          <Link to="/gstinvoice">
          <ol>GST invoice</ol>
              </Link>
        </ul>
      )}
    
      <button className="dropdown-button_1" onClick={handlereportmenu}>
        Report
      </button>
      {!openreport && (
        <ul className="dropdown-menu">
           <Link to="/gstinvoice">
           <ol>Report</ol>
              </Link>
          
        </ul>
      )}
    </div>
        </div>
        <div className="body_container">
          <div className="Header"> Customermaster</div>
          <div className="Inputbox_1">
          <div className="inputfield_box">
            <div className="sub_input_1">
              <form>
                <label>Customer Name :</label>
                <input
                  className="input_field"
                  type="text"
                  placeholder="Firstname..."
                  // value={dob2}
                  // onChange={handledateofbirthtwo}
                ></input>
              </form>
              <form>
                <label>Customer Lastname :</label>
                <input
                  className="input_field"
                  type="text"
                  placeholder="Customer Lastname..."
                  // value={dob2}
                  // onChange={handledateofbirthtwo}
                ></input>
              </form>
              <form>
                <label>A/C Group Name :</label>
                <input
                  className="input_field"
                  type="text"
                  placeholder="A/C Group Name..."
                  // value={dob2}
                  // onChange={handledateofbirthtwo}
                ></input>
              </form>
            </div>
            <div className="sub_input_2">
              <form>
                <label>Opening Balance :</label>
                <input
                  className="input_field"
                  type="text"
                  placeholder="Opening Balance..."
                  // value={dob2}
                  // onChange={handledateofbirthtwo}
                ></input>
              </form>
              <form>
                <label>Credit/Debit :</label>
                <input
                  className="input_field"
                  type="text"
                  placeholder="Credit/Debit..."
                  // value={dob2}
                  // onChange={handledateofbirthtwo}
                ></input>
              </form>
            </div>
            </div>
          </div>


          <div className="Inputbox_2">
            <div className="inputfield_box">
          <div className="sub_input_3">
          <form>
              <label>Address :</label>
              <input
                className="input_field"
                type="text"
                placeholder="Address"
                // value={dob2}
                // onChange={handledateofbirthtwo}
              ></input>
            </form>
            <form>
              <label>State :</label>
              <input
                className="input_field"
                type="text"
                placeholder="State"
                // value={dob2}
                // onChange={handledateofbirthtwo}
              ></input>
            </form>
            <form>
              <label>Pincode :</label>
              <input
                className="input_field"
                type="text"
                placeholder="Pincode"
                // value={dob2}
                // onChange={handledateofbirthtwo}
              ></input>
            </form>
            <form>
              <label>Mobile No :</label>
              <input
                className="input_field"
                type="text"
                placeholder="Mobile No..."
                // value={dob2}
                // onChange={handledateofbirthtwo}
              ></input>
            </form>
            <form>
              <label>Email Id :</label>
              <input
                className="input_field"
                type="text"
                placeholder="Email Id"
                // value={dob2}
                // onChange={handledateofbirthtwo}
              ></input>
            </form>
            <form>
              <label>GST No :</label>
              <input
                className="input_field"
                type="text"
                placeholder="GST No"
                // value={dob2}
                // onChange={handledateofbirthtwo}
              ></input>
            </form>
          </div>
          <div className="sub_input_4">
            <form>
              <label>Website :</label>
              <input
                className="input_field"
                type="text"
                placeholder="Website..."
                // value={dob2}
                // onChange={handledateofbirthtwo}
              ></input>
            </form>
            <form>
              <label>PAN No :</label>
              <input
                className="input_field"
                type="text"
                placeholder="PAN No..."
                // value={dob2}
                // onChange={handledateofbirthtwo}
              ></input>
            </form>
            <form>
              <label>Contact Person :</label>
              <input
                className="input_field"
                type="text"
                placeholder="Contact Person..."
                // value={dob2}
                // onChange={handledateofbirthtwo}
              ></input>
            </form>
            <form>
              <label>Alternative Mobile :</label>
              <input
                className="input_field"
                type="text"
                placeholder="Alternative Mobile..."
                // value={dob2}
                // onChange={handledateofbirthtwo}
              ></input>
            </form>
            <form>
              <label>Alternative Email :</label>
              <input
                className="input_field"
                type="text"
                placeholder="Alternative Email..."
                // value={dob2}
                // onChange={handledateofbirthtwo}
              ></input>
            </form>
            <form>
              <label>Other No :</label>
              <input
                className="input_field"
                type="text"
                placeholder="Other No..."
                // value={dob2}
                // onChange={handledateofbirthtwo}
              ></input>
            </form>
          </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
export default Customermaster;
