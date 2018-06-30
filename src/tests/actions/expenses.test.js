import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
	addExpense,
	removeExpense,
	editExpense,
	startAddExpense,
	setExpenses,
	startSetExpenses,
	startRemoveExpense,
	startEditExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'testUid';
const createMockStore = configureMockStore([thunk]);

beforeEach(done => {
	let expensesData = {};
	expenses.forEach(({ id, description, note, amount, createdAt }) => {
		expensesData[id] = { description, note, amount, createdAt };
	});
	database
		.ref(`users/${uid}/expenses`)
		.set(expensesData)
		.then(() => done());
});

test('should set up remove expense', () => {
	const action = removeExpense({ id: '123abc' });

	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

test('should remove expense from database and store', done => {
	const store = createMockStore({ auth: { uid } });
	const id = expenses[2].id;
	store
		.dispatch(startRemoveExpense({ id }))
		.then(() => {
			const actions = store.getActions();
			expect(actions[0]).toEqual({
				type: 'REMOVE_EXPENSE',
				id
			});
			return database.ref(`users/${uid}/expenses/${id}`).once('value');
		})
		.then(snapshot => {
			expect(snapshot.val()).toBeFalsy();
			done();
		});
});
test('should setup edit expense action object', () => {
	const action = editExpense('123abc', { note: 'New note value' });
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abc',
		updates: {
			note: 'New note value'
		}
	});
});

test('should edit expense from firebase', done => {
	const store = createMockStore({ auth: { uid } });
	const id = expenses[0].id;
	const updates = { amount: 21045 };
	store
		.dispatch(startEditExpense({ id, updates }))
		.then(() => {
			const actions = store.getActions();
			expect(actions[0]).toEqual({
				type: 'EDIT_EXPENSE',
				id,
				updates
			});
			return database.ref(`users/${uid}/expenses/${id}`).once('value');
		})
		.then(snapshot => {
			expect(snapshot.val().amount).toBe(updates.amount);
			done();
		});
});

test('should set up add expense action with provided values', () => {
	const action = addExpense(expenses[2]);

	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: expenses[2]
	});
});

test('should add expense to database and store', done => {
	// the done makes an async test wait until you call done again to complete
	const store = createMockStore({ auth: { uid } });
	const expenseData = {
		description: 'Mouse',
		amount: 3000,
		note: 'This one is better',
		createdAt: 1000
	};

	store
		.dispatch(startAddExpense(expenseData))
		.then(() => {
			const actions = store.getActions();
			expect(actions[0]).toEqual({
				type: 'ADD_EXPENSE',
				expense: {
					id: expect.any(String),
					...expenseData
				}
			});
			// can chain .then calls
			return database
				.ref(`users/${uid}/expenses/${actions[0].expense.id}`)
				.once('value');
		})
		.then(snapshot => {
			expect(snapshot.val()).toEqual(expenseData);
			done();
		});
});

test('should add expense with default values to database and store', done => {
	const store = createMockStore({ auth: { uid } });

	const defaultExpense = {
		description: '',
		note: '',
		amount: 0,
		createdAt: 0
	};
	store
		.dispatch(startAddExpense({}))
		.then(() => {
			const actions = store.getActions();
			expect(actions[0]).toEqual({
				type: 'ADD_EXPENSE',
				expense: {
					id: expect.any(String),
					...defaultExpense
				}
			});
			// can chain .then calls
			return database
				.ref(`users/${uid}/expenses/${actions[0].expense.id}`)
				.once('value');
		})
		.then(snapshot => {
			expect(snapshot.val()).toEqual(defaultExpense);
			done();
		});
});

test('should set up set expenses action object with data', () => {
	const action = setExpenses(expenses);

	expect(action).toEqual({
		type: 'SET_EXPENSES',
		expenses: expenses
	});
});

test('should fetch expenses from firebase', () => {
	const store = createMockStore({ auth: { uid } });
	store.dispatch(startSetExpenses()).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'SET_EXPENSES',
			expenses
		});
		done();
	});
});
