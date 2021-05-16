import { combineReducers } from "redux";
import { companyReducer } from "./companyReducer";
import { appReducer } from "./appReducer";
import { commentsReducer } from "./commentsReducer";
import { createCompanyReducer } from "./createCompanyReducer";
import { userSettingsReducer } from "./userSettingsReducer";
import { registerReducer } from "./registerReducer";

export const rootReducer = combineReducers({
    company: companyReducer,
    app: appReducer,
    comments: commentsReducer,
    createCompany: createCompanyReducer,
    user: userSettingsReducer,
    registration: registerReducer
})