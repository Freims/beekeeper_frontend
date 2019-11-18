import React from 'react'
import './Layout.scss'

import Header from '../header/Header'
import ContentContainer from '../content-container/ContentContainer'
import MobileContentContainer from '../mobile-content-container/MobileContentContainer'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <MobileContentContainer>{children}</MobileContentContainer>
    </div>
  )
}

export default Layout
