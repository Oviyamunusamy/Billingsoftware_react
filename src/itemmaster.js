import { useState, useEffect, useRef } from "react";
import "./billing.css";
import { Divider,Button } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import profilepic from "./profilepic.jpg";
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
            <img src={profilepic} className="image_menu" />
            <p className="profile_name">Joyaila</p>
          </div>
          <Divider className="divider" />
          <div className="dropdown">
            <button className="dropdown-button_1" onClick={handlemastermenu}>
              Master
            </button>
            {!openmaster && (
              <ul className="dropdown-menu">
                <Link to="/customermaster">
                  <ol>Customermaster</ol>
                </Link>
                <Link to="/gstinvoice">
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
                <ol>Gst invoice</ol>
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
          <div className="Header"> Item master</div>

          <div className="Inputbox_2">
            <div className="inputfield_box">
              <div className="sub_input_3">
                <form>
                  <label>Category Name :</label>
                  <input
                    className="input_field"
                    type="text"
                    placeholder="Category name"
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form>
                  <label>Part No :</label>
                  <input
                    className="input_field"
                    type="text"
                    placeholder="Part no"
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form>
                  <label>Item Name :</label>
                  <input
                    className="input_field"
                    type="text"
                    placeholder="Item name"
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form>
                  <label>Change Item name :</label>
                  <input
                    className="input_field"
                    type="text"
                    placeholder="Change Item name..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form>
                  <label>Packing Size :</label>
                  <input
                    className="input_field"
                    type="text"
                    placeholder="Packing size"
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form>
                  <label>HSN Code :</label>
                  <input
                    className="input_field"
                    type="text"
                    placeholder="HSN Code"
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
              </div>
              <div className="sub_input_4">
                <form>
                  <label>Purchase Rate :</label>
                  <input
                    className="input_field"
                    type="text"
                    placeholder="Purchase Rate..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form>
                  <label>Sales Rate :</label>
                  <input
                    className="input_field"
                    type="text"
                    placeholder="Sales Rate..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form>
                  <label>UOM:</label>
                  <input
                    className="input_field"
                    type="text"
                    placeholder="UOM"
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form>
                  <label>Opening Quantity :</label>
                  <input
                    className="input_field"
                    type="text"
                    placeholder="Opening quantity"
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form>
                  <label>Closing Quantity :</label>
                  <input
                    className="input_field"
                    type="text"
                    placeholder="Closing quantity"
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form>
                  <label>Change Part no:</label>
                  <input
                    className="input_field"
                    type="text"
                    placeholder="Change Part no"
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
              </div>
            </div>
            <div className="button_container">
            <Button className="save_button">Save</Button>
            <Button className="clear_button">Clear</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Customermaster;
