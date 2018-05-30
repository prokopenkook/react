import React, {Component} from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Expanse from '../Expanse/Expanse'
import Incomes from '../Incomes/Incomes'
import './index.css'
import {findLastIndex} from 'lodash';

// create component with styled-components (add style in js)
const DateButton = styled.button`
    color: white;
    background: green;
    padding: 10px;
    border: 0;
    margin: 2px;
    min-width: 30px;
    :hover{
        opacity: .8
    }
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

class Budget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: moment(),
            navSelected: 'expanse',
            transactions:[]
        };
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

    handleSubmitTransaction = (sum, category) => {
        const {date: TodayDate, transactions} = this.state;

        const newTransaction = {
            date: TodayDate.format('DD.MM.YYYY'),
            category: category,
            sum: sum,
        };

        const index = findLastIndex(transactions, ({date}) => {
            const transactionDate = moment(date, 'DD.MM.YYYY');
            return (
                TodayDate.isBefore(transactionDate, 'day') ||
                TodayDate.isSame(transactionDate, 'day')
            );
        });

        const newTransactions = [ ...transactions];
        newTransactions.splice(
            index === -1 ? transactions.length : index,
            0,
            newTransaction,
        );

        this.setState({transactions: newTransactions});
    };

    render() {
        const {date, navSelected} = this.state;
        return (
            <section className="budget">
                <div className="budget__header">
                    <h1 className="App_title">Реактивный бюджет</h1>
                    <DateLine>
                        <p>{date.format('DD.MM.YYYY')}</p>
                        <DateButton onClick={this.handleSubtractDay}>-</DateButton>
                        <DateButton onClick={this.handleAddDay}>+</DateButton>
                    </DateLine>
                </div>
                <div className="budget__main">
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
                    {navSelected === 'expanse' ? (
                        <Expanse onSubmit={this.handleSubmitTransaction}/>
                        ) : (
                        <Incomes onSubmit={this.handleSubmitTransaction}/>
                    )}
                </div>
            </section>
        );
    }
}

export default Budget;
