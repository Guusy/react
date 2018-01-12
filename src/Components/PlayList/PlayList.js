import React from 'react';
import Media from './Media';


/*function PlayList(props){
  return(
    <div onClick={handleClick}>
      playlist
      </div>
  )
}*/
export default function PlayList(props) {
    return (
      <div>
        <div>
          {props.data.title}
          <hr/>
          {props.data.description}
        </div>
        <div>
{
  props.data.playlist.map(elemento=><Media key={elemento.id} {...elemento} />)
}
        </div>
        
         
      
      </div>
    );
  
}
/**/
