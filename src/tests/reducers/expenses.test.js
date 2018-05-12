import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual([]);
});

test('should add an expense', () => {

    const state = expensesReducer(expenses, {
        type: 'ADD_EXPENSE',
        description: 'new expense',
        note: 'note',
        amount: 12,
        createdAt: 0
    });

    expect(state).toHaveLength(4);
});

test('should remove an expense', () => {

    const action = { type: 'REMOVE_EXPENSE', id: expenses[0].id };
    const state = expensesReducer(expenses, action);
    expect(state).toHaveLength(2);
    expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should not remove unfound expense', () => {
    const action = { type: 'REMOVE_EXPENSE', id: 15 };
    const state = expensesReducer(expenses, action);
    expect(state).toHaveLength(3);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should edit expense', () => {
    const amount = {
        amount: 215
    };

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state).toHaveLength(3);
    expect(state[1].amount).toBe(amount);
});

test('should not edit unfound expense', () => {
    const amount = {
        amount: 215
    };

    const action = {
        type: 'EDIT_EXPENSE',
        id: 500,
        updates: {
            amount
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state).toHaveLength(3);
    expect(state[1].amount).toBe(195000);
});
