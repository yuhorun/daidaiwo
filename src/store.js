import { createStore, combineReducers } from 'redux'

import headerState from './common/header/redact'
import taskState from './page/task/redact'
import globalState from './redact'



const reducer = combineReducers({
    globalState: globalState,
    headerState: headerState,
    taskState: taskState
})


export default createStore(reducer)
