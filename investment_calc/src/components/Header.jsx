import React from 'react';
import headerImage from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header id='header'>
        <img src={headerImage} alt='header investment calulator logo'/>
        <h1>Investment Calculator</h1>
    </header>
  )
}

export default Header