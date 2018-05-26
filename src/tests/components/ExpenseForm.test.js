import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render expense form', () => {    
    const wrapper = shallow(<ExpenseForm  />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expense form with expense data', () => {    
    const wrapper = shallow(<ExpenseForm  expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid test submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { } // fake the things on the args that get used. So e is the arg, but prevent default is whats used
    });
    expect(wrapper.state('error')).toEqual('Please provide an amount and description');
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'new description';
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(0).simulate('change', { // at(0) means the first input as there are a few
        target:  { value }  //target.value is what we need to access
     });
     expect(wrapper.state('description')).toBe(value);
     expect(wrapper).toMatchSnapshot();
});

test('should set note on input change', () => {
    const value = 'new note';
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('textarea').simulate('change', {   // at(0) means the first input as there are a few
        target:  { value }      //target.value is what we need to access
     });
     expect(wrapper.state('note')).toBe(value);
     expect(wrapper).toMatchSnapshot();
});

test('should set valid amount on input change', () => {
    const value = '10.00';
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', {   
        target:  { value }      
     });
     expect(wrapper.state('amount')).toBe(value);
     expect(wrapper).toMatchSnapshot();
});

test('should not set invalid amount on input change', () => {
    const value = '51.333';
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', {   
        target:  { value }      
     });
     expect(wrapper.state('amount')).toEqual('');
     expect(wrapper).toMatchSnapshot();
});