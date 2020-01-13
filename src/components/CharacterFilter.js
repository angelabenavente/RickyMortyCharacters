import React from 'react';
import headerImage from '../images/headerImage.png'

const CharacterFilter = props => {

  const onChangeHandler = event => {
    //event.preventDefault();
    props.onChangeHandler(event.target.value);
  }
  
  return (
  <header className="header">
    <img className="headerImage" src={headerImage} alt="Rick and Morty logo"></img>
    <form value={props.inputValue} className="filter-wrapper">
    <input onChange={onChangeHandler} type='text' value={props.inputValue}></input>
    </form>
    </header>
  )
}

export default CharacterFilter;