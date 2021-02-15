import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import CreateRoomPage from './CreateRoomPage'
import JoinRoomPage from './JoinRoomPage'

export default function Homepages(/*props*/) {
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <p>This is the home page.</p>
                </Route>
                <Route path="/join" component={JoinRoomPage} />
                <Route path="/create" component={CreateRoomPage} />
            </Switch>
        </Router>
    )
}