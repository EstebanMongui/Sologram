import React from 'react'
import Navbar from './Navbar'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className='App'>
        <Header />
            { children }
        <Navbar />
    </div>
  )
}

export default Layout