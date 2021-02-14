import React, { useState } from 'react';

import { Form, Input, Button, Row, Col } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import './add-course-styles.scss';

export const AddCourse = ({ addCourse }) => {
  const onFinish = ({ courses }) => {
    courses.forEach((course) => {
      addCourse(course.course);
      console.log(course.course);
    });
  };

  const [state, setState] = useState({
    course: '',
  });

  const handleChange = (e) => {
    e.preventDefault();

    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className="form">
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
                <Row
                  justify="center"
                  key={field.key}
                  style={{ display: 'flex', marginBottom: 8 }}
                >
                  <Col>
                    <Form.Item
                      {...field}
                      className="courseInfo"
                      name={[field.name, 'course']}
                      fieldKey={[field.fieldKey, 'course']}
                      rules={[
                        { required: true, message: 'Missing course name' },
                      ]}
                    >
                      <div className="border">
                        <Input
                          id="input"
                          className="input"
                          type="text"
                          placeholder="Enter course name"
                          name={'course'}
                          value={state.course}
                          onChange={handleChange}
                        />
                      </div>
                    </Form.Item>
                  </Col>
                  <Col style={{ marginLeft: 8 }}>
                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                  </Col>
                </Row>
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
        <Form.Item className="bottom">
          <Button type="primary" htmlType="submit" className="addButton">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCourse;
