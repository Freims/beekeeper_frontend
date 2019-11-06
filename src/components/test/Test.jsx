import React from 'react'
import CustomButton from '../custom-button/CustomButton'
import './Test.scss'

const Test = ({ pepe }) => (
  <h1>
    this is a test {pepe || ''}
    <div className='custom-card'>Hola
    
    <CustomButton />
    </div>
  </h1>
)

export default Test
