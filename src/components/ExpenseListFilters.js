import React from 'react';
import { connect } from 'react-redux';
import { setFilterText, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';

class ExpenseListFilters extends React.Component {
    state = {
        calenderFocused: null
    }    
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    onFocusChange = (calenderFocused) => {
        this.setState(() => ({ calenderFocused }))
    }
    render() {
        return (
            <div>
                <input type='text' value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setFilterText(e.target.value));
                }} />
                <select
                    onChange={(e) => {
                        this.props.dispatch(e.target.value == "date" ? sortByDate() : sortByAmount())
                    }
                    }>
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

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);