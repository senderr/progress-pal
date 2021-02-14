import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CardList from './card-list';
import SearchCourse from './search-course';
import AddCourse from './add-course';

const HomePage = ({ user }) => {
  const [courses, setCourses] = useState([]);
  const [update, setUpdate] = useState();

  useEffect(() => {
    getCourses();
  }, [update]);

  const getCourses = async (id) => {
    const res = await axios.get('/courses');
    setCourses(res.data);
  };

  const createCourse = async (name) => {
    await axios.post('/courses', {
      name,
    });
    setUpdate(Math.random());
  };

  const deleteCourse = async (id) => {
    await axios.delete(`/courses/${id}`);
    setUpdate(Math.random());
  };

  return (
    <div>
      <CardList courses={courses} />
      <SearchCourse />
      <AddCourse addCourse={createCourse} />
    </div>
  );
};
export default HomePage;
