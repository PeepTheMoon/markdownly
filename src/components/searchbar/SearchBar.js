// import React, { useState } from 'react';
// import { useSelector, useDispatch } from '../../hooks/Context';
// import { getMarkdown, searchByTitle } from '../../selectors/selectors';


// const SearchBar = () => {
//   const [search, setSearch] = useState('');

//   const handleChange = ({ target }) => {
//     setSearch(target.value);
//   };

//   const handleSubmit = event => {
//     event.preventDefault();

//     return useSelector(searchByTitle(search));
//   };

//   return (
//     <form onSubmit={handleSubmit}>

//       <input type="text" placeholder="Title" onChange={handleChange} value={title}/>
//       <button>Save</button>

//     </form>
//   );
// };
