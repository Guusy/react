import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayList from './Components/PlayList/PlayList';

import data from './api.json';

class App extends Component {
  render() {
    return (
      <div className="App">
     
     <PlayList data={data}/>
      </div>
    );
  }
}

export default App;
