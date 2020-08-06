import React, { PureComponent } from 'react';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';
import SaveMarkdowns from '../components/markdown/SaveMarkdowns';

export default class Document extends PureComponent {
  
  render() {
    return (
      <>
        <div className={styles.Document}>
          <Editor />
          <Preview />
          <SaveMarkdowns />
        </div>
      </>)
    ;
  }
}
