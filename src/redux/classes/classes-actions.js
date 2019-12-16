import { ClassesActionTypes } from './classes-types'

export const setCurrentClasses = classes => ({
    type: ClassesActionTypes.SET_CURRENT_CLASSES,
    payload: classes
});

export const removeCurrentClasses = () => ({
    type: ClassesActionTypes.REMOVE_CURRENT_CLASSES,
    payload: ''
});
