import React, { useState } from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [currentTab, setcurrentTab] = useState("home");

  const handleClick = e => {
    setcurrentTab(e.key);
  };

  return (
    <div>
      <Menu
        onClick={handleClick}
        selectedKeys={[currentTab]}
        theme="dark"
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Link to="/">
            <Icon type="home" />
            Home
          </Link>
        </Menu.Item>

        <Menu.Item key="dashboard">
          <Link to="/Dashboard">
            <Icon type="dashboard" /> Dashboard{" "}
          </Link>
        </Menu.Item>

        <Menu.Item key="budget">
          <Link to="/AddBudget">
            <Icon type="dollar" /> Add Budget{" "}
          </Link>
        </Menu.Item>
        <Menu.Item key="user-details">
          <Link to="/UserDetails">
            <Icon type="user" /> User Details{" "}
          </Link>
        </Menu.Item>
        <Menu.Item key="setting">
          <Link to="/Setting">
            <Icon type="setting" /> Setting{" "}
          </Link>
        </Menu.Item>
        <Menu.Item style={{ float: "right" }} key="logout">
          <Link to="/Logout">
            <Icon type="logout" /> Logout{" "}
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
