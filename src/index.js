import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import Info from './components/Info';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact render={props => <Home {...props} />}/>
            <Route path="/info" exact component={Info}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));

