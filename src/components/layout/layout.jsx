import React from 'react'
import Footer from './footer/footer';
import Header from './header/header';

const Layout = ({ children }) => {
  return (
    <>
        <Header />
          <div className='container'>
            {children} 
          </div>
        <Footer />
    </>
  )
}

export default Layout;