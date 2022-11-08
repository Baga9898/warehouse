import React       from 'react';

import Leftside    from './leftside';
import Rightside   from './rightside';

import './header.scss';

const Header = () => {
  return (
    <header className='header'>
      <Leftside />
      <Rightside />
    </header>
  )
}

export default Header;