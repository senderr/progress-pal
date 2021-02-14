import React, { Component } from 'react';

import { Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

export const MenuItem = ({ id, icon, name }) => (
  <Menu.Item key={id.toString()} icon={<AppstoreOutlined />}>
    {name}
  </Menu.Item>
);
