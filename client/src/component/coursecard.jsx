import React from 'react';

import './coursecard-styles.scss';
import { Card } from 'antd';

const { Meta } = Card;

export const CourseCard = ({ id, name }) => (
  <Card
    className="card-container"
    hoverable
    style={{ width: 240 }}
    cover={
      <img
        src={`https://robohash.org/${id}?set=set4&size=180x180`}
        alt="kittens"
      />
    }
  >
    <Meta title={name} />
  </Card>
);
