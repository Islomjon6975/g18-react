import React, { useState, useEffect } from 'react';

function UseEffect() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('Jack');
	const [data, setData] = useState([]);
	const [type, setType] = useState('posts');
	const [user, setUser] = useState({});
	const [userId, setUsetId] = useState(null);

	const increment = () => {
		setCount(prev => prev + 1);
	};

	const decrement = () => {
		setCount(prev => prev - 1);
	};

	const onChange = e => {
		const { value } = e.target;
		setName(value);
	};

	const show = id => {
		setUsetId(id);
	};

	useEffect(() => {
		// case 1
		console.log('case 1');
	});

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${type}`)
			.then(response => response.json())
			.then(users => {
				setData(users);
				console.log(users);
			});
	}, [type]);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${type}/${userId}`)
			.then(response => response.json())
			.then(users => {
				setUser(users);
				console.log(users);
			});
	}, [userId, type]);

	useEffect(() => {
		console.log('case 3');
	}, [name, count]);

	console.log('useEffect');

	return (
		<div>
			<h1>
				UseEffect, {count} {name}
			</h1>
			<button onClick={increment}>+</button>
			<button onClick={decrement}>-</button>
			<input type='text' onChange={onChange} />

			<button onClick={() => setType('todos')}>todos</button>
			<button onClick={() => setType('posts')}>posts</button>
			<p>
				User: {user?.id} {user?.title}
			</p>
			{data.map(item => (
				<p key={item.id}>
					{item.id}.{item.title} <button onClick={() => show(item.id)}>show</button>
				</p>
			))}
		</div>
	);
}

export default UseEffect;
