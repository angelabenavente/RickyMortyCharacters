import React from 'react';

const CharacterFilter = props => {

  const onChangeHandler = event => {
    //event.preventDefault();
    props.onChangeHandler(event.target.value);
  }
  
  return <form value={props.inputValue} className="filter-wrapper">
    <input onChange={onChangeHandler} type='text' value={props.inputValue}></input>
    </form>
}

export default CharacterFilter;