import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Cards } from 'react-bootstrap';
import numeral from 'numeral';
import moment from 'moment';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import Header from './Header';
import DashboardSummary from './DashboardSummary';

const HomePage = () => (
	<div className="dashboard-layout">
		<DashboardSummary /> 
	</div>
	
);

export default HomePage; 

