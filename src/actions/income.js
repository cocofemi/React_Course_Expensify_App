import uuid from 'uuid';

export const addIncome = (
	{
	description = '', 
	note = '', 
	amount = 0, 
	createdAt = 0 
 } = {} 
 ) => ({
	type: 'ADD_INCOME',
	income: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});

export const removeIncome = ({ id } = {}) => ({
	type: 'REMOVE_INCOME',
	id
});

export const editIncome = (id, updates) => ({
	type: 'EDIT_INCOME',
	id,
	updates
})

