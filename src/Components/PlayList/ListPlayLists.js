import React, { Component } from 'react';
import Media from './/Media';
import PlayList from './PlayList';

export default class ListPlayLists extends Component {
  render() {
    console.log(this.props)
    return (

      <div >
        <div></div>
        <div>
        {
              this.props.data.categories.map(elemento=>{
              return  <PlayList key={elemento.id} data={elemento} />
              })
               
          }
        </div>
         
      
      </div>
    );
  }
}
