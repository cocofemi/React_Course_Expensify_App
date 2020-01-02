import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
	<div className="content-container">
		<div className="list-header">
			<div className="show-for-mobile"><h3>Expenses</h3></div>
			<div className="show-for-desktop"><h3>Expense</h3></div>
			<div className="show-for-desktop"><h3>Amount</h3></div>
		</div>
		<div className="list-body">
		{
			props.expenses.length === 0 ? (
				<div className="list-item list-item--message">
					<span><h3>No expenses</h3></span>
				</div>
			) : (
				props.expenses.map((expense) => {
					return <ExpenseListItem key={expense.id} {...expense} />;
			})
		)
		}
		</div>
	</div>
	);

const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	}
}

export default connect(mapStateToProps)(ExpenseList);
