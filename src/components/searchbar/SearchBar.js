import React, { useState } from 'react';
import { useDispatch } from '../../hooks/Context';
import { setSearch } from '../../actions/reducerActions';


const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch ();

  const handleQuery = ({ target }) => {
    setQuery(target.value);
  };

  const handleCategory = ({ target }) => {
    setCategory(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    return dispatch (setSearch(query, category));
  };

  return (
    <form onSubmit={handleSubmit}>
    
      <label>
          Body
        <input type="radio" name="searchCategory" checked={category === 'markdown'} value="markdown" onChange={handleCategory}/>
      </label>
      
      <label>
          Title
        <input type="radio" name="searchCategory" checked={category === 'title'} value="title" onChange={handleCategory}/>
      </label>

      

      <input type="text" placeholder="Search" name="searchQuery" onChange={handleQuery} value={query}/>
      <button>Search</button>

    </form>
  );
};

export default SearchBar;
