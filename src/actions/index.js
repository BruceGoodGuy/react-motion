import {actions} from './../constants/main'
import callAPI from './../utils/API';

export const gotToStore = (data, history) => {
    return {
        type: actions.SAVE_STORE,
        data: data,
        history: history
    }
}

export const doLogin = (users, dispatch, history) => {
    users.password = btoa(users.password);
    return (dispatch) => {
        return callAPI('login','POST',JSON.stringify(users)).then(res => {
            dispatch(gotToStore(res, history));
        })
    }
}