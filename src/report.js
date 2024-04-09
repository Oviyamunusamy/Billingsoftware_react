import { useState, useEffect, useRef } from "react";
import "./billing.css";
import { Divider, Button,Table} from "antd";
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
  const columns = [
    {
      title: 'S.No',
      dataIndex: 'S.no',
    },
    {
      title: 'Customer name',
      dataIndex: 'Customername',
    },
    {
      title: 'Inv.amt',
      dataIndex: 'Inv.amt',
    },
    {
        title: 'CGST.amt',
        dataIndex: 'CGST.amt',
      },
      {
        title: 'SGST.amt',
        dataIndex: 'SGSTamt',
      },
      {
        title: 'IGST.amt',
        dataIndex: 'IGST.amt',
      },
      {
        title: 'UGST.amt',
        dataIndex: 'UGST.amt',
      },
      {
        title: 'FreightAmt',
        dataIndex: 'FreightAmt',
      },
      {
        title: 'Disc.Amt',
        dataIndex: 'Disc.Amt',
      },
  ];
  const data = [
    {
      key: '1',
      SGSTamt: 'Currently no data!',
     
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
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
                <ol>Customer Name</ol>
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
          <div className="Header"> Report</div>
          <div className="Inputbox_1">
            <div className="inputfield_box_1">
              <div className="sub_input_5">
                <form className="form_input">
                  <label>Customer Name :</label>
                  <input
                    className="input_field"
                    type="text"
                    placeholder="Firstname..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form className="form_input">
                  <label>Customer Lastname :</label>
                  <input
                    className="input_field"
                    type="text"
                    placeholder="Customer Lastname..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <form className="form_input">
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
              <div className="sub_input_6">
                <form className="form_input">
                  <label>Opening Balance :</label>
                  <input
                    className="input_field"
                    type="text"
                    placeholder="Opening Balance..."
                    // value={dob2}
                    // onChange={handledateofbirthtwo}
                  ></input>
                </form>
                <div className="button_container_report">
                  <Button className="save_button">Save</Button>
                  <Button className="clear_button">Clear</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="table_container">
            
          <Table columns={columns} dataSource={data} size="middle" className="table_design" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Customermaster;
