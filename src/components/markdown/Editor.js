import React from 'react';
import styles from './Editor.css';
import { useDispatch, useSelector } from '../../hooks/Context';
import { editMarkdown } from '../../actions/reducerActions';
import { getMarkdown } from '../../selectors/selectors';

const Editor = () => {
  const dispatch = useDispatch();
  const markdown = useSelector(getMarkdown);
  
  const handleChange = ({ target }) => {
    dispatch(editMarkdown(target.value));
  };

  return (
    <textarea className={styles.Editor} value={markdown} onChange={handleChange} />
  );
};

export default Editor;
