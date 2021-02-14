import React, { useState } from 'react';
import axios from 'axios';
import { List, Avatar } from 'antd';
import { Redirect } from 'react-router-dom';

const SearchResults = ({ courses }) => {
  const [redirect, setRedirect] = useState();

  const joinCourse = async (id) => {
    const res = await axios.patch(`/courses/join/${id}`);
    setRedirect(id);
  };

  return !redirect ? (
    <List
      itemLayout="horizontal"
      dataSource={courses}
      renderItem={(course) => (
        <List.Item>
          <List.Item.Meta
            onClick={(e) => {
              joinCourse(course._id);
            }}
            avatar={<Avatar src="https://i.imgur.com/puicAT9h.jpg" />}
            title={<p>{course.name}</p>}
          />
        </List.Item>
      )}
    />
  ) : (
    <Redirect to={`/c/${redirect}`} />
  );
};

export default SearchResults;
