import {database, auth, googleProvider} from '../firebase'

const SET_USER = 'auth/SET_USER'
const SET_LOGIN_LOGS = 'auth/SET_LOIN_LOGS'
const SET_USERS_DATA = 'auth/SET_USERS_DATA'

const setUser = (user) => ({
    type: SET_USER,
    userData: user
})

const setLoginLogs = (logs) => ({
    type: SET_LOGIN_LOGS,
    logsData: logs
})

const setUsersData = (data) => ({
    type: SET_USERS_DATA,
    usersData: data
})

export const initAuth = () => (dispatch, getState) => {
    auth.onAuthStateChanged((user) => {
        // if not logged in user is null !
        dispatch(setUser(user))

        if (user) {
            dispatch(logLoginDate())
            dispatch(syncLoginLogs())
            dispatch(syncUsersData())
        }
    })
}

const syncLoginLogs = () => (dispatch, getState) => {
    const uid = getState().auth.user.uid
    database.ref(`/users/${uid}/loginLogs`)
        .on('value', (snapshot) => dispatch(setLoginLogs(snapshot.val())))
}

const syncUsersData = () => (dispatch, getState) => {
    const uid = getState().auth.user.uid
    database.ref(`/users/`)
        .on('value', (snapshot) => dispatch(setUsersData(snapshot.val())))
}

const logLoginDate = () => (dispatch, getState) => {
    const uid = getState().auth.user.uid
    database.ref(`/users/${uid}/loginLogs`)
        .push({timestamp: Date.now()})
        .then(() => console.log('login date successfully logged in db'))
        .catch(() => console.log('Something wrong!'))
    database.ref(`/loginLogs/`)
        .push({timestamp: Date.now()})
        .then(() => console.log('login date successfully logged in db'))
        .catch(() => console.log('Something wrong!'))
}

export const logIn = (email, password) => (dispatch, getState) => {
    auth.signInWithEmailAndPassword(email, password)
        .then(() => console.log('Logged in!'))
        .catch(() => alert('Something wrong!'))
}

export const logInByGoogle = () => (dispatch, getState) => {
    auth.signInWithPopup(googleProvider)
        .then(() => console.log('Logged in!'))
        .catch(() => alert('Something wrong!'))
}

export const createUser = (email, password) => (dispatch, getState) => {
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => console.log('User created'))
        .catch((e) => console.log(e))
}


export const logOut = () => (dispatch, getState) => {
    auth.signOut()
        .then(() => console.log('Log out'))
        .catch(() => alert('Something wrong!'))
}


const initialState = {
    user: null
}

const calculateLoginLogs = (usersData) => (
    Object.values(usersData)
        .map(el => (
            Object.values(el.loginLogs)
                .map(el => el.timestamp)
        ))
        .reduce(
            (reduced, el) => reduced.concat(el),
            []
        )
        .reduce(
            (reduced, timestamp) => {
                const now = new Date()
                const todayMidnight = (now.getTime() - (now.getHours() * 60 * 60 * 1000 + now.getMinutes() * 60 * 1000 + now.getSeconds() * 1000 + now.getMilliseconds()))
                const milisecInDay = 24 * 60 * 60 * 1000
                if(timestamp >= todayMidnight){
                    reduced[0] = reduced[0] + 1
                }else if(timestamp >= todayMidnight - 1 * milisecInDay){
                    reduced[1] = reduced[1] + 1
                }else if(timestamp >= todayMidnight - 2 * milisecInDay){
                    reduced[2] = reduced[2] + 1
                }else if(timestamp >= todayMidnight - 3 * milisecInDay){
                    reduced[3] = reduced[3] + 1
                }else if(timestamp >= todayMidnight - 4 * milisecInDay){
                    reduced[4] = reduced[4] + 1
                }else if(timestamp >= todayMidnight - 5 * milisecInDay){
                    reduced[5] = reduced[5] + 1
                }else if(timestamp >= todayMidnight - 6 * milisecInDay){
                    reduced[6] = reduced[6] + 1
                }

                return reduced
            },
            {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0})
)

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.userData
            }
        case SET_LOGIN_LOGS:
            return {
                ...state,
                loginLogs: action.logsData
            }
        case SET_USERS_DATA:
            return {
                ...state,
                loginCount: calculateLoginLogs(action.usersData)
            }
        default:
            return state
    }
}