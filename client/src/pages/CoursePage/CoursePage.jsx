import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Layout, Menu } from 'antd';
import { AppstoreOutlined, PlusOutlined } from '@ant-design/icons';
import { MenuItem } from './menu-item-component';
import GraphList from './graphs-component';

import './CoursePage.scss';

const { Header, Content, Footer, Sider } = Layout;

const CoursePage = ({ user }) => {
  const [course, setCourse] = useState({ assignments: [] });
  const [assignment, setAssignment] = useState({ users: [] });
  const params = useParams();

  const getCourse = async () => {
    const res = await axios.get(`/courses/${params.id}`);
    setCourse(res.data);
  };

  const getAssignment = async (id) => {
    const res = await axios.get(`/assignments/${id}`);
    setAssignment(res.data);
  };

  useEffect(() => {
    if (user) getCourse();
  }, [user]);

  return (
    <div className="course-page">
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            paddingTop: 40,
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
            {course.assignments.map((assignment) => (
              <Menu.Item
                key={assignment._id}
                icon={<AppstoreOutlined />}
                onClick={() => getAssignment(assignment._id)}
              >
                {assignment.name}
              </Menu.Item>
            ))}
            <Menu.Item icon={<PlusOutlined />}>Add Assignment</Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header
            className="site-layout-background"
            style={{ padding: 0, height: '20px' }}
          />
          <Content
            style={{
              margin: '24px 40px 0px 40px',
              overflow: 'initial',
              background: 'white',
              padding: '8px 24px 16px 24px',
            }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: 'center' }}
            >
              <GraphList user={user} users={assignment.users} />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default CoursePage;
