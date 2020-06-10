import React from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './parent.js';

function App() {
  return (
    <div className="App">
      <parent child1="ali" child2="Hina"/>
    </div>
  );
}

export default App;
