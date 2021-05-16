import { SHOW_ALERT, HIDE_ALERT, TEST_PROJECT} from "./types";

const initialState = {
    loading: false,
    alert: null
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {...state, alert: action.payload}
        case HIDE_ALERT:
            return {...state, alert: null}
        case TEST_PROJECT:
            return {...state, testResponse: action.payload}
        default:
            return state
    }
}