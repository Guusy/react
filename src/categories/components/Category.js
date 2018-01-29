import React from 'react';
import PlayList from '../../Components/PlayList/PlayList';

export default function Category(){
return(
    <div>
        {
            props.playlist.map(item=>{
                <PlayList/>
            })
        }
        </div>
)

}