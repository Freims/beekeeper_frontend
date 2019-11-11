import React from 'react'
import './Layout.scss'

import Header from '../header/Header'
import ContentContainer from '../content-container/ContentContainer'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Header />
      <ContentContainer>
        {children}
      </ContentContainer>
    </div>
  )
}

export default Layout
