import React from 'react';
import className from 'classnames';
import Styles from './index.module.css';

function App() {
  return (
    <div className={className(Styles.app)}>
      Initialize React App
    </div>
  );
}

export default App;
