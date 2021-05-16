import {FETCH_COMPANY} from "./types";

const initialState = {
    company: {}
}

export const companyReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case FETCH_COMPANY:
            return {...state, company: action.payload}
        default:
            return state
    }
}