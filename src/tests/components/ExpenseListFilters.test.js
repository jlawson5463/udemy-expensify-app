import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import expenses from '../fixtures/expenses';
import { filters, altFilters } from '../fixtures/filters';
import { Z_DEFAULT_STRATEGY } from 'zlib';
import { start } from 'repl';
import moment from 'moment';

let setFilterText, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper, value;

beforeEach(() => {
    setFilterText = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setFilterText={setFilterText}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />);
})

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alternative filters correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

// -assert something about its spies for 4 tests below
test('should handle text change', () => {
    value = 'rent';
    wrapper.find('input').simulate('change', { 
        target:  { value }  
     });
    expect(setFilterText).toBeCalledWith('rent');
});

test('should sort by amount', () => {
    value = 'amount';
    wrapper.find('select').simulate('change', { 
        target:  { value }  
     });
    expect(sortByAmount).toBeCalled();
});

test('should sort by date', () => {
    wrapper.setProps({
        filters: altFilters
    });
    value = 'date';
    wrapper.find('select').simulate('change', { 
        target:  { value }  
     });
    expect(sortByDate).toBeCalled();
});

test('should handle start date change', () => {
    const startDate = moment(0).add(1, 'days');
    const endDate = moment(0).add(10, 'days');
    wrapper.find('[onDatesChange]').prop('onDatesChange')({ startDate, endDate }); 
    expect(setStartDate).toBeCalledWith(startDate);
    expect(setEndDate).toBeCalledWith(endDate);
});

test(() => {
    const calenderFocused = 'endDate';
    wrapper.find('[onFocusChange]').prop('onFocusChange')(calenderFocused);
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused);
});
