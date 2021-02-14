import React, { Component } from 'react';

import 'antd/dist/antd.css';

import { Col, Row } from 'antd';

import { CourseCard } from './coursecard';

import './card-list-styles.scss';

class CardList extends Component {
  render() {
    const cards = [];

    for (var i = 0; i < 8; i++) {
      cards.push(
        <Col span={5}>
          <CourseCard id={i} name={'COURSE NAME'} />
        </Col>
      );
    }

    return (
      <div className="card-list">
        <div className="site-card-wrapper">
          <Row gutter={[12, 12]} justify="center" align="middle">
            {cards}
          </Row>
        </div>
      </div>
    );
  }
}

export default CardList;

// class="col-md-4 col-sm-6 col-xs-12"
