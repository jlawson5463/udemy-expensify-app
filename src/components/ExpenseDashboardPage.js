import React from 'react';
import ConnectedExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = (props) => {
    console.log(props)
    return (
        <div>
            <ExpenseListFilters />
            <ConnectedExpenseList />
        </div>
        
    );
}

export default ExpenseDashboardPage;