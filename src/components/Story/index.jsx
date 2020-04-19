import React from 'react';
import className from 'classnames';
import Styles from './index.module.css';

function Story() {
  return (
    <div className={className(Styles.story)}>
      Initialize React Story
    </div>
  );
}

export default Story;
