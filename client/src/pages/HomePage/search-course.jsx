import React from 'react';

import { Search } from 'semantic-ui-react';
import './search-course-styles.scss';

import { Form } from 'react-bootstrap';
import FormInputCustom from './form-input-custom';
import SearchResults from './search-results';

const SearchCourse = () => {
  // This should be populated with a GET request
  const courseNames = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

  return (
    <div className="search">
      <form>
        <FormInputCustom
          type="text"
          name="courseSearch"
          // value={}
          // handleChange={}
          required
          label="Search and add a course to your homepage:"
        />
      </form>

      <div>
        <SearchResults courseNames={courseNames} />
      </div>
    </div>
  );
};

export default SearchCourse;
