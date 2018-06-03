import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render expense summary for 1 expense', () => {
    const expenseTotal = 100;
    const expenseCount = 1;
    const wrapper = shallow(<ExpensesSummary expenseCount={expenseCount} expenseTotal={expenseTotal}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render expense summary for multiple expenses', () => {
    const expenseTotal = 2000;
    const expenseCount = 3;
    const wrapper = shallow(<ExpensesSummary expenseCount={expenseCount} expenseTotal={expenseTotal}/>);
    expect(wrapper).toMatchSnapshot();
});
