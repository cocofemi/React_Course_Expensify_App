import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editIncome, removeIncome }  from '../actions/income';
import OptionModal from './OptionModal';

export class EditIncomePage extends React.Component {
	state = {
		selectedOption: undefined
	};
	onSubmit = (income) => {
			this.props.editIncome(this.props.income.id, income);
			this.props.history.push('/');
		};
	onRemove = () => {
			this.props.removeIncome({ id: this.props.income.id });
			this.props.history.push('/')
		};

	onRemoveWarning = () => {
		this.setState(() =>({ selectedOption: true }))
	};

	handleClearSelectedOption = () => {
		this.setState(() => ({ selectedOption: undefined }))
	};
	render() {
		return (
				<div>
					<div className="page-header">
						<div className="content-container">
							<h1 className="page-header__title">Edit Expense</h1>
						</div>
					</div>
					<div className="content-container">
						<ExpenseForm
				          expense={this.props.income}
				          onSubmit={this.onSubmit}
				          submitButton={'Save Income'}
				        />
				        <button className="button button--secondary" onClick={this.onRemoveWarning}>Remove Income</button>
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
		income: state.incomes.find((income) => income.id === props.match.params.id)
	};
};

const mapDispatchToProps = (dispatch) => ({
	editIncome: (id, income) => dispatch(editIncome(id, income)),
	removeIncome: (data) => dispatch(removeIncome(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditIncomePage);