import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './index.css'

class Nav extends Component {

    render() {
        return (
            <div className="nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/info">Info</Link>
                    </li>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/">Photo</Link>
                    </li>
                    <li>
                        <Link to="/">Favorites</Link>
                    </li>
                    <li>
                        <Link to="/">Inbox</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Nav;
