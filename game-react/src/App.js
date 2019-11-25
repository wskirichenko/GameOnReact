import React, { Component } from 'react';
import './App.scss';
import Meny from './meny/Meny';
import MainContent from './main/MainContent';

const App = (props) => {
  return (
    <div className="App">
        <Meny />
        <MainContent state={props.state}/>
    </div>
  );
}

export default App;