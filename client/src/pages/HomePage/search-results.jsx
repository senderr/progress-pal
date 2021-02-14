import React from 'react';
import { List, Avatar } from 'antd';

const SearchResults = ({ courseNames }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={courseNames}
      renderItem={(courseName) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://i.imgur.com/puicAT9h.jpg" />}
            title={<a href="https://ant.design">{courseName.title}</a>}
            description="Brussel sprouts cow, rabbits a gates a, storage shed fences. Bulls at rose garden cucumbers mice sunflower wheat in pig."
          />
        </List.Item>
      )}
    />
  );
};

export default SearchResults;
