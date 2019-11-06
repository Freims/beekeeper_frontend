import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../header/Header'
import ContentContainer from '../content-container/ContentContainer'
import './Layout.scss';

const Layout = ({ children }) => {
  useEffect(() => {
    console.log('hola amighos')
  }, [])

  return (
    <div className="layout-container">
      <Header />
      <ContentContainer>{children}</ContentContainer>
    </div>
  )
}

export default Layout
