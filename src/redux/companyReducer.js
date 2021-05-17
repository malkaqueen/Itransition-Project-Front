import { FETCH_AUTHOR, FETCH_COMPANY, FETCH_BONUSES } from "./types";

const initialState = {
    company: null,
    author: '',
    bonuses: []
}

export const companyReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMPANY:
            return { ...state, company: action.payload }
        case FETCH_AUTHOR:
            return { ...state, author: action.payload }
        case FETCH_BONUSES:
            return { ...state, bonuses: action.payload }
        default:
            return state
    }
}