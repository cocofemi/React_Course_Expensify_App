const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;


test('should add two numbers', () => {
	const result = add(3,2);
	expect(result).toBe(5);
});

test('should return a string', () => {
	const str = generateGreeting('Femi');
	expect(str).toBe('Hello Femi!');
});

test('should return a string', () => {
	const str = generateGreeting();
	expect(str).toBe('Hello Anonymous!');
});