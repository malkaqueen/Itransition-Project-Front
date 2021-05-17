import { FETCH_TAGS, FETCH_BEST_COMPS, FETCH_REC_COMPS } from './types';

const initialState = {
    tags: [],
    bestCompanies: [],
    recentCompanies: []
}

export const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TAGS:
            return { ...state, tags: action.payload }
        case FETCH_BEST_COMPS:
            return { ...state, bestCompanies: action.payload }
        case FETCH_REC_COMPS:
            return { ...state, recentCompanies: action.payload }
        default:
            return state
    }
}