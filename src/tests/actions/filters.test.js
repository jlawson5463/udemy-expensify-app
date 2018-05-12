import { setFilterText, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

test('test generate set start date action object', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('test generate set end date action object', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('test set up sort by amount', () => {
    const action = sortByAmount();

    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    })
})

test('test set up sort by date', () => {
    const action = sortByDate();

    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    })
})

test('test set up set filter text with default value', () => {
    const action = setFilterText();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('test set up set filter text with provided value', () => {
    const action = setFilterText('monies');

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'monies'
    })
})