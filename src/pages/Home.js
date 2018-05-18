import React, {Component} from 'react';
/*
Example
export default (props) => {
    console.log(props);
    return(
        <div>Home</div>
    )
};*/
class Home extends Component{
    componentWillMount(){
        //this.props.history.push('home?ijustgotpushed=true')
    }

    render(){
        return (
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}

export default Home;