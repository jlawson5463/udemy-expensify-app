import React from 'react';
import { shallow }  from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, history, wrapper, removeExpense;

// set up before each for above fields;
beforeEach(() => {
    editExpense = jest.fn();
    history = { push: jest.fn() };
    removeExpense = jest.fn();
})
test('should render edit expense page correctly', () => {
    wrapper = shallow(<EditExpensePage editExpense={editExpense} history={history} />);
    expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense', () => {
    wrapper = shallow(<EditExpensePage expense={expenses[2]} editExpense={editExpense} history={history} />);
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith({id: expenses[2].id, updates: expenses[2]});
});

test('should handle remove expense', () => {
    wrapper = shallow(<EditExpensePage expense={expenses[0]} removeExpense={removeExpense} history={history} />);
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[0].id});
});