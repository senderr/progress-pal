import React from 'react';

import './coursecard-styles.scss';
import { Card } from 'antd';

const { Meta } = Card;

export const CourseCard = ({ id, name }) => {
  const goToCourseLink = async (id) => {
    window.location.href = `http://localhost:3000/c/${id}`;
  };

  return (
    <Card
      key={id}
      onClick={(e) => {
        goToCourseLink(id);
      }}
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
};
