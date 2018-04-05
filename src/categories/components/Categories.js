import React from 'react';
import Category from './Category';
import SearchContainer from '../../widgets/containers/Search'
function Categories(props){
return(
    <div className="Categories">
    <SearchContainer/>
        {
            props.categories.map(catergoria=>{
               return <Category openModal={props.openModal} key={catergoria.id} {...catergoria} />
            })
        }
    </div>
)

}
export default Categories