import React, { useState } from 'react';
import axios from 'axios';

import { Search } from 'semantic-ui-react';
import './search-course-styles.scss';

import { Form } from 'react-bootstrap';
import FormInputCustom from './form-input-custom';
import SearchResults from './search-results';

const SearchCourse = () => {
  // This should be populated with a GET request
  const [courses, setCourses] = useState([]);

  const onSearchChange = async (e) => {
    const res = await axios.get(`/courses/search/${e.target.value}`);
    setCourses(res.data);
  };

  return (
    <div className="search">
      <form>
        <FormInputCustom
          type="text"
          name="courseSearch"
          // value={}
          handleChange={(e) => onSearchChange(e)}
          required
          label="Search and add a course to your homepage:"
        />
      </form>

      <div>
        <SearchResults courses={courses} />
      </div>
    </div>
  );
};

export default SearchCourse;
