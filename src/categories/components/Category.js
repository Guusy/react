import React from 'react';
import PlayList from '../../Components/PlayList/PlayList';

export default function Category(props){
return(
    <div className="Category">
        <p className="Category-description">{props.description}</p>
        <h2 className="Category-title">{props.title}</h2>

                <PlayList openModal={props.openModal}
                playlist={props.playlist}
              />
          
        </div>
)

}