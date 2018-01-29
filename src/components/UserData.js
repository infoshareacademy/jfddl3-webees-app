import {database} from 'firebase'
const userData = './user/fetch_user'

const users = (users) => ({
    type: userData,
})

export const fetchData = () => (dispatch, getState) => {
    database.ref(`/users/data`)
        .on('value', (snapshot)=>
            dispatch(users(Object.entries(snapshot.val()) || {}))
        )
}

const initialState = {
    userData: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case users:
            return {
                ...state,
                userData: action.products
            }
        default:
            return state
    }
}