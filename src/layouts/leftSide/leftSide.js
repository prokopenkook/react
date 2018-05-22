import React from 'react'
import Nav from "../../components/Nav/Nav";
import Profile from "../../components/Profile/Profile";
import './index.css'

const LeftSide = () => (
    <section className="left-side">
        <Profile/>
        <Nav/>
    </section>
);

export default LeftSide
