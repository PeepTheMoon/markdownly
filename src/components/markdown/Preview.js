import React from 'react';
import styles from 'github-markdown-css/github-markdown.css';
import { useSelector}  from '../../hooks/Context';
import { getMarkdown, getMarkdownPreview } from '../../selectors/getMarkdown';

const Preview = () => {
  const markdown = useSelector(getMarkdown);
  const __html = getMarkdownPreview(markdown);
  return (
    <>
  <div className={styles['markdown-body']} dangerouslySetInnerHTML={{ __html }}></div>
  </>
  );
};

export default Preview;
