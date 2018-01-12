import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListPlayLists from './Components/PlayList/ListPlayLists';

import data from './api.json';

class App extends Component {
  render() {
    return (
      <div className="App">
     
     <ListPlayLists data={data}/>
      </div>
    );
  }
}

export default App;
