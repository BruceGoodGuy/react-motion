import {actions} from './../constants/main'
import callAPI from './../utils/API';

export const saveToStore = (data) => {
    return {
        type: actions.SAVE_STORE,
        data: data
    }
}

export const doLogin = (users, dispatch) => {
    return (dispatch) => {
        return callAPI('products','GET',null).then(res => {
            dispatch(saveToStore(res.data));
        })
    }
}