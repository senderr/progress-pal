import React, { Component } from 'react';

import 'antd/dist/antd.css';

import { Col, Row } from 'antd';

import { CourseCard } from './coursecard';

import './card-list-styles.scss';

const url = 'https://localhost:3000';
export const CardList = ({ courses }) => {
  return (
    <div className="card-list">
      <div className="site-card-wrapper">
        <Row gutter={[12, 12]} justify="center" align="middle">
          <div>
            {courses.map(({ _id, name }) => (
              <Col span={5}>
                <CourseCard key={_id} id={_id} name={name} />
              </Col>
            ))}
          </div>
        </Row>
      </div>
    </div>
  );
};

export default CardList;

// class="col-md-4 col-sm-6 col-xs-12"
