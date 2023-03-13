import React, { useState } from 'react';

const Storage = () => {
	const [count, setCount] = useState(localStorage.getItem('count') | 0);

	localStorage.setItem('count', count);
	console.log(localStorage.getItem('count'));

	localStorage.setItem('user', JSON.stringify({ name: 'Jack', email: 'jack@gmail.com', password: '1234' }));
	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={() => setCount(prev => prev - 1)}>-</button>
			<button onClick={() => setCount(prev => prev + 1)}>+</button>
			<button onClick={() => localStorage.removeItem('user')}>log Out</button>
		</div>
	);
};

export default Storage;

// localStorage.setItem()
// localStorage.removeItem()
// localStorage.getItem()
// localStorage.clear()
