import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../header/Header'
import ContentContainer from '../content-container/ContentContainer'
const Layout = ({ children }) => {
  useEffect(() => {
    console.log('hola amighos')
  }, [])

  return (
    <div>
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <Link to='/freims'>Home</Link>
    </div>
  )
}

export default Layout
