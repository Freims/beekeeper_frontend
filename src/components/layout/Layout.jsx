import React from 'react'
import Header from '../header/Header'
import ContentContainer from '../content-container/ContentContainer'
import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <ContentContainer>{children}</ContentContainer>
    </div>
  )
}

export default Layout
