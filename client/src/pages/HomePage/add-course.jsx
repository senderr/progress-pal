import React, { useState } from 'react';
import { Form, Input, Button, Space } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';

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

  return (
    <Form
      name="dynamic_form_nest_item"
      onFinish={onFinish}
      autoComplete="off"
      className="courseForm"
    >
      <Form.List name="courses">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <Space
                key={field.key}
                style={{ display: 'flex', marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item
                  {...field}
                  className="courseInfo"
                  name={[field.name, 'course']}
                  fieldKey={[field.fieldKey, 'course']}
                  rules={[{ required: true, message: 'Missing course name' }]}
                >
                  <Input
                    type="text"
                    placeholder="Enter first name"
                    name={'course'}
                    value={state.course}
                    onChange={handleChange}
                  />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
                className="addButton"
              >
                Add Course
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="addButton">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddCourse;
