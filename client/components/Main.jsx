import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeFeed from './HomeFeed/HomeFeed.jsx';
/* all components imported here */

function Main() {
    return (
        <main>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomeFeed} />
                    {/* other routes go here */}
                </Switch>
            </BrowserRouter>
        </main>
    );
}

export default Main;