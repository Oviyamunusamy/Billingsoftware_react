import { useState, useEffect, useRef } from "react";
import "./billing.css";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Form } from "react-router-dom";
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
        <div className="dropdown">
      <button className="dropdown-button_1" onClick={handlemastermenu}>
        Master
      </button>
      {!openmaster && (
        <ul className="dropdown-menu">
          <ol >Customer Name</ol>
          <ol>Item master</ol>
        </ul>
      )}
      <button className="dropdown-button_1" onClick={handleinvoicemenu}>
        Invoice
      </button>
      {!openinvoice && (
        <ul className="dropdown-menu">
          <ol>Gst invoice</ol>
        </ul>
      )}
    
      <button className="dropdown-button_1" onClick={handlereportmenu}>
        Report
      </button>
      {!openreport && (
        <ul className="dropdown-menu">
          <ol>Report</ol>
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
                <label>Firstname :</label>
                <input
                  className="input_field"
                  type="text"
                  placeholder="Firstname..."
                  // value={dob2}
                  // onChange={handledateofbirthtwo}
                ></input>
              </form>
              <form>
                <label>Firstname :</label>
                <input
                  className="input_field"
                  type="text"
                  placeholder="Firstname..."
                  // value={dob2}
                  // onChange={handledateofbirthtwo}
                ></input>
              </form>
              <form>
                <label>Firstname :</label>
                <input
                  className="input_field"
                  type="text"
                  placeholder="Firstname..."
                  // value={dob2}
                  // onChange={handledateofbirthtwo}
                ></input>
              </form>
            </div>
            <div className="sub_input_2">
              <form>
                <label>Firstname :</label>
                <input
                  className="input_field"
                  type="text"
                  placeholder="Firstname..."
                  // value={dob2}
                  // onChange={handledateofbirthtwo}
                ></input>
              </form>
              <form>
                <label>Firstname :</label>
                <input
                  className="input_field"
                  type="text"
                  placeholder="Firstname..."
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
              <label>Firstname :</label>
              <input
                className="input_field"
                type="text"
                placeholder="Firstname..."
                // value={dob2}
                // onChange={handledateofbirthtwo}
              ></input>
            </form>
            <form>
              <label>Firstname :</label>
              <input
                className="input_field"
                type="text"
                placeholder="Firstname..."
                // value={dob2}
                // onChange={handledateofbirthtwo}
              ></input>
            </form>
            <form>
              <label>Firstname :</label>
              <input
                className="input_field"
                type="text"
                placeholder="Firstname..."
                // value={dob2}
                // onChange={handledateofbirthtwo}
              ></input>
            </form>
            <form>
              <label>Firstname :</label>
              <input
                className="input_field"
                type="text"
                placeholder="Firstname..."
                // value={dob2}
                // onChange={handledateofbirthtwo}
              ></input>
            </form>
            <form>
              <label>Firstname :</label>
              <input
                className="input_field"
                type="text"
                placeholder="Firstname..."
                // value={dob2}
                // onChange={handledateofbirthtwo}
              ></input>
            </form>
            <form>
              <label>Firstname :</label>
              <input
                className="input_field"
                type="text"
                placeholder="Firstname..."
                // value={dob2}
                // onChange={handledateofbirthtwo}
              ></input>
            </form>
          </div>
          <div className="sub_input_4">
            <form>
              <label>Firstname :</label>
              <input
                className="input_field"
                type="text"
                placeholder="Firstname..."
                // value={dob2}
                // onChange={handledateofbirthtwo}
              ></input>
            </form>
            <form>
              <label>Firstname :</label>
              <input
                className="input_field"
                type="text"
                placeholder="Firstname..."
                // value={dob2}
                // onChange={handledateofbirthtwo}
              ></input>
            </form>
            <form>
              <label>Firstname :</label>
              <input
                className="input_field"
                type="text"
                placeholder="Firstname..."
                // value={dob2}
                // onChange={handledateofbirthtwo}
              ></input>
            </form>
            <form>
              <label>Firstname :</label>
              <input
                className="input_field"
                type="text"
                placeholder="Firstname..."
                // value={dob2}
                // onChange={handledateofbirthtwo}
              ></input>
            </form>
            <form>
              <label>Firstname :</label>
              <input
                className="input_field"
                type="text"
                placeholder="Firstname..."
                // value={dob2}
                // onChange={handledateofbirthtwo}
              ></input>
            </form>
            <form>
              <label>Firstname :</label>
              <input
                className="input_field"
                type="text"
                placeholder="Firstname..."
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
