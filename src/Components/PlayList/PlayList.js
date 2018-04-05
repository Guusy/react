import React from 'react';
import Media from './Media';
import Play from './../../icons/components/Play';
import Volume from './../../icons/components/Volume';
import Pause from './../../icons/components/Pause';
import FullScreen from './../../icons/components/FullScreen';
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
       {/*   <Play
          size={30}
          color={'red'}
          />
          <Volume
          size={30}
          color={'coral'}
          />
          <Pause
          size={30}
          color={'black'}
          />
          <FullScreen
          size={30}
          color={'blue'}
          />
       */}
          {
  props.playlist.map(elemento=><Media openModal={props.openModal} key={elemento.id} {...elemento} />)
}
        </div>
        
         
      
      </div>
    );
  
}
/**/
