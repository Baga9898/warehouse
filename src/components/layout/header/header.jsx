import React from 'react';
import {Link} from "react-router-dom";
import './header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__rightside'>
        
        <div>WHS</div>
      </div>
      <div>
        <div>login/logout or profile</div>
      </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
    </header>
  )
}

export default Header;