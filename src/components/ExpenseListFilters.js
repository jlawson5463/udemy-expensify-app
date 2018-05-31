import React from 'react';
import { connect } from 'react-redux';
import { setFilterText, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';

export class ExpenseListFilters extends React.Component {
    state = {
        calenderFocused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }
    onFocusChange = (calenderFocused) => {
        this.setState(() => ({ calenderFocused }))
    }
    onSortChange = (e) => {
        e.target.value == "date" ? this.props.sortByDate() : this.props.sortByAmount()
    }
    onTextChange = (e) => {
        this.props.setFilterText(e.target.value);
    }
    render() {
        return (
            <div>
                <input type='text' value={this.props.filters.text}
                    onChange={this.onTextChange} />
                <select
                    onChange={this.onSortChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDateId="startDateId"
                    startDate={this.props.filters.startDate}
                    endDateId="endDateId"
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    isOutsideRange={(day) => false}
                    numberOfMonths={1}
                    displayFormat={('DD MMM YY')}
                >
                </DateRangePicker>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => {
    return {
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate)),
        sortByDate: () => dispatch(sortByDate()),
        sortByAmount: () => dispatch(sortByAmount()),
        setFilterText: (value) => dispatch(setFilterText(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);