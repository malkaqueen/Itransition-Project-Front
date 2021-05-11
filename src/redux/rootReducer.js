import {combineReducers} from "redux";
import {companyReducer} from "./companyReducer";
import {appReducer} from "./appReducer";

export const rootReducer=combineReducers({
    company: companyReducer,
    app: appReducer
})