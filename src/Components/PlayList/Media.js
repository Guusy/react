import React, { PureComponent } from 'react';
import './media.css';
import PropTypes from "prop-types";
export default class Media extends PureComponent {
  state = {
    author: this.props.author
  }
  

  handleClick = (event) => {
    console.log(this.props.title)
    this.setState({
      author: " new author"
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

    return (
      <div className="Media" onClick={this.props.openModal} >
        <div className="Media-cover">
          <img
            src={this.props.cover}
            width={260}
            height={160}
            className="Media-image"
          />
          <h3 className="Media-title" >{this.props.title}</h3>

          <p className="Media-author">
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
  type: PropTypes.oneOf(['video', 'audio'])
}


