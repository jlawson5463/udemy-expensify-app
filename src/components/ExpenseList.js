import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = props => (
	<div className="content-container">
		<div className="list-header">
			<div className="show-for-mobile">Expenses</div>
			<div className="show-for-desktop">Expense</div>
			<div className="show-for-desktop">Amount</div>
		</div>
		<div className="list-body">
			{props.expenses.length === 0 ? (
				<div className="list-item list-item--message">
					<span>No expenses</span>
				</div>
			) : (
				props.expenses.map((e, i) => <ExpenseListItem {...e} key={i} />)
			)}
		</div>
	</div>
);

// below is where we set up what part of the store we want this component to be able to access.
// as the provider passes the entire store to every component we need to narrow down what it can see
// the expenses in the below object can be called anything.
// just a placeholder for prop names to store things from the state
const mapStateToProps = state => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	};
};

// passing state into the redux store using the connect api.
// it returns what we set it to - so expenses in this case.
// passes them as props to what ever we pass in to the 2nd place.
// now can display them by accessing the props.
export default connect(mapStateToProps)(ExpenseList);
