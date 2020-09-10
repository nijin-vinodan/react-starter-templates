import React, { useState } from 'react';
import './styles/theme.scss';
import './App.scss';
import { Button } from './components/button/button';

function App() {

  const [theme, setTheme] = useState('dark');

  return (
    <div className={`App ${theme}`}>
      <h1>Hello World</h1>
      <Button label="Click Me" />
    </div >
  );
}

export default App;
