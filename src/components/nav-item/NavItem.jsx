import React from 'react'
import './NavItem.scss'

import { NavLink } from 'react-router-dom'

const NavItem = ({ title, ...props }) => (
  <span className="nav-item-container">
    <NavLink {...props} className='nav-item' activeClassName='nav-item-active'>
      <span>{title}</span>
    </NavLink>
  </span>
)

export default NavItem
