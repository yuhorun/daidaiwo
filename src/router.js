import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Home from './page/home'
import Task from './page/task'
import LogInAndSignup from './page/login_signup'
import Post from './page/post'
import Detail from './page/task/detail'

export default function Routers () {
    return (
        <Router>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/task/:subpage"><Task /></Route>
                <Route path="/task/detail/:id"><Detail /></Route>
                <Route path="/task"><Task /></Route>
                <Route exact path="/post"><Post /></Route>
                <Route path="/user/:action"><LogInAndSignup /></Route>
            </Switch>
        </Router>
    )
}
