import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function CategoryFilter() {
  const [filter, setFilter] = useState('All');
  const dispatch = useDispatch();

  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    const filter = e.target.value;
    console.log(filter);
    dispatch({ type: 'CHANGE_FILTER', filter });
  };

  return (
    <div>
      <select onChange={(e) => handleFilterChange(e)} value={filter}>
        {categories.map((cat) => <option key={Math.random() * 1000}>{cat}</option>)}

      </select>
    </div>
  );
}

export default CategoryFilter;
