import React from 'react';

function Categories(){
return(
    <div>
        {
            props.categories.map(catergoria=>{
                <Category/>
            })
        }
    </div>
)

}
export default Categories