import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startRemoveExpense, startEditExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense({ id: this.props.expense.id, updates: expense });
        this.props.history.push('/');
    }
    onRemove = (id) => {
        this.props.startRemoveExpense(id);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--edit" onClick={(e) => {
                        this.onRemove({ id: this.props.expense.id });
                    }}>Remove Expense
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startEditExpense: (expense) => dispatch(startEditExpense(expense)),
        startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);