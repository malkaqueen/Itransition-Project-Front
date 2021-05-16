import {
    FETCH_COMPANY, FETCH_COMMENTS, POST_COMMENT,
    SHOW_ALERT, HIDE_ALERT, TEST_PROJECT, LIKE,
    SET_DATE, FETCH_CATEGORIES, SET_CATEGORY, ADD_TAG, ADD_PHOTO,
    ADD_USER_PHOTO
} from "./types";

export function register(firstName, lastName, photo, email, password) {
    const userInfo = {
        firstName,
        lastName,
        email,
        password
    }
    return async dispatch => {
        try {
            const response = await fetch('',
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
            await fetch(``,
                {
                    method: 'POST',
                    body: photo
                }
            )
            const userNameResp = await fetch('',
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

export function fetchCompany(id) {
    return async dispatch => {
        try {
            //dispatch(showLoader())
            //const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            //const json = await response.json()
            const json = {
                "name": "The Box",
                "rating": "4.8",
                "photo_url": "https://kpopchart.net/wp-content/uploads/2021/03/Chanyeol-The-Box-e1616555084675.jpg",
                "category": "K-POP",
                "creation_date": "28.11.2020",
                "expiration_date": "14.11.2021",
                "target_sum": "100$",
                "current_sum": "23$",
                "description": `sfdgdfgd
                dfgdgfdgfdfgdgdfgdgfdfgdfgdfgdfgdfgdfgfdddddddddddddddddggdfgdfgdfggggggggggggggggggggggd
                dfgdkjgfhjfdfghjjhxgcgfvbhjniuhygt frrxdgvhuygtrfcgvhuygtfcgvhbuygvfhbuygfvhbuygvfhyvyvfffcv
                sdfgdfgjfkmujnbgsrdthfjt kiuyjhtgrdhyyuloiyujtgrhjyuoliyujthrghtjykulikjhgfhjykujmhgbf`,
                "user_id": 3
            }
            dispatch({ type: FETCH_COMPANY, payload: json })

        } catch (e) {
            //dispatch(showAlert('Something went wrong'))
            //dispatch(hideLoader())
            console.log("Couldn't fetch company")
        }
    }
}

export function postComment(comment) {
    // return async dispatch => {
    //     try {
    //         if (!text.trim()) {
    //             return showAlert('Post title cannot be empty')
    //         }
    //         const newComment = {
    //             userId,
    //             companyId,
    //             text,
    //             datetime: Date.now().toString()
    //         }

    //         dispatch({ type: POST_COMMENT })
    //         fetch('http://localhost:8090/company/test',
    //             {
    //                 method: "POST",
    //                 body: JSON.stringify(newComment)
    //             })
    //         fetchComments(companyId, userId)
    //     }
    //     catch (e) {
    //         console.log("Couldn't post comment")
    //     }

    // }
    return {
        type: POST_COMMENT,
        payload: comment
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
        "companyId": 1,
        "userId": 1
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
