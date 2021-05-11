import {FETCH_COMPANY, CREATE_COMMENT} from "./types";

const initialState = {
    company: {},
    comments: []
}

export const companyReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case FETCH_COMPANY:
            return {...state, company: action.payload}
        case CREATE_COMMENT:
            return {...state, comments: state.posts.concat([action.payload])}
        default: return state
    }
}