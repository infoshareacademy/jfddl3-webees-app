import { database } from '../firebase'

const SET_RUNS_DATA = 'runs/SET_RUNS_DATA'

const dbRef = database.ref('/runs')

const setRunsData = data => ({
    type: SET_RUNS_DATA,
    data
})

export const addRun = dataToSave => (dispatch, getState) => {
    console.log(dataToSave)
    dbRef.push(dataToSave)
        .then(() => console.log('saved'))
        .catch(() => console.log('error!'))
}

export const updateRun = (runId, dataToSave) => (dispatch, getState) => {
    console.log(dataToSave)
    dbRef.child(runId).update(dataToSave)
        .then(() => console.log('saved'))
        .catch(() => console.log('error!'))
}

export const initRunsSync = () => (dispatch, getState) => {
    dbRef.on('value', snapshot => {
        const runFromDataBase = Object.entries(snapshot.val())
            .map(([key, val]) => {
                val.key = key
                return val
            })
        dispatch(setRunsData(runFromDataBase))
    })
}

const initialState = {
    data: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_RUNS_DATA:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}