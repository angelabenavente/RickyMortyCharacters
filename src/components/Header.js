import React from 'react';
import headerImage from '../images/headerImage.png';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img className="header__image" src={headerImage} alt="Rick and Morty logo"/>
      </header>
    )
  }
}

export default Header;