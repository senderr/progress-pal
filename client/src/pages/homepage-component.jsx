import React from 'react';

import CardList from '../component/card-list';
import SearchCourse from '../component/search-course';
import AddCourse from '../component/add-course';

const HomePage = () => (
  <div>
    <CardList />
    <SearchCourse />
    <AddCourse />
  </div>
);
export default HomePage;
