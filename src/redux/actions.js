import {
    FETCH_COMPANY, FETCH_COMMENTS,
    SHOW_ALERT, HIDE_ALERT, TEST_PROJECT, LIKE,
    SET_DATE, FETCH_CATEGORIES, SET_CATEGORY, ADD_TAG, ADD_PHOTO,
    ADD_USER_PHOTO, SET_USER_ID, SET_ROLE,
    SET_LANGUAGE, SET_THEME, SET_USER_NAME, LOGIN_VALIDATE, FETCH_TAGS, FETCH_BEST_COMPS,
    FETCH_REC_COMPS,
    FETCH_AUTHOR
} from "./types";

export function setUserId(userId) {
    return {
        type: SET_USER_ID,
        payload: userId
    }
}

export function setRole(role) {
    return {
        type: SET_ROLE,
        payload: role
    }
}

export function setLanguage(lang) {
    return {
        type: SET_LANGUAGE,
        payload: lang
    }
}

export function setTheme(theme) {
    return {
        type: SET_THEME,
        payload: theme
    }
}

export function setUserName(name) {
    return {
        type: SET_USER_NAME,
        payload: name
    }
}

export function logout() {
    return async dispatch => {
        dispatch(setUserId(null))
        dispatch(setRole(null))
        dispatch(setUserName(''))
    }
}

export function loginValidate(isValid) {
    return {
        type: LOGIN_VALIDATE,
        payload: isValid
    }
}

export function login(email, password) {
    const userInfo = {
        email,
        password
    }
    return async dispatch => {
        try {
            const response = await fetch('http://localhost:8090/user/login',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },
                    body: JSON.stringify(userInfo)
                }
            )
            const json = await response.json()
            const userNameResp = await fetch('http://localhost:8090/user/getFullName',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },
                    body: json.userId
                }
            )
            const userName = await userNameResp.text()

            dispatch(setUserId(json.userId))
            dispatch(setRole(json.role))
            dispatch(setTheme(json.theme))
            dispatch(setLanguage(json.language))
            dispatch(setUserName(userName))

            dispatch(loginValidate(true))
        }
        catch (e) {
            console.log('couldnt process login')
            dispatch(loginValidate(false))
        }
    }
}

export function register(firstName, lastName, photo, email, password) {
    const userInfo = {
        firstName,
        lastName,
        email,
        password
    }
    return async dispatch => {
        try {
            const response = await fetch('http://localhost:8090/user/register',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },
                    body: JSON.stringify(userInfo)
                }
            )
            const json = await response.json()
            await fetch(`http://localhost:8090/user/photo/save/${json.userId}`,
                {
                    method: 'POST',
                    body: photo
                }
            )
            const userNameResp = await fetch('http://localhost:8090/user/getFullName',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },
                    body: json.userId
                }
            )
            const userName = await userNameResp.text()

            dispatch(setUserId(json.userId))
            dispatch(setRole(json.role))
            dispatch(setTheme(json.theme))
            dispatch(setLanguage(json.language))
            dispatch(setUserName(userName))
        }
        catch (e) {
            console.log('couldnt process registration')
        }
    }

}

export function fetchCompany(companyId, userId) {
    const companyInfo = {
        userId,
        companyId
    }

    return async dispatch => {
        try {
            const response = await fetch('http://localhost:8090/company/getCompanyInfo',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },
                    body: JSON.stringify(companyInfo)
                }
            )
            const json = await response.json()
            dispatch({ type: FETCH_COMPANY, payload: json })

        } catch (e) {
            console.log('Couldn\'t fetch company')
        }
    }
}

export function postComment(text, companyId, userId) {
    const newComment = {
        userId,
        companyId,
        text
    }
    return async dispatch => {
        try {
            await fetch('http://localhost:8090/comment/set',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },
                    body: JSON.stringify(newComment)
                })
            dispatch(fetchComments(companyId, userId))
        }
        catch (e) {
            console.log("Couldn't post comment")
        }

    }
}

export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })

        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}

export function testProject() {
    return async dispatch => {
        const response = fetch('http://localhost:8090/company/test',
            {
                method: "POST",
                body: "Go fuck yourself too"
            })
        dispatch({ type: TEST_PROJECT, payload: response })
        console.log(response)
    }
}

export function fetchComments(companyId, userId) {
    const ids = {
        companyId,
        userId
    }
    return async dispatch => {
        try {
            const response = await fetch('http://localhost:8090/company/comment/get',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },
                    body: JSON.stringify(ids)
                }
            )
            const json = await response.json()

            dispatch({ type: FETCH_COMMENTS, payload: json })
        }
        catch (e) {
            console.log('couldnt fetch comments')
        }
    }
}

export function like(commentId, userId) {
    const response = fetch('')
    const json = { likes: 10, liked: true }
    return {
        type: LIKE,
        payload: json
    }
}

export function setDate(date) {
    return {
        type: SET_DATE,
        payload: date
    }
}

export function setCategory(categoryId) {
    return {
        type: SET_CATEGORY,
        payload: categoryId
    }
}

export function fetchCategories() {
    return async dispatch => {
        try {
            const response = await fetch('http://localhost:8090/category/get')
            const json = await response.json()
            dispatch({ type: FETCH_CATEGORIES, payload: json })
        }
        catch (e) {
            console.log('couldnt fetch categories')
        }
    }
}

export function addTag(tags) {
    return {
        type: ADD_TAG,
        payload: tags
    }
}

export function addPhoto(formData) {
    return {
        type: ADD_PHOTO,
        payload: formData
    }
}

export function addUserPhoto(formData) {
    return {
        type: ADD_USER_PHOTO,
        payload: formData
    }
}

function postTags(companyId, tags) {
    const tagsInfo = {
        companyId,
        "tagsList": tags
    }
    return async dispatch => {
        try {
            await fetch('http://localhost:8090/company/tags/save',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },
                    body: JSON.stringify(tagsInfo)
                })
        }
        catch (e) {
            console.log('Post tags failed')
        }
    }
}

function postVideo(companyId, videoUrl) {
    const vidInfo = {
        companyId,
        videoUrl
    }
    return async dispatch => {
        try {
            await fetch('http://localhost:8090/company/video/save',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },
                    body: JSON.stringify(vidInfo)
                })
        }
        catch (e) {
            console.log('Post video failed')
        }
    }
}

function postPhoto(companyId, companyPhoto) {
    return async dispatch => {
        try {
            await fetch(`http://localhost:8090/company/photo/save/${companyId}`,
                {
                    method: 'POST',
                    body: companyPhoto
                })
        }
        catch (e) {
            console.log('Post photo failed')
        }
    }
}

export function createCompany(
    userId, name, description,
    sum, date, category,
    vid, tags, companyPhoto
) {
    const newCompany = {
        "userId": userId,
        'name': name,
        'categoryId': Number(category),
        'expirationDate': Date.parse(date).toString(),
        'targetSum': Number(sum),
        'description': description
    }
    return async dispatch => {
        try {
            const response = await fetch('http://localhost:8090/company/create',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },
                    body: JSON.stringify(newCompany)
                }
            )

            const companyId = await response.text();

            dispatch(postTags(companyId, tags))
            dispatch(postVideo(companyId, vid))
            dispatch(postPhoto(companyId, companyPhoto))
        }
        catch (e) {
            console.log('Couldnt create company')
        }
    }
}

export function fetchTags() {
    return async dispatch => {
        try {
            const response = await fetch('http://localhost:8090/tags/get')
            const json = await response.json()
            dispatch({ type: FETCH_TAGS, payload: json })
        }
        catch (e) {
            console.log('Couldnt fetch tags');
        }
    }
}

export function fetchBestComps() {
    return async dispatch => {
        try {
            const response = await fetch('http://localhost:8090/company/getByRating')
            const json = await response.json()
            dispatch({ type: FETCH_BEST_COMPS, payload: json })
        }
        catch (e) {
            console.log('Couldnt fetch best companies');
        }
    }
}

export function fetchRecentComps() {
    return async dispatch => {
        try {
            const response = await fetch('http://localhost:8090/company/getByTime')
            const json = await response.json()
            dispatch({ type: FETCH_REC_COMPS, payload: json })
        }
        catch (e) {
            console.log('Couldnt fetch best companies');
        }
    }
}

export function fetchAuthor(userId) {
    return async dispatch => {
        try {
            const userNameResp = await fetch('http://localhost:8090/user/getFullName',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },
                    body: userId
                }
            )
            const userName = await userNameResp.text()

            dispatch({ type: FETCH_AUTHOR, payload: userName })
        }
        catch (e) {
            console.log('Couldn\'t fetch author name');
        }
    }
}

export function fetchBonuses(companyId) {

}
