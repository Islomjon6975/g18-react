import React, { useState } from 'react';
import TodoItem from '../TodoItem';
import { Container } from './style';

function Hooks(props) {
	const [user, setUser] = useState({
		firstName: 'Jack',
		lastName: 'Smith',
		age: 30,
		completed: false,
	});

	const [todos, setTodos] = useState([
		{ id: 1, title: 'item 1', completed: true, quantity: 1 },
		{ id: 2, title: 'item 2', completed: false, quantity: 1 },
		{ id: 3, title: 'item 3', completed: false, quantity: 1 },
	]);

	const increment = () => {
		setUser({ ...user, age: user.age + 1 });
	};

	const decrement = () => {
		setUser({ ...user, age: user.age - 1 });
	};

	const onChange = e => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const onChecked = e => {
		const { checked } = e.target;
		setUser({ ...user, completed: checked });
	};
	console.log(user);

	return (
		<Container style={{ flex: '1' }}>
			{/* {props.title}
      <p style={{ textDecoration: user.completed && "line-through" }}>
        FirstName:{user.firstName}
      </p>
      <p>FirstName:{user.lastName}</p>
      <p>FirstName:{user.age}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <br />
      <input
        placeholder="Change FirstName"
        onChange={onChange}
        value={user.firstName}
        name="firstName"
      />
      <br />
      <input
        placeholder="Change LastName"
        onChange={onChange}
        value={user.lastName}
        name="lastName"
      />

      <input type="checkbox" onChange={onChecked} name="completed" />
      <br /> */}

			{todos.map(todo => (
				<TodoItem key={todo.id} todo={todo} />
			))}
			<Container>Container</Container>
			<Container>Container</Container>
			<Container>Container</Container>
			<Container>Container</Container>
		</Container>
	);
}

export default Hooks;
