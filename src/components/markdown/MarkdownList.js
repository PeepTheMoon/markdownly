import React from 'react';
import { getMarkdownTitles } from '../../selectors/selectors';
import { useSelector } from '../../hooks/Context';

const MarkdownList = () =>  {

  const markdownList = useSelector(getMarkdownTitles);

  const markdownListElements = markdownList.map((title, i) => (
    <li key={i}>
      <p>{title}</p>
    </li>
  ));
    
  return (
    <ul>
      {markdownListElements}    
    </ul>
  );
};

export default MarkdownList;
