import React, { useState } from 'react';
import { useSelector, useDispatch } from '../../hooks/Context';
import { getMarkdown } from '../../selectors/selectors';
import { saveMarkdown } from '../../actions/reducerActions';

const SaveMarkdown = () => {
  const [title, setTitle] = useState('');
  const markdown = useSelector(getMarkdown);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setTitle(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch (saveMarkdown ({
      title: title, 
      markdown: markdown
    }));

  };
  
  return (
    <form onSubmit={handleSubmit}>

      <input type="text" placeholder="Title" onChange={handleChange} value={title}/>
      <button>Save</button>

    </form>
  );
};

export default SaveMarkdown;
