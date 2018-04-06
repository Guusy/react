import React from 'react';
import './progressBar.css';
function ProgessBar(props) {
  return (
    <div className="ProgessBar">
     <input type="range"
            min={0}
            max={props.duration}
            value={props.value}
            onChange={props.changeProgress}
     />
    </div>
  )
}
export default ProgessBar;