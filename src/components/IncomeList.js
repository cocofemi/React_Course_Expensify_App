import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/incomes';
import IncomeListItem from './IncomeListItem'

const IncomeList = (props) => (
<div className="content-container">
	<div className="list-header">
			<div className="show-for-mobile">Expenses</div>
			<div className="show-for-desktop">Expense</div>
			<div className="show-for-desktop">Amount</div>
	</div>
	<div className="list-body">
		{
			props.incomes.length === 0 ? (
				<div className="list-item list-item--message"> 
					<span>No Incomes</span>
				</div>
				) : (
					props.incomes.map((income) => {
						return <IncomeListItem key={income.id} {...income}/>
			})
				)
		}
	</div>
</div>
	);

const mapStateToProps = (state) => {
	return {
		incomes: selectExpenses(state.incomes, state.filters)
	}
}

export default connect(mapStateToProps)(IncomeList);

