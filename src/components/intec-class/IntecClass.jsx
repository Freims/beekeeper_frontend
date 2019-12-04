import React from 'react'
import './IntecClass.scss'
import { withRouter } from 'react-router-dom'

const IntecClass = ({ intecclass, history }) => {
  const { name, absence, notices } = intecclass

  const goToDetails = () => {
    history.push(`clases/${name.replace(/\s/g, '').toLowerCase()}`)
  }

  return (
    <div className='intec-class-component ' onClick={goToDetails}>
      <div className='name'>{name}</div>
      <div className='info'>
        <div className='text-around'>
          <span>Ausencias</span>
          <span>{absence}</span>
        </div>
        <div className='text-around'>
          <span>Avisos</span>
          <span>{notices}</span>
        </div>
      </div>
    </div>
  )
}
export default withRouter(IntecClass)
