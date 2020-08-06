import React from 'react';
import { getMarkdownTitles } from '../../selectors/selectors';
import { useSelector } from '../../hooks/Context';


const MarkdownList = () =>  {

  const markdownList = [
    'test 1',
    'test 2',
    'test 3'
  ];

  const markdownListElements = markdownList.map(({ title, i }) => (
    <li key={title + i}>
      <p>{i}</p>
    </li>
  ));
    
  return (
    <ul>
      {markdownListElements}    
    </ul>
  );
};

export default MarkdownList;
