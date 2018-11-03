import { login, logout } from '../../actions/auth';

test('should generate login action object', () => {
	const uid = 'ab1243';
	const action = login(uid);
	expect(action).toEqual({
		type: 'LOGIN',
		uid
	});
});

test('should generate logout action object', () => {
	const uid = 'ab1243';
	const action = logout(uid);
	expect(action).toEqual({
		type: 'LOGOUT'
	});
});