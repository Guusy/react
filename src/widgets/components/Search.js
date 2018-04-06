import React from 'react';
import "./search.css"
const Search = (props) => (
  <form onSubmit={props.sendFormSearch} className="Search">
    <input 
    //defaultValue="Valor default"
    value={props.value}
    onChange={props.changeInput}
      ref={props.setRef}
      type="text"
      name="search"
      placeholder="Busca tu video favorito" name="" id="" className="Search-input" />
  </form>
)
export default Search