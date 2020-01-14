import React from 'react';
import Header from './Header';


const CharacterFilter = props => {

  const onChangeHandler = event => {
    //event.preventDefault();
    props.onChangeHandler(event.target.value);
  }
  
  return (
    <React.Fragment>
      <Header/>
      <form value={props.inputValue} className="filter-wrapper">
      <input className="search-characters"  placeholder="&#xF002; Search a character..." style={{fontFamily: "Arial, FontAwesome"}} onChange={onChangeHandler} type='text' value={props.inputValue}></input>
      </form>
    </React.Fragment>
  )
}

export default CharacterFilter;