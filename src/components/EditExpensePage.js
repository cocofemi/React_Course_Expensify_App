import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense }  from '../actions/expenses';
import OptionModal from './OptionModal';

export class EditExpensePage extends React.Component {
	state = {
		selectedOption: undefined
	};

	onSubmit = (expense) => {
			this.props.startEditExpense(this.props.expense.id, expense);
			this.props.history.push('/');
		};
	onRemove = () => {
			this.props.startRemoveExpense({ id: this.props.expense.id });
			this.props.history.push('/')
		};

	onRemoveWarning = () => {
		this.setState(() =>({ selectedOption: true }))
	};

	handleClearSelectedOption = () => {
		this.setState(() => ({ selectedOption: undefined }))
	};

	render() {
		return(
		<div>
			<div className="page-header">
				<div className="content-container">
					<h1 className="page-header__title">Edit Expense</h1>
				</div>
			</div>
				<div className="content-container">
					<ExpenseForm
			          expense={this.props.expense}
			          onSubmit={this.onSubmit}
			          submitButton={'Save Expense'}
			        />
			        <button className="button button--secondary" onClick={this.onRemoveWarning}>Remove Expense</button>
			        <OptionModal 
			        selectedOption={this.state.selectedOption}
			        onRemove={this.onRemove}
			        handleClearSelectedOption={this.handleClearSelectedOption}
			        />
				</div>
      </div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find((expense) => expense.id === props.match.params.id)
	};
};

const mapDispatchToProps = (dispatch) => ({
	startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
	startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);