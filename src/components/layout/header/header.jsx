import React, { useRef, useEffect }   from 'react';
import { Link }                       from "react-router-dom";
import { FontAwesomeIcon }            from '@fortawesome/react-fontawesome';
import { faBars, faUser }             from '@fortawesome/free-solid-svg-icons';

import './header.scss';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();

  const openCloseSidebar = () => {
    dispatch({type: 'OPEN_CLOSE_SIDEBAR'});
  }

  return (
    <header className='header'>
      <div className='header__rightside'>
        <FontAwesomeIcon className='header__menu-icon' icon={faBars} onClick={openCloseSidebar} />
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