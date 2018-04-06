import React from 'react';
import './videoPlayerControls.css';

function VideoPlayerControls(props){
  return(
    <div className="VideoPlayerControls">
      {props.children}
    </div>
  )
}
export default VideoPlayerControls