import authReducer from '../../reducers/auth';

test('should setup uid for login ', () => {
	const action = {
		type: 'LOGIN',
		uid: 'anc123'
	};
	const state = authReducer({}, action);
	expect(state.uid).toBe(action.uid);
});

test('should clear uid for logout ', () => {
	const action = {
		type: 'LOGOUT'
	};
	const state = authReducer({uid: 'nothing'}, action);
	expect(state).toEqual({});
});