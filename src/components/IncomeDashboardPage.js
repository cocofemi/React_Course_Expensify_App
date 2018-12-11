import React from 'react';
import IncomeList from './IncomeList';
import ExpenseListFilters from './ExpenseListFilters';
import IncomeSummary from './IncomeSummary';
import Header from './Header';

const IncomeDashboardPage = () => (
	<div>
		<Header />
		<IncomeSummary />
		<ExpenseListFilters 
			placeholder={'Search Income'}/> 
		<IncomeList />
	</div>
	);

export default IncomeDashboardPage;
