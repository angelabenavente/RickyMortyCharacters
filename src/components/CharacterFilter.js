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
      this.props.onChangeHandler(event.target.value);
    }

    return (
      <React.Fragment>
        <Header/>
        <form value={this.props.inputValue} className="filterWrapper">
          <input
            className="filterWrapper__searchInput"
            type='text'
            value={this.props.inputValue}
            placeholder={this.state.placeholder} 
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            onChange={onChangeHandler}
          />
        </form>
      </React.Fragment>
    )
  }
}

export default CharacterFilter;