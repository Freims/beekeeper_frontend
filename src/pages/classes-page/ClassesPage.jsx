import React from 'react'
import './ClassesPage.scss'
import IntecClass from '../../components/intec-class/IntecClass'

const ClassesPage = () => {
  const classes = [
    {
      name: 'Calculo Integral',
      absence: 0,
      notices: 0
    },
    {
      name: 'Biología IV',
      absence: 0,
      notices: 0
    },
    {
      name: 'Ergonomía',
      absence: 0,
      notices: 0
    }
  ]
  return (
    <div className='classes-page'>
      <div className='class-container'>
        {classes.map(intecclass => (
          <div key={intecclass.name} className='class-component'>
            <IntecClass intecclass={intecclass} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClassesPage
