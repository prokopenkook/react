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
  border-bottom: 1px solid #c2c2c2;
  margin-left: 5px;
  color: #c2c2c2;
  width: 100%;
  padding: 0;
  margin: 0;
  &:focus {
    outline: none;
    border-bottom-color: #c2c2c2;
  }
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

export  class  Incomes  extends Component{
    state = {
        transaction: null,
        category: null,
        error: 'no-error',
    };

    handleChangeInput = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleEnter = () =>{
        const {onSubmit} = this.props;
        const {transaction, category, error} = this.state;

      if(transaction != null){
        onSubmit(Math.abs(parseFloat(transaction)), category, error);
        this.setState({transaction: null, category: null, error: 'no-error'});
      } else {
        this.setState({error: 'error'});
      }
    };

    render() {
        const {transaction, category, error} = this.state;

        return (
            <Container>
                <div>
                    <InputLine>
                        <LineTitle>Внести доход:</LineTitle>
                        <LineInput>
                            <Input
                                name="transaction"
                                onChange={this.handleChangeInput}
                                value={transaction || ''}
                                className={error}
                            />
                        </LineInput>
                    </InputLine>
                    <InputLine>
                        <LineTitle>Категория:</LineTitle>
                        <LineInput>
                            <Input
                                name="category"
                                onChange={this.handleChangeInput}
                                value={category || ''}
                            />
                        </LineInput>
                    </InputLine>
                </div>
                <Button onClick={this.handleEnter}>Внести</Button>
            </Container>
        );
    }
}

export default Incomes;
