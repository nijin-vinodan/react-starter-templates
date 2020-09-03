import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is a starter pack with following configurations</p>
        <ol>
          <li>Typescript</li>
          <li>SCSS</li>
          <li>ESLint</li>
          <li>Prettier</li>
          <li>Pre-Commit Hook with Husky</li>
        </ol>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
