import React, { Component } from 'react';
import RegularError from '../components/RegularError';

export default class HandleError extends Component{
state={
  fatalError:false
}

  componentDidCatch(error,info){
    // envia error to API
    this.setState({
      fatalError:true
    }) 
  }
  render(){
    if(this.state.fatalError){
      return <RegularError/>
    }
    return this.props.children
  }
}