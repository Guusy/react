import React, { Component } from 'react';
import './media.css';
import bitcoin from './../../images/covers/bitcoin.jpg';
import PropTypes from "prop-types";
export default class Media extends Component {
  state= {
    author:this.props.author
  }
  /*  constructor(props){
        super(props);
        this.state = {
        author: props.author 
        }

        
        //this.handleClick = this.handleClick.bind(this)
    }*/

    handleClick =(event) =>{
      console.log(this.props.title)
      this.setState({
        author:" new author"
      })
    }

  render() {
   /* const style= {
      container:{
        color:'#44546b',
        cursor:'pointer',
        width:260,
        border:'1px solid red'
      }
    };*/
    let urlImage= "./../."+this.props.cover;
    console.log(urlImage)
   let image = require(urlImage);
    return (
      <div className="Media" onClick={this.handleClick} >
        <div>
        <img
        src={image}
        width={260}
        height={160}
        />
        <h3>{this.props.title}</h3>
        <p>por que es una mierda</p>
        <p>
         Author : {this.state.author}
        </p>
        </div>
      </div>
    );
  }
}

Media.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  type:PropTypes.oneOf(['video','audio'])
}

 
