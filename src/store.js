import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import chartsReducer from './state/charts'
import authReducer, { initAuth } from './state/auth'

const reducer = combineReducers({
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

export default store
