import { SET_USER_ID, SET_ROLE, SET_LANGUAGE, SET_THEME, SET_USER_NAME } from "./types";

const initialState = {
    userId: null,
    role: null,
    theme: 'LIGHT',
    language: 'EN',
    name: ''
}

export const userSettingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_ID:
            return { ...state, userId: action.payload }
        case SET_ROLE:
            return { ...state, role: action.payload }
        case SET_LANGUAGE:
            return { ...state, language: action.payload }
        case SET_THEME:
            return { ...state, theme: action.payload }
        case SET_USER_NAME:
            return { ...state, name: action.payload }
        default:
            return state
    }
}