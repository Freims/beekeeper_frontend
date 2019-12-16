import { combineReducers } from 'redux'
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage/session'
import userReducer from './user/user-reducer'
import classesReducer from './classes/classes-reducer'

const persistConfig ={
    key: 'root',
    storage,
    whitelist: ['user', 'classes'] 
}

const rootReducer = combineReducers({
    user: userReducer,
    classes: classesReducer
})

export default persistReducer(persistConfig, rootReducer)