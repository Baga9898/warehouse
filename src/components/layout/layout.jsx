import { useDispatch }   from 'react-redux';
import React             from 'react';

import Footer            from './footer/footer';
import Header            from './header/header';
import SidebarMenu       from './sidebarMenu/sidebarMenu';

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  const closeSidebar = () => {
    dispatch({ type: 'CLOSE_SIDEBAR' });
  }

  return (
    <>
      <Header />
        <SidebarMenu />
        <div className='container' onClick={closeSidebar}>
          {children} 
        </div>
      <Footer />
    </>
  )
}

export default Layout;