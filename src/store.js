import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import chartsReducer from './state/charts'
import authReducer from './state/auth'
import runsReducer, { initRunsSync } from './state/runs'

const reducer = combineReducers({
    runs: runsReducer,
    auth: authReducer,
    charts: chartsReducer
})

const composeEnchansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    composeEnchansers(
        applyMiddleware(thunk)
    )
)

store.dispatch(initRunsSync())

export default store