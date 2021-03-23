import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Setup from "./Setup";
import Scoreboard from "./Scoreboard";
import Vote from "./vote";
import Results from "./Results";
import Ranker from "./ranker";

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/scoreboard">
                        <Scoreboard />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/vote">
                        <Vote />
                    </Route>
                    <Route path="/result">
                        <Results />
                    </Route>
                    <Route path="/sort">
                        <Ranker />
                    </Route>
                    <Route path="/">
                        <Setup />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Users() {
    return <h2>Users</h2>;
}
