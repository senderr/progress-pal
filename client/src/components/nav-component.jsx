import React, { Component } from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
import './nav-styles.scss';

import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

export const Nav = () => (
  <div className="Nav">
    <Layout className="layout">
      <Header className="headbackground">
        <div className="logo" />
        <Menu
          className="headbackground"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
        >
          <Menu.Item className="title" key="1">
            <Link to="/">Progress Pal</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  </div>
);
