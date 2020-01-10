import React from 'react';
import IncomeList from './IncomeList';
import ExpenseListFilters from './ExpenseListFilters';
import IncomeSummary from './IncomeSummary';
import { Breadcrumb } from 'react-bootstrap';

const IncomeDashboardPage = () => (
	<div className="dashboard-layout">
	<h3>
		<Breadcrumb>
  			<Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item>
  			<Breadcrumb.Item active>Income</Breadcrumb.Item>
		</Breadcrumb>
	</h3>
		<IncomeSummary />
		<ExpenseListFilters 
			placeholder={'Search Income'}/> 
		<IncomeList />
	</div>
	);

export default IncomeDashboardPage;
