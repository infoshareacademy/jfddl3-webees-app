import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import chartsReducer from './state/charts'
import runsReducer, { initRunsSync } from './state/runs'
import authReducer, { initAuth } from './state/auth'

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

store.dispatch(initAuth())

store.dispatch(initRunsSync())

export default store