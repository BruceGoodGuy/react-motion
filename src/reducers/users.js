import {actions} from './../constants/main';

let initialState = [
    {
        _token: '',
        user: ''
    }
];

const users = (state = initialState, action) =>{
    switch(action.type){
        case actions.SAVE_STORE: console.log(action); return [...state]; break;
        default: return [...state];
    }
}

export default users;
