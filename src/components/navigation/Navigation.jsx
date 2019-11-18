import React, { Fragment } from 'react'
import NavItem from '../nav-item/NavItem'
import './Navigation.scss'

const Navigation = () => (
  <Fragment>
    <NavItem key='inicio' exact to={'/'} title={'Inicio'} />
    <NavItem key='misClases' to={'/clases'} title={'Mis clases'} />
  </Fragment>
)

export default Navigation
