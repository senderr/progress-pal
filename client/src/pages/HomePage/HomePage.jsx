import React from 'react';

import CardList from './card-list';
import SearchCourse from './search-course';
import AddCourse from './add-course';

const HomePage = () => (
  <div>
    <CardList />
    <SearchCourse />
    <AddCourse />
  </div>
);
export default HomePage;
