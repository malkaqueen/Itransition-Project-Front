import {FETCH_COMPANY, CREATE_COMMENT, SHOW_ALERT, HIDE_ALERT} from "./types";

export function fetchCompany(id){
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
            dispatch({type: FETCH_COMPANY, payload: json})

        } catch (e) {
            //dispatch(showAlert('Something went wrong'))
            //dispatch(hideLoader())
            console.log("Couldn't fetch company")
        }
    }
}

export function createComment(comment){
    return {
        type: CREATE_COMMENT,
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