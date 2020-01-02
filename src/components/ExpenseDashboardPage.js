import React from 'react';
import { connect } from 'react-redux';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
	<div className="dashboard-layout">
		<ExpensesSummary />
		<ExpenseListFilters 
			placeholder={'Search Expenses'}/>
		<ExpenseList />
	</div>

	);

export default ExpenseDashboardPage;
