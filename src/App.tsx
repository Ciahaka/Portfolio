import React from 'react';
import './App.css';
import {Header} from './Component/header/Header';
import {Main} from './Component/main/Main';
import {Skills} from './Component/skills/Skills';

function App() {
  return (
    <div className="App">
    <Header/>
      <Main/>
      <Skills/>
    </div>
  );
}

export default App;
