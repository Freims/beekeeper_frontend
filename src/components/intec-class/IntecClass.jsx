import React from 'react'
import './IntecClass.scss'

const IntecClass = ({ intecclass }) => {
  const { name, absence, notices } = intecclass

  return (
    <div className='intec-class-component '>
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
export default IntecClass
