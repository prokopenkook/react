import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const InputLine = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 1.5;
`;
const Input = styled.input`
  font-family: 'Marmelad';
  font-size: 20px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  margin-left: 5px;
  color: white;
  width: 100%;
  padding: 0;
  margin: 0;
`;
const LineTitle = styled.dt`
  width: 150px;
`;
const LineInput = styled.dd`
  width: 150px;
  margin: 0;
`;
const Button = styled.button`
  font-family: 'Marmelad';
  color: white;
  border: 1px solid white;
  border-radius: 31px;
  background-color: transparent;
  margin: 3px;
  cursor: pointer;
  text-align: center;
  padding: 5px 20px;
`;

export  class  Incomes  extends Component{
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        const {date, navSelected} = this.state;
        return (
            <div></div>
        );
    }
}

export default Incomes;