import React, { Component } from 'react';

import { Layout, Menu } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';

import { MenuItem } from '../component/menu-item-component';
import Graphs from '../component/graphs-component';

const { Header, Content, Footer, Sider } = Layout;

class CoursePage extends Component {
  changeDataShownOnClick = () => {
    // Return array of progress bars
  };

  render() {
    const assignments = [];

    for (var i = 0; i < 3; i++) {
      assignments.push(
        <Menu.Item key={i.toString()} icon={<AppstoreOutlined />}>
          Assignment {i}
        </Menu.Item>
        // <MenuItem id={i} name={`Assignment ${i}`} icon={<AppstoreOutlined />} />
      );
    }

    return (
      <div className="course-page">
        <Layout>
          <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
              paddingTop: 60,
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
              {assignments}
            </Menu>
          </Sider>
          <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content
              style={{
                margin: '24px 16px 0',
                overflow: 'initial',
              }}
            >
              <div
                className="site-layout-background"
                style={{ padding: 24, textAlign: 'center' }}
              >
                <Graphs />
                ...
                <br />
                Really
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                long
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ... content
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default CoursePage;
