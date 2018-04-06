import React, { Component } from 'react';
import Search from '../components/Search';
export default class SearchContainer extends Component {
  state = {
    value:''
  }
  sendFormSearch = event => {
    event.preventDefault();
    console.log(this.input.value,"pelotudo")
  }
  setInputRef = element =>{
    this.input=element;
  }
  changeInput = event =>{
    this.setState({
      value : (event.target.value).replace(" ","-")
    })
  }
  render() {
    return <Search value={this.state.value} changeInput={this.changeInput} setRef={this.setInputRef} sendFormSearch={this.sendFormSearch} />
  }
}