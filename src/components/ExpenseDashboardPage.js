import React from 'react';
import { connect } from 'react-redux';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import { Breadcrumb } from 'react-bootstrap';

const ExpenseDashboardPage = () => (
	<div className="dashboard-layout">
	<h3>
		<Breadcrumb>
  			<Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item>
  			<Breadcrumb.Item active>Expenses</Breadcrumb.Item>
		</Breadcrumb>
	</h3>
		<ExpensesSummary />
		<ExpenseListFilters 
			placeholder={'Search Expenses'}/>
		<ExpenseList />
	</div>

	);

export default ExpenseDashboardPage;
