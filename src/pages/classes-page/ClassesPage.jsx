import React, { useEffect, useState } from 'react'
import './ClassesPage.scss'
import IntecClass from '../../components/intec-class/IntecClass'
import { connect } from 'react-redux'
import { setCurrentClasses } from '../../redux/classes/classes-actions'
import { fetchClasses } from '../../utils/response-handler'

const ClassesPage = ({ currentUser, classes, setCurrentClasses }) => {

  const [intecClasses, setIntecClasses] = useState([])

  useEffect(() => {
    fetchClasses(setIntecClasses, currentUser.dbId, setCurrentClasses)
  }, [classes, setCurrentClasses, currentUser.dbId])

  return (
    <div className='classes-page'>
      <div className='class-container'>
        {intecClasses && intecClasses.map(
          intecclass =>
            intecclass ?(
              <div key={intecclass.course} className='class-component'>
                <IntecClass intecclass={intecclass} />
              </div>
            ): ""
        )}
      </div>
    </div>
  )
}

const mapStateToProps = ({ user}) => ({
  currentUser: user.currentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentClasses: classes => dispatch(setCurrentClasses(classes))
})

export default connect(mapStateToProps, mapDispatchToProps)(ClassesPage)
