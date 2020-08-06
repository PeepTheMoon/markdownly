import React, { useState } from 'react';
// import { useSelector } from '../../hooks/Context';

const SaveMarkdown = () => {
  const [title, setTitle] = useState('');

  const handleChange = ({ target }) => {
    setTitle(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" onChange={handleChange} value={title}/>
      <button>Save</button>
    </form>
  );
};

export default SaveMarkdown;
