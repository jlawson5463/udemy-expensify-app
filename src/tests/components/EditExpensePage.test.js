import React from 'react';
import { shallow }  from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, history, wrapper, startRemoveExpense;

// set up before each for above fields;
beforeEach(() => {
    startEditExpense = jest.fn();
    history = { push: jest.fn() };
    startRemoveExpense = jest.fn();
})
test('should render edit expense page correctly', () => {
    wrapper = shallow(<EditExpensePage startEditExpense={startEditExpense} history={history} />);
    expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense', () => {
    wrapper = shallow(<EditExpensePage expense={expenses[2]} startEditExpense={startEditExpense} history={history} />);
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith({id: expenses[2].id, updates: expenses[2]});
});

test('should handle remove expense', () => {
    wrapper = shallow(<EditExpensePage expense={expenses[0]} startRemoveExpense={startRemoveExpense} history={history} />);
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[0].id});
});