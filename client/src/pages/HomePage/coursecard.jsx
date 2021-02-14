import React from 'react';

import './coursecard-styles.scss';
import { Card } from 'antd';

const { Meta } = Card;

export const CourseCard = ({ id, name }) => (
  <Card
    key={id}
    className="card-container"
    hoverable
    style={{ width: 240 }}
    cover={
      <img
        className="image"
        src={`https://robohash.org/${id + 1}?set=set4&size=180x180`}
        alt="kittens"
      />
    }
  >
    <Meta title={name} />
  </Card>
);
