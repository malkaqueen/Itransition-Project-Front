import { SET_USER_ID, SET_ROLE, SET_LANGUAGE, SET_THEME, SET_USER_NAME } from "./types";

const initialState = {
    userId: (localStorage.getItem('userId')) ? Number(localStorage.getItem('userId')) : null,
    role: (localStorage.getItem('role')) ? localStorage.getItem('role') : null,
    theme: (localStorage.getItem('theme')) ? localStorage.getItem('theme') : 'LIGHT',
    language: (localStorage.getItem('language')) ? localStorage.getItem('language') : 'EN',
    name: (localStorage.getItem('name')) ? localStorage.getItem('name') : null,
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