import React, { Component } from 'react';
import './App.scss';
import Meny from './meny/Meny';
import MainContent from './main/MainContent';

const App = () => {
  return (
    <div className="App">
        <Meny />
        <MainContent />
    </div>
  );
}

export default App;