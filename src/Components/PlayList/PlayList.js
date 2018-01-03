import React, { Component } from 'react';
import Media from './/Media';

export default class PlayList extends Component {
  render() {
      const playlist = this.props.data.categories[0].playlist
      console.log(this.props.data)
    return (
      <div >
          {
              playlist.map(elemento=>{
              return  <Media key={elemento.id} {...elemento} />
              })
               
          }
      
      </div>
    );
  }
}
