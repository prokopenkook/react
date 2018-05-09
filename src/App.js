import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment';
import styled from 'styled-components';

// sreate component with styled-components (add style in js)
const DateButton = styled.button`
    color: white;
    background: green;
    padding: 10px;
    border: 0;
    margin: 2px;
    min-width: 30px;
`;

const DateLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Link = styled.span`
    color: white;
    margin: 0 8px;
    cursor: pointer;
    border-bottom: ${({selected}) => 
        selected ? '1px solid white' : 'none'};
`;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: moment(),
            navSelected: 'expanse'
        }
    }


    handleAddDay = () => {
        this.setState({date: this.state.date.add(1, 'day')});
    };

    handleSubtractDay = () => {
        this.setState({date: this.state.date.subtract(1, 'day')});
    };

    handleNavClick = event => {
        this.setState({navSelected: event.target.getAttribute('name')})
    };

    render() {
        const {date, navSelected} = this.state;
        return (
            <section className="App">
                <header className="App_header">
                    <h1 className="App_title">Реактивный бюджет</h1>
                    <DateLine>
                        <p>{date.format('DD.MM.YYYY')}</p>
                        <DateButton onClick={this.handleSubtractDay}>-</DateButton>
                        <DateButton onClick={this.handleAddDay}>+</DateButton>
                    </DateLine>
                </header>
                <main>
                    <Nav>
                        <Link
                            name="expanse"
                            onClick={this.handleNavClick}
                            selected={navSelected === 'expanse'}>
                            Расходы сегодня
                        </Link>
                        <Link
                            name="incomes"
                            onClick={this.handleNavClick}
                            selected={navSelected === 'incomes'}>
                            Доходы
                        </Link>
                    </Nav>
                </main>
            </section>
        );
    }
}

export default App;
