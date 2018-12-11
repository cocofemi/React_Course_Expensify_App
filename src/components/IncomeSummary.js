import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/incomes';


export const IncomeSummary = ({ incomeCount, incomeTotal, filters}) => {

	const incomeWord = incomeCount === 1 ? 'income': 'incomes';
	const formattedExpensesTotal = numeral(incomeTotal /100).format('$0,0.00')
	const expensesStartMonth = moment(filters.startDate).format('MMM Do, YYYY')
	const expensesEndMonth = moment(filters.endDate).format('MMM Do, YYYY')

	return (
		<div className="page-header">
			<div className="content-container">
				<h1 className="page-header__title">Viewing <span>{incomeCount}</span> {incomeWord} totalling <span>{formattedExpensesTotal}</span> from <span>{expensesStartMonth}</span> to <span>{expensesEndMonth}</span> </h1>
				<div className="page-header__actions">
					<Link className="button" to="/createincome">Add Income</Link>
				</div>
			</div>
		</div>
		)
}


const mapStateToProps = (state) => {
	const visibleExpenses = selectExpenses(state.incomes, state.filters);
	return{
		incomeCount: visibleExpenses.length,
		incomeTotal: selectExpensesTotal(visibleExpenses),
		filters: state.filters
	};
};

export default connect(mapStateToProps)(IncomeSummary);
