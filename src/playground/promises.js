const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
	}, 5000)
	// resolve('This is my resolved data')
	reject('Something went wrong');
});

console.log('before');

promise.then((data) => {
	console.log(data);
}).catch((error) => {
	console.log('error:', error);
})

console.log('after');