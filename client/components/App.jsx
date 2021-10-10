import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Main from "./Main.jsx";
import HomeFeed from "./HomeFeed/HomeFeed.jsx";
import TopBar from "./Bars/TopBar.jsx";
import BottomBar from "./Bars/BottomBar.jsx";
import MyEvent from "./MyEvent/MyEvent.jsx";
import Host from "./Host/Host.jsx";
import Login from "./Login/Login.jsx";

const App = () => {
    const [mode, setMode] = useState("login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userId, setUserId] = useState("");

    if (userId === "") {
        return (
            <div>
                <Login mode={mode} setUserId={setUserId} />
            </div>
        );
    }
    return (
        <div class="wrapper">
            <BrowserRouter>
                <TopBar />
                <Switch>
                    <Route exact path="/">
                        <HomeFeed userId={userId} />
                    </Route>
                    <Route path="/myevent">
                        <MyEvent userId={userId} />
                    </Route>
                    <Route path="/host">
                        <Host userId={userId} />
                    </Route>
                </Switch>
                <BottomBar />
            </BrowserRouter>
        </div>
    );
};

export default App;
