import {
    SET_DATE, FETCH_CATEGORIES, SET_CATEGORY, ADD_TAG,
    ADD_PHOTO
} from './types';

const initialState = {
    name: '',
    description: '',
    expirationDate: null,
    categoryId: 0,
    tags: [],
    video: '',
    photo: null,
    categories: [],
    company: {}
}

export const createCompanyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATE:
            return { ...state, expirationDate: action.payload }
        case FETCH_CATEGORIES:
            return { ...state, categories: action.payload }
        case SET_CATEGORY:
            return { ...state, categoryId: action.payload }
        case ADD_TAG:
            return { ...state, tags: action.payload }
        case ADD_PHOTO:
            return { ...state, photo: action.payload }
        default:
            return state
    }
}