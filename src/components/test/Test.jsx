import React from 'react'
import './Test.scss'
import { Link} from "react-router-dom";


const Test = () => (
  <div className="test">
    <Link to="/freims">freims 1 </Link>
    <Link to="/freims2">freims2</Link>
  </div>
)

export default Test
