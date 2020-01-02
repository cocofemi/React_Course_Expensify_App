import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/incomes';
import IncomeListItem from './IncomeListItem'

const IncomeList = (props) => (
<div className="content-container">
	<div className="list-header">
			<div className="show-for-mobile"><h3>Income</h3></div>
			<div className="show-for-desktop"><h3>Income</h3></div>
			<div className="show-for-desktop"><h3>Amount</h3></div>
	</div>
	<div className="list-body">
		{
			props.incomes.length === 0 ? (
				<div className="list-item list-item--message"> 
					<span><h3>No Income</h3></span>
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

