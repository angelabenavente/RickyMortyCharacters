import React from 'react';
import headerImage from '../images/headerImage.png'



class Header extends React.Component {
  render() {
    return (
      <header className="header">
    <img className="headerImage" src={headerImage} alt="Rick and Morty logo"></img>
    </header>
    )
  }
}

export default Header;