import React from 'react';

import './search-box.styles.css';

// Functional Components - Do not have access to state (unlike our classes) because they don't have access to a constructor that extends app supers. A functional component just renders some html

// SO if you 1) no need of state 2) don't need life cycle methods - then just use functional components

export const SearchBox = ({placeholder, handleChange}) => (
    <input 
    className='search'
    type="search" 
    placeholder= {placeholder}
    onChange={handleChange}
   />
);