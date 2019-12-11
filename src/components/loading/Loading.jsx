import React from 'react'
import './Loading.scss'

const Loading = ({ hidden }) => (
  hidden &&
  <div className={`loading-bee `}>
    <img className='bee-gif' src={require('../../assets/images/loading_beekeeper.gif')} alt='flying bee' />
    <span className='font-loading'>Cargando. . .</span>
  </div>
)

export default Loading
