import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/Home';
import Info from '../pages/Info';
import { Route, Switch } from 'react-router-dom';


const Main = () => (
    <main>
        <Switch>
            <Route path="/" exact render={props => <Home {...props} />}/>
            <Route path="/info" component={Info}/>
        </Switch>
    </main>
);
export default Main

