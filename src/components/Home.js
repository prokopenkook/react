import React from 'react';
/*
Example
export default (props) => {
    console.log(props);
    return(
        <div>Home</div>
    )
};*/
export default class Home extends React.Component{
    componentWillMount(){
        //this.props.history.push('home?ijustgotpushed=true')
    }

    render(){
        return (
            <div> hi </div>
        )
    }
}
