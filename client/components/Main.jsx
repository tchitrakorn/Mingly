import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeFeed from "./HomeFeed/HomeFeed.jsx";
import MyEvent from "./MyEvent/MyEvent.jsx";
import Host from "./Host/Host.jsx";
import TopBar from "./Bars/TopBar.jsx";
import BottomBar from "./Bars/BottomBar.jsx";
import Signup from "./Login/Signup.jsx";

function Main() {
    return (
        <div class="wrapper">
            <BrowserRouter>
                <TopBar />
                <Switch>
                    <Route exact path="/">
                        <HomeFeed />
                    </Route>
                    <Route path="/myevent">
                        <MyEvent />
                    </Route>
                    <Route path="/host">
                        <Host />
                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                </Switch>
                <BottomBar />
            </BrowserRouter>
        </div>
    );
}

export default Main;
