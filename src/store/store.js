import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { imagesReducer } from '../reducers/imagesReducer'

const reducers = combineReducers({
    images: imagesReducer
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)