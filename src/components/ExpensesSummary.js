import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = ({ expenseCount, expensesTotal, filters }) => {
	const expenseWord = expenseCount === 1 ? 'expense': 'expenses';
	const formattedExpensesTotal = numeral(expensesTotal /100).format('$0,0.00')
	const expensesStartMonth = moment(filters.startDate).format('MMM Do, YYYY')
	const expensesEndMonth = moment(filters.endDate).format('MMM Do, YYYY')

	return (
		<div className="page-header">
			<div className="content-container">
				<h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span> from <span>{expensesStartMonth}</span> to <span>{expensesEndMonth}</span> </h1>
				<div className="page-header__actions">
					<Link className="button" to="/create"> Add Expense</Link>
				</div>
			</div>
		</div>	
		);
	};

const mapStateToProps = (state) => {
	const visibleExpenses = selectExpenses(state.expenses, state.filters);
	return{
		expenseCount: visibleExpenses.length,
		expensesTotal: selectExpensesTotal(visibleExpenses),
		filters: state.filters
	};
};

export default connect(mapStateToProps)(ExpensesSummary);