import React from 'react';
import styles from 'github-markdown-css/github-markdown.css';
import { useSelector }  from '../../hooks/Context';
import { getMarkdownPreview } from '../../selectors/selectors';

const Preview = () => {
  const __html = useSelector(getMarkdownPreview);

  return (
    <>
      <div className={styles['markdown-body']} dangerouslySetInnerHTML={{ __html }}></div>
    </>
  );
};

export default Preview;
