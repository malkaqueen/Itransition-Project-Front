import { FETCH_ALL_COMPS } from "./types";

const initialState = {
    companies: [],
    responseType: ''
}

export const allCompaniesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_COMPS:
            return { ...state, companies: action.payload }
        default:
            return state
    }
}