import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeFeed from './HomeFeed/HomeFeed.jsx';
import MyEvent from './MyEvent/MyEvent.jsx';
/* all components imported here */

function Main() {
    return (
        <main>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomeFeed} />
                    {/* <Route path='/myevent' component={MyEvent} /> */}
                    <Route path='/myevent'> 
                        <MyEvent />
                    </Route>
                    {/* other routes go here */}
                </Switch>
            </BrowserRouter>
        </main>
    );
}

export default Main;