import React from 'react'
import SidebarMenu from '../sidebarMenu/sidebarMenu';
import Footer from './footer/footer';
import Header from './header/header';

const Layout = ({ children }) => {
  return (
    <>
        <Header />
        <SidebarMenu />
          <div className='container'>
            {children} 
          </div>
        <Footer />
    </>
  )
}

export default Layout;