import React, {Component} from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();
class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/info">Info</Link>
                        </li>
                    </ul>
                </div>
        );
    }
}

export default Nav;
