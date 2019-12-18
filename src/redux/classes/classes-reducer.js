import { ClassesActionTypes } from './classes-types'

const INITIAL_STATE = {
    currentClasses: null
}

const classesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ClassesActionTypes.SET_CURRENT_CLASSES:
            return {
                ...state,
                currentClasses: action.payload
            }
        case ClassesActionTypes.REMOVE_CURRENT_CLASSES:
            return{
                currentClasses: null
            }
        default:
            return state;
    }
}

export default classesReducer;