import { FETCH_MY_COMPS } from "./types";

const initialState = {
    companies: []
}

export const myCompaniesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MY_COMPS:
            return { ...state, companies: action.payload }
        default:
            return state
    }
}