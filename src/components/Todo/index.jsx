import React, { useState } from 'react';

const Todo = () => {
	const [items, setItems] = useState([
		{ id: 1, price: 100, title: 'HTML', completed: false, quantity: 1 },
		{ id: 2, price: 200, title: 'CSS', completed: false, quantity: 1 },
		{ id: 3, price: 300, title: 'JS', completed: false, quantity: 1 },
		{ id: 4, price: 400, title: 'React JS', completed: false, quantity: 1 },
	]);

	const onChexbox = (e, id) => {
		const { checked } = e.target;
		const res = items.map(item => (item.id === id ? { ...item, completed: checked } : item));
		setItems(res);
	};

	const plus = id => {
		const res = items.map(item => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
		setItems(res);
	};

	const minus = id => {
		const res = items.map(item => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item));
		setItems(res);
	};

	return (
		<div>
			<h1>Todo, {items.length}</h1>
			<table border={'1'}>
				<thead>
					<tr>
						<th>.</th>
						<th>ID</th>
						<th>Title</th>
						<th>Price</th>
						<th>Quantity</th>
					</tr>
				</thead>
				<tbody>
					{items?.map(item => (
						<tr key={item.id}>
							<td>
								<input type={'checkbox'} onChange={e => onChexbox(e, item.id)} />
							</td>
							<td>{item.id}</td>
							<td style={{ textDecoration: item.completed && 'line-through' }}>{item.title}</td>
							<td style={{ textDecoration: item.completed && 'line-through' }}>{item.price}.00 so'm</td>
							<td>
								<button onClick={() => minus(item.id)}>-</button>
								{item.quantity}
								<button onClick={() => plus(item.id)}>+</button>
							</td>
						</tr>
					))}
					<h2>Total: {items.reduce((sum, current) => sum + current.quantity * current.price, 0)}</h2>
				</tbody>
			</table>
		</div>
	);
};

export default Todo;
