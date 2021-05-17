import { LOGIN_VALIDATE } from './types';

const initialState = {
    isValid: null
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_VALIDATE:
            return { ...state, isValid: action.payload }
        default:
            return state
    }
}