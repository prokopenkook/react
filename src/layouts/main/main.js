import React from 'react';
import Home from '../../pages/Home';
import Info from '../../pages/Info';
import { Route, Switch } from 'react-router-dom';
import './index.css'


const Main = () => (
    <main className="main">
        <Switch>
            <Route path="/" exact render={props => <Home {...props} />}/>
            <Route path="/info" component={Info}/>
        </Switch>
    </main>
);
export default Main

