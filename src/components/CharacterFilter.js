import React from 'react';
import Header from './Header';


class CharacterFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: "Search a character...",
    }

 

  }
 
 

  render() {
    const onFocusHandler = () => {
      this.setState({
        placeholder: ''
      });
    }

    const onBlurHandler = () => {
      this.setState({
        placeholder: 'Search a character...'
      });
    }

    const onChangeHandler = event => {
      //event.preventDefault();
      this.props.onChangeHandler(event.target.value);
    }
  return (
    <React.Fragment>
      <Header/>
      <form value={this.props.inputValue} className="filter-wrapper">
      <input onFocus={onFocusHandler} onBlur={onBlurHandler} className="search-characters"  placeholder={this.state.placeholder} onChange={onChangeHandler} type='text' value={this.props.inputValue}></input>
      </form>
    </React.Fragment>
  )
}
}
export default CharacterFilter;