import React, {Component} from 'react';
import Budget from "../components/Budget";

class Info extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Budget/>
            </div>
        );
    }
}

export default Info;
