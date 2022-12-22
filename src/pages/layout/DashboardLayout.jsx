import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";


import {
  HomeOutlined,
  CrownOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Avatar } from "antd";
import "./dashboardLayout.scss";
import { NavLink, Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;
export default function () {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  const handleChangePageAdd = () => {
    navigate("/dashboard/products/add");
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item>
            <NavLink to="/dashboard">
              <HomeOutlined />
              Home
            </NavLink>
          </Menu.Item>

          <Menu.Item>
            <NavLink to="/dashboard/products">
              <CrownOutlined />
              Products
            </NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div>
            <Avatar size="default" icon={<UserOutlined />}></Avatar> ADMIN
          </div>
          <div className="header-btn">
            <Button onClick={handleChangePageAdd}>ADD NEW PRODUCT +</Button>
          </div>
        </Header>
        <Content
          style={{
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
