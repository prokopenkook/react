import React, {Component} from 'react';
import './index.css'
import user from '../../images/user.png'

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="profile">
                <div className="profile__photo">
                    <img src={user} alt="user"/>
                </div>
                <div className="profile__name">Jardson Araújo</div>
                <div className="profile__city">San Francisco • CA</div>
            </section>
        );
    }
}

export default Profile;
