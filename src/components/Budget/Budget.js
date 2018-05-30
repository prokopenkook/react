import React, {Component} from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Expanse from '../Expanse/Expanse'
import Incomes from '../Incomes/Incomes'
import './index.css'

// create component with styled-components (add style in js)
const DateButton = styled.button`
    color: #20c8ff;
    font-weight: bold;
    background: transparent;
    padding: 10px;
    border: 2px solid #20c8ff;
    border-radius: 50%;
    margin: 0 5px;
    min-width: 39px;
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
    color: #20c8ff;
    margin: 0 8px;
    cursor: pointer;
    border-bottom: ${({selected}) => 
        selected ? '1px solid #20c8ff' : 'none'};
`;
const Button = styled.button`
  font-family: 'Marmelad';
  color: #c2c2c2;
  border: 1px solid #c2c2c2;
  border-radius: 31px;
  background-color: transparent;
  margin: 3px;
  cursor: pointer;
  text-align: center;
  padding: 5px 20px;
   &:focus {
    outline: none;
  }
`;

class Budget extends Component {
    constructor(props) {
        super(props);

        let storageState = localStorage.getItem('state');
        let initState;

        if(storageState != null)  {
            storageState = JSON.parse(storageState);
            initState = {...storageState, date: moment(storageState.date)}
        } else {
            initState = {
                date: moment(),
                navSelected: 'expanse',
                transactions:[]
            };
        }
        this.state = initState;
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

        const newTransactions = [ ...transactions, newTransaction];

        newTransactions.sort((a, b) => {
            const aDate = moment(a.date, 'DD.MM.YYYY');
            const bDate = moment(b.date, 'DD.MM.YYYY');
            return aDate.isAfter(bDate);
        });

        this.setState({transactions: newTransactions});
    };

    clearAllTransaction = (sum, category) => {
        localStorage.clear();
        this.setState({transactions: []});
    };

    componentDidUpdate() {
        const {date} = this.state;
        localStorage.setItem(
            'state',
            JSON.stringify({...this.state, date: date.format()}),
        );
    }

    onToday = () => {
        const {transactions, date} = this.state;

        const currentMonthTransactions = transactions.filter(
            ({date: transactionDate}) =>
                moment(transactionDate, 'DD.MM.YYYY').isSame(date, 'month'),
        );

        const dailyMoney =
            currentMonthTransactions.reduce(
                (acc, transaction) =>
                    transaction.sum > 0 ? transaction.sum + acc : acc,
                0,
            ) / moment(date).daysInMonth();

        const transactionsBeforeThisDayAndInThisDay = currentMonthTransactions.filter(
            ({date: transactionDate}) =>
                moment(transactionDate, 'DD.MM.YYYY').isBefore(
                    date,
                    'date',
                ) ||
                moment(transactionDate, 'DD.MM.YYYY').isSame(date, 'date'),
        );

        const expanseBeforeToday = transactionsBeforeThisDayAndInThisDay.reduce(
            (acc, {sum}) => (sum < 0 ? acc + sum : acc),
            0,
        );

        const incomeBeforeToday = date.date() * dailyMoney;

        return incomeBeforeToday + expanseBeforeToday;
    };

    render() {
        const {date, navSelected, transactions} = this.state;
        return (
            <section className="budget">
                <div className="budget__header">
                    <h1 className="App_title">Реактивный бюджет</h1>
                    <DateLine>
                        <p>{date.format('DD.MM.YYYY')}</p>
                        <DateButton onClick={this.handleSubtractDay}>-</DateButton>
                        <DateButton onClick={this.handleAddDay}>+</DateButton>
                    </DateLine>
                    <p>На сегодня: {this.onToday()}грн.</p>
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
                    <table>
                        <tbody>
                        {transactions
                            .filter(({date: transactionDate}) => moment(transactionDate,
                            'DD.MM.YYYY').isSame(date, 'month'))
                            .map(({date, sum, category}, index) => (
                                <tr key={index}>
                                    <td>{date}</td>
                                    <td>{sum}</td>
                                    <td>{category}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Button onClick={this.clearAllTransaction}>Очистить</Button>
                </div>
            </section>
        );
    }
}

export default Budget;
