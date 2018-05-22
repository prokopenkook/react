import React, {Component} from 'react';
import Profile from "../components/Profile/Profile";
import styled from 'styled-components';
/*
Example
export default (props) => {
    console.log(props);
    return(
        <div>Home</div>
    )
};*/

const Content = styled.div`
    width: 67%;
    float: right;
`;

class Home extends Component{
    componentWillMount(){
        //this.props.history.push('home?ijustgotpushed=true')
    }

    render(){
        return (
            <div>
                <h1>Home</h1>
                <Content>

                </Content>
            </div>
        )
    }
}

export default Home;