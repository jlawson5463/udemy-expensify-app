import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should set up remove expense', () => {
    const action = removeExpense({ id: '123abc' });

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should set up edit expense', () => {
    const action = editExpense({ id: '456def', updates: { amount: 20 } });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '456def',
        updates: {
            amount: 20
        }
    });
});

test('should set up add expense action with provided values', () => {
    const expenseData = {
            description: 'des1',
            note: 'noteynote',
            amount: 12,
            createdAt: 123456
        }

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should set up add expense action with default values', () => {
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});