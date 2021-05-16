import { ADD_USER_PHOTO } from './types';

const initialState = {
    photo: null
}

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_PHOTO:
            return { ...state, photo: action.payload }
        default:
            return state
    }
}