import React, { PureComponent } from 'react';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';
import SaveMarkdowns from '../components/markdown/SaveMarkdowns';
import MarkdownList from '../components/markdown/MarkdownList';

export default class Document extends PureComponent {
  
  render() {
    return (
      <>
        <div className={styles.Document}>
          <Editor />
          <Preview />
          <SaveMarkdowns />
          <MarkdownList />
        </div>
      </>)
    ;
  }
}

//save markdown is going to have to be in a header so that it doesn't mess up the editor css 
