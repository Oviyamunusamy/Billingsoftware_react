import { useState, useEffect, useRef } from "react";
import "./billing.css";
import { Divider, Table, DatePicker, Button } from "antd";
import {
  SearchOutlined,
  PlusOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import profilepic from "./profilepic.jpg";
import { Link } from "react-router-dom";
function Customermaster() {
  const [openmaster, setopenmaster] = useState(true);
  const [openinvoice, setopeninvoice] = useState(true);
  const [openreport, setopenreport] = useState(true);
  const [onSearch, setonSearch] = useState(true);
  const handlemastermenu = () => {
    setopenmaster(!openmaster);
  };
  const handleinvoicemenu = () => {
    setopeninvoice(!openinvoice);
  };
  const handlereportmenu = () => {
    setopenreport(!openreport);
  };
  const handlesearch = (key) => {
    setonSearch(key);
  };
  const handledatepicker = (i) => {
    setonSearch(i);
  };
  const columns = [
    {
      title: "S.No",
      dataIndex: "S.no",
    },
    {
      title: "Customer name",
      dataIndex: "Customername",
    },
    {
      title: "Inv.amt",
      dataIndex: "Inv.amt",
    },
    {
      title: "CGST.amt",
      dataIndex: "CGST.amt",
    },
    {
      title: "SGST.amt",
      dataIndex: "SGSTamt",
    },
    {
      title: "IGST.amt",
      dataIndex: "IGST.amt",
    },
    {
      title: "UGST.amt",
      dataIndex: "UGST.amt",
    },
    {
      title: "FreightAmt",
      dataIndex: "FreightAmt",
    },
    {
      title: "Disc.Amt",
      dataIndex: "Disc.Amt",
    },
  ];
  const data = [
    {
      key: "1",
      SGSTamt: "Currently no data!",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
  ];
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
                <Link to="/itemmaster">
                  <ol>Customer Name</ol>
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
                <Link to="/report">
                  <ol>Report</ol>
                </Link>
              </ul>
            )}
          </div>
        </div>
        <div className="body_container">
          <div className="Header"> GST invoice</div>
          <div className="Inputbox_1">
            <div className="inputfield_box_gst">
              <div className="sub_input_Gst1">
                <form>
                  <label>Accountng Year :</label>
                  <input
                    className="input_field_gst"
                    type="text"
                    placeholder="Accountng Year..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form>
                  <label>Invoice No & Date:</label>
                  <div className="date_gst">
                    <input
                      className="input_date_gst"
                      type="text"
                      placeholder="..."
                      // value={dob2}
                      // onChange={handledateofbirthtwo}
                    ></input>
                    <DatePicker
                      onChange={(i) => handledatepicker(i.target.value)}
                      className="input_date_gst"
                    />
                  </div>
                </form>
                <form>
                  <label>Customer Name :</label>
                  <input
                    className="input_field_gst"
                    type="text"
                    placeholder="..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form>
                  <label>DC No :</label>
                  <input
                    className="input_field_gst"
                    type="text"
                    placeholder="..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
              </div>
              <div className="sub_input_Gst2">
                <form>
                  <label>Bill Type :</label>
                  <input
                    className="input_field_gst"
                    type="text"
                    placeholder="..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form>
                  <label>Address :</label>
                  <input
                    className="input_field_gst"
                    type="text"
                    placeholder="Credit/Debit..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form>
                  <label>State :</label>
                  <input
                    className="input_field_gst"
                    type="text"
                    placeholder="..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form>
                  <label>Pin code :</label>
                  <input
                    className="input_field_gst"
                    type="text"
                    placeholder="Credit/Debit..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
              </div>
              <div className="sub_input_Gst3">
                <form>
                  <label>PO Date:</label>
                  <input
                    className="input_field_gst"
                    type="text"
                    placeholder="..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form>
                  <label>PO No :</label>
                  <input
                    className="input_field_gst"
                    type="text"
                    placeholder="..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
              </div>
            </div>
          </div>
          <div className="table_container">
            <input
              className="search_Input"
              type="text"
              placeholder="search input...."
              onChange={(i) => handlesearch(i.target.value)}
            />
            <button className="search_Button">
              {/* onClick={(d) =>handlesearchbutton(d.target.value)} */}
              <SearchOutlined />
            </button>
            <Table
              columns={columns}
              dataSource={data}
              size="middle"
              className="table_design"
            />
          </div>

          <div className="Inputbox_2_gst">
            <div className="inputfield_box_gst">
              <div className="sub_input_Gst1">
                <form>
                  <label>Totam.Amt :</label>
                  <input
                    className="input_field_gst"
                    type="text"
                    placeholder="..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form>
                  <label>IGST% :</label>
                  <input
                    className="input_field_gst"
                    type="text"
                    placeholder="..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form>
                  <label>CGST% :</label>
                  <input
                    className="input_field_gst"
                    type="text"
                    placeholder="..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form>
                  <label>SGST% :</label>
                  <input
                    className="input_field_gst"
                    type="text"
                    placeholder="..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form>
                  <label>Date & Time of Removel :</label>
                  <input
                    className="input_field_gst"
                    type="text"
                    placeholder="..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
              </div>
              <div className="sub_input_Gst2">
                <form>
                  <label>Sub Total :</label>
                  <input
                    className="input_field_gst"
                    type="text"
                    placeholder="..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form>
                  <label>Freight Amt :</label>
                  <input
                    className="input_field_gst"
                    type="text"
                    placeholder="..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form>
                  <label>Pack Amt :</label>
                  <input
                    className="input_field_gst"
                    type="text"
                    placeholder="Credit/Debit..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form>
                  <label>Discount % :</label>
                  <input
                    className="input_field_gst"
                    type="text"
                    placeholder="..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form>
                  <label>Date & Time of Invoice :</label>
                  <input
                    className="input_field_gst"
                    type="text"
                    placeholder="Credit/Debit..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
              </div>
              <div className="sub_input_Gst3">
                <form>
                  <label>Payment Terms :</label>
                  <input
                    className="input_field_gst"
                    type="text"
                    placeholder="..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form>
                  <label>Mode of Transport:</label>
                  <input
                    className="input_field_gst"
                    type="text"
                    placeholder="..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form>
                  <label>Vechile Reg No:</label>
                  <input
                    className="input_field_gst"
                    type="text"
                    placeholder="..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form>
                  <label>Gross Amt :</label>
                  <input
                    className="input_field_gst"
                    type="text"
                    placeholder="..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
              </div>
            </div>
            <div className="button_container_gst">
              <div className="left_button">
              <Button className="Download_gst">Download PDF</Button>
              
              <Button className="clear_button">
                <PlusOutlined />
                Print
              </Button>
              </div>
              <div className="remark_field">
              <form>
                  <label>Remark :</label>
                  <input
                    className="input_field_remarkgst"
                    type="text"
                    placeholder="..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                </div>
                <div className="right_button">
              <Button className="save_button">Save</Button>
              <Button className="clear_button">Clear</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Customermaster;
