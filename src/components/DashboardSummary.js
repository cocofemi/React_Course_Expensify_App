import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CardDeck, Card} from 'react-bootstrap';
import numeral from 'numeral';
import moment from 'moment';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const DashboardSummary = ({expensesTotal, filters }) => {
	const formattedExpensesTotal = numeral(expensesTotal /100).format('$0,0.00')
	const expensesStartMonth = moment(filters.startDate).format('MMM Do, YYYY')
	const expensesEndMonth = moment(filters.endDate).format('MMM Do, YYYY')

	return (
		<div>
			<Card>
	  			<Card.Body className="text-center">
	  				<h1>Welcome to budgetIt, helping you make sense of your finances.</h1>
	  			</Card.Body>
			</Card>

			<CardDeck>
				<Card className="text-center">
				    <Card.Body>
				      <Card.Title><h1>Expenses</h1></Card.Title>
				      <Card.Text>
				      	<h4>
				        	Total Expenses from <span>{expensesStartMonth}</span> to <span>{expensesEndMonth}</span>
				        </h4>
				        <h1><span>{formattedExpensesTotal}</span></h1>
				      </Card.Text>
				      <div className="page-header__actions">
						<Link className="button" to="/expenses"> View All Expense</Link>
					</div>
				    </Card.Body>
			  	</Card>
			  	<Card className="text-center">
				    <Card.Body>
				      <Card.Title><h1>Incomes</h1></Card.Title>
				      <Card.Text>
				      	<h4>
				        	Total Income from <span>{expensesStartMonth}</span> to <span>{expensesEndMonth}</span>
				        </h4>
				        <h1><span>{formattedExpensesTotal}</span></h1>
				      </Card.Text>
				      <div className="page-header__actions">
						<Link className="button" to="/income"> View All income</Link>
					</div>
				    </Card.Body>
			  	</Card>
			</CardDeck>	
		</div>
		);
	};

const mapStateToProps = (state) => {
	const visibleExpenses = selectExpenses(state.expenses, state.filters);
	return{
		expensesTotal: selectExpensesTotal(visibleExpenses),
		filters: state.filters
	};
};

export default connect(mapStateToProps)(DashboardSummary);