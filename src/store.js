import { createStore, combineReducers } from 'redux'

import taskState from './page/task/redact'
import globalState from './redact'

const reducer = combineReducers({
    globalState: globalState,
    taskState: taskState
})

export default createStore(reducer)
