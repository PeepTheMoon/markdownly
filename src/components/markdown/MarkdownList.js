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


// const markdownList = [
//   'test 1',
//   'test 2',
//   'test 3'
// ];

// const markdownListElements = markdownList.map(({ title, i }) => (
//   <li key={title + i}>
//     <p>{i}</p>
//   </li>
// ));
