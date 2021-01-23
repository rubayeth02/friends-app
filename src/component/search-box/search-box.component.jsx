import React from 'react';

import './search-box.styles.css';

export const SearchBox=({placeholder,handleChange}) =>(
    <input className='search' input tyep='search' placeholder={placeholder} 
    onChange={handleChange} />
)