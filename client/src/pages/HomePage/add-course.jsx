import React, { useState } from 'react';
import { Form, Input, Button, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import './add-course-styles.scss';

export const AddCourse = ({ addCourse }) => {
  const onFinish = ({ courses }) => {
    courses.forEach((course) => {
      addCourse(course.course);
    });
  };

  const [state, setState] = useState({
    course: '',
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return <Form></Form>;
};

export default AddCourse;
