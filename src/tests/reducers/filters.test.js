import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sort by to date', () => {

    const defaultState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const state = filtersReducer(defaultState, { type: 'SORT_BY_DATE' });

    expect(state.sortBy).toBe('date');
})

test('should set text filter', () => {
    const state = filtersReducer(undefined, { 
        type: 'SET_TEXT_FILTER',
        text: 'blah' });

    expect(state.text).toBe('blah');
});

test('should set start date filter', () => {
    const state = filtersReducer(undefined, { 
        type: 'SET_START_DATE',
        startDate: moment().add(1, 'days').format('L')});
        
    expect(state.startDate).toBe(moment().add(1, 'days').format('L'));
});

test('should set end date filter', () => {
    const state = filtersReducer(undefined, { 
        type: 'SET_END_DATE',
        endDate: moment().add(10, 'days').format('L')});
        
    expect(state.endDate).toBe(moment().add(10, 'days').format('L'));
});