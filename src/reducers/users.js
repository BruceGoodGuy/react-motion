import {actions} from './../constants/main';

let initialState = [
    {
        _token: '',
        user: ''
    }
];

const users = (state = initialState, action) =>{
    let history = action.history;
    switch(action.type){
        case actions.SAVE_STORE: 
        if(action.data.status === 200) {
            history.push('/');
        }else {
            history.push('/login');
        }
        return [...state];
        default: return [...state];
    }
}

export default users;
