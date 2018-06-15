import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startRemoveExpense, editExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense({id: this.props.expense.id, updates: expense}); 
        this.props.history.push('/');
    }
    onRemove = (id) => {
        this.props.startRemoveExpense(id);
        this.props.history.push('/');
    }
    render(){
        return (
            <div>
            <ExpenseForm
                expense={this.props.expense}
                onSubmit={this.onSubmit} 
            />
            <button onClick={(e) => {
                this.onRemove({id: this.props.expense.id});
            }}>Remove
            </button>
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
        editExpense: (expense) => dispatch(editExpense(expense)),
        startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);