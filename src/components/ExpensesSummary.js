import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
    const formattedTotal = numeral(expenseTotal / 100).format('£0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseCount === 1 ? 'expense ' : 'expenses '}
                    totalling <span>£{formattedTotal}</span></h1>
                    <div className="page-header_actions">
                        <Link className="button" to="/create">Add Expense</Link>
                    </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: expensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps, undefined)(ExpensesSummary);
