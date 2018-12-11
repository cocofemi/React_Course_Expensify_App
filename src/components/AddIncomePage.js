import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addIncome } from '../actions/income';

 export class AddIncomePage extends React.Component {
 	onSubmit = (income) => {	
    	this.props.addIncome(income);
    	this.props.history.push('/income');
 	}
 	render() {
 		return (
 			<div>
 				<div className="page-header">
            		<div className="content-container">
                		<h1 className="page-header__title">Add Income</h1>
            		</div>
        		</div>
        		<div className="content-container">
	 				<ExpenseForm 
	 				onSubmit={this.onSubmit}
	 				placeHolder={'Add a note for your income (Optional)'}
	 				submitButton={'Save Income'}/>
	 			</div>
 			</div>
 		);
 	}
 }

 const mapDispatchToProps = (dispatch) => ({
  addIncome: (income) => dispatch(addIncome(income))
});


 export default connect(undefined, mapDispatchToProps)(AddIncomePage);