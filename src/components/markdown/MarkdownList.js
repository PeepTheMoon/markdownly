import React from 'react';
import { getMarkdownTitles } from '../../selectors/selectors';
import { useSelector, useDispatch } from '../../hooks/Context';
import { deleteMarkdown } from '../../actions/reducerActions';


const MarkdownList = () =>  {
  const dispatch = useDispatch();
  const markdownList = useSelector(getMarkdownTitles);

  const markdownListElements = markdownList.map((title, i) => (
    <li key={i}>
      <p>{title}</p>
      <button value={title} onClick={({ target }) => dispatch(deleteMarkdown(target.value))}>Delete</button>
    </li>
  ));
  
  return (
    <ul>
      {markdownListElements}    
    </ul>
  );
};

export default MarkdownList;
