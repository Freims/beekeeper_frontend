import React, { useState } from 'react'
import './Test.scss'
import Counter from 'react-omni-counter'
import QrReader from 'react-qr-reader'

const Test = ({ pepe }) => {
  let next90Mins = new Date(Date.now() + 5400000)
  const [code, setCode] = useState()

  const  handleScan = data => {
    if (data) {
      setCode(data)
    }
  }
  const handleError = err => {
    console.error(err)
  }

  return (
    <div className='test'>
      <Counter timeleft={1200} />
      <Counter to={next90Mins} mode='hh:mm:ss' />
      <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '40rem' }}
        />
        <h1>{code}</h1>
    </div>
    
  )
}
export default Test
