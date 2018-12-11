import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="header">
  	<div className="content-container">
  		<div className="header__content">
		    <Link className="header__title" to="/dashboard" >
		    	<h1>BudgetIt</h1>
		    </Link>
        <Link className="button button--link" to="/income">
          <h3>Income</h3>
        </Link>
        <Link className="button button--link" to="/dashboard">
          <h3>Expenses</h3>
        </Link>
		    <button className="button button--link" onClick={startLogout}>Logout</button>
	    </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
