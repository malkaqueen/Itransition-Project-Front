import {FETCH_COMMENTS, POST_COMMENT, LIKE, DISLIKE} from './types'

const initialState={
    comments: []
}

export const commentsReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case FETCH_COMMENTS:
            return {...state, comments: action.payload}
        case POST_COMMENT:
            return {...state, comments: state.comments.concat([action.payload])}
        case LIKE:
            return {...state, likes: action.payload}
        case DISLIKE:
            return {...state, likes: action.payload}
        default:
            return state
    }
}