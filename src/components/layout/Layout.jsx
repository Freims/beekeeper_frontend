import React from 'react'
import { withRouter } from 'react-router-dom'

import './Layout.scss'

import Header from '../header/Header'
import ContentContainer from '../content-container/ContentContainer'
import MobileContentContainer from '../mobile-content-container/MobileContentContainer'

const Layout = ({ history, children }) => {
  if (history.location.pathname.includes('/login')) return ''
  else {
    return (
      <div className='layout'>
        <Header />
        <section id='web'>
          <ContentContainer>{children}</ContentContainer>
        </section>
        <section id='mobile'>
          <MobileContentContainer>{children}</MobileContentContainer>
        </section>
      </div>
    )
  }
}

export default withRouter(Layout)
