import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Main from './Main.jsx';
import HomeFeed from './HomeFeed/HomeFeed.jsx';
import TopBar from './Bars/TopBar.jsx';
import MyEvent from './MyEvent/MyEvent.jsx';
import Host from './Host/Host.jsx';
import Login from './Login/Login.jsx';
import BottomBar from './Bars/BottomBar.jsx';

const App = () => {
    const [mode, setMode] = useState('login');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState('');

    if (userId === '') {
        return (
            <div>
                <Login mode={mode}/>
            </div>
        )
    } 
    return (
        <div>
            <BrowserRouter>
                <TopBar />
                <Switch>
                    <Route exact path='/'>
                        <HomeFeed />
                    </Route>
                    <Route path='/myevent'> 
                        <MyEvent />
                    </Route>
                    <Route path='/host'>
                        <Host />
                    </Route>
                </Switch>
                <BottomBar />
            </BrowserRouter>
        </div>
    )
}

export default App;