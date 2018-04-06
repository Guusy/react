import React from 'react';
import Play from '../../icons/components/Play';
import Pause from '../../icons/components/Pause';

import './playPause.css';
const PlayPause = props => (
  <div className="PLayPause">

    {props.isPaused ?
      <button onClick={props.changePlayPause}>

        <Play size={25} color="white" />
      </button>

      :
      <button onClick={props.changePlayPause} >
        <Pause size={25} color="white" />
      </button>


    }



  </div>
)
export default PlayPause