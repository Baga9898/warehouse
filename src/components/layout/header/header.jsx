import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import './header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__rightside'>
        <FontAwesomeIcon className='header__menu-icon' icon={faBars} />
        <Link to='/'>
          <div className='header__logo'>WHS</div>
        </Link>
      </div>
      <div>
        <FontAwesomeIcon className='header__profile-icon' icon={faUser} />
      </div>
    </header>
  )
}

export default Header;