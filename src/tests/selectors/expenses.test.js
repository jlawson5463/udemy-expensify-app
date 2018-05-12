import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
test('should filter by text value', () => {
    const expenses = [
        {   id: '1', description: 'Gum', note: '', amount: 195, createdAt: 0 },
        {   id: '2', description: 'Rent', note: '', amount: 195000, createdAt: -1000 },
        {   id: '3', description: 'Credit Card', note: '', amount: 4095, createdAt: 0 },
        ];

    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters);

    expect(result).toHaveLength(2);
    expect(result).toEqual([expenses[2], expenses[1]]); // sorted by date so 3rd one comes first
});

test('should filter by start date', () => {
    const expenses = [
        {   id: '1', description: 'Gum', note: '', amount: 195, createdAt: moment(0).add(1, 'days').valueOf() },
        {   id: '2', description: 'Rent', note: '', amount: 195000, createdAt: moment(0).subtract(4, 'days').valueOf() },
        {   id: '3', description: 'Credit Card', note: '', amount: 4095, createdAt: moment(0).add(4, 'days').valueOf() }
    ];

    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters);

    expect(result).toHaveLength(2);
    expect(result).toEqual([expenses[2], expenses[0]]); 
});

test('should filter by end date', () => {
    const expenses = [
        {   id: '1', description: 'Gum', note: '', amount: 195, createdAt: moment(0).add(1, 'days').valueOf() },
        {   id: '2', description: 'Rent', note: '', amount: 195000, createdAt: moment(0).subtract(4, 'days').valueOf() },
        {   id: '3', description: 'Credit Card', note: '', amount: 4095, createdAt: moment(0).add(4, 'days').valueOf() }
    ];

    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }

    const result = selectExpenses(expenses, filters);

    expect(result).toHaveLength(1);
    expect(result).toEqual([expenses[1]]); 
});

test('should sort by date', () => {
    const expenses = [
        {   id: '1', description: 'Gum', note: '', amount: 195, createdAt: moment(0).add(1, 'days').valueOf() },
        {   id: '2', description: 'Rent', note: '', amount: 195000, createdAt: moment(0).subtract(4, 'days').valueOf() },
        {   id: '3', description: 'Credit Card', note: '', amount: 4095, createdAt: moment(0).add(4, 'days').valueOf() }
    ];

    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0).subtract(6, 'days'),
        endDate: moment(0).add(6, 'days')
    }

    const result = selectExpenses(expenses, filters);

    expect(result).toHaveLength(3);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]); 
});

test('should sort by amount', () => {
    const expenses = [
        {   id: '1', description: 'Gum', note: '', amount: 195, createdAt: moment(0).add(1, 'days').valueOf() },
        {   id: '2', description: 'Rent', note: '', amount: 195000, createdAt: moment(0).subtract(4, 'days').valueOf() },
        {   id: '3', description: 'Credit Card', note: '', amount: 4095, createdAt: moment(0).add(4, 'days').valueOf() }
    ];

    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: moment(0).subtract(6, 'days'),
        endDate: moment(0).add(6, 'days')
    }

    const result = selectExpenses(expenses, filters);

    expect(result).toHaveLength(3);
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]]); 
});