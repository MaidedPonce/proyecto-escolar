import React from 'react'
import Header from '../components/Header'

const Layout = ({ children }) => (
  <div className='header'>
    {children}
    <Header />
  </div>

)

export default Layout
