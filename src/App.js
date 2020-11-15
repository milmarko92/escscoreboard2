import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Setup from "./Setup";
import Scoreboard from "./Scoreboard";
import Vote from "./vote";

export default function App() {
    return (
        <Router>
            <div>
                {/*<nav>*/}
                {/*    <ul>*/}
                {/*        <li>*/}
                {/*            <Link to="/">Setup</Link>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <Link to="/about">About</Link>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <Link to="/users">Users</Link>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</nav>*/}

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
                    <Route path="/">
                        <Setup />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}
