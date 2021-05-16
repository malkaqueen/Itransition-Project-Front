import { } from "./types";

const initialState = {
    userId: null,
    role: null,
    theme: 'LIGHT',
    language: 'EN'
}

export const userSettingsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}