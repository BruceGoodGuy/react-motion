import {combineReducers} from 'redux';

import users from './../reducers/users';

const appReducers = combineReducers({
    users
})

export default appReducers