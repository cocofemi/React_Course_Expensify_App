import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
	<div>
		<ExpensesSummary />
		<ExpenseListFilters 
			placeholder={'Search Expenses'}/>
		<ExpenseList />
	</div>

	);

export default ExpenseDashboardPage;