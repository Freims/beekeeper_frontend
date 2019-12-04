import React from 'react';
import './ClassPage.scss';
import { withRouter } from 'react-router-dom'


const ClassPage = ({match}) => (
    <div className='class-page'>
        <h2>ClassPage</h2>
    </div>
)

export default withRouter(ClassPage);