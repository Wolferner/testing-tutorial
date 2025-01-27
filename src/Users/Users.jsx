import axios from 'axios';
import React, { useEffect } from 'react';

const Users = () => {
	const [users, setUsers] = React.useState([]);

	const loadUsers = async () => {
		const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
		setUsers(resp.data);
	};

	useEffect(() => {
		loadUsers();
	}, []);

	return (
		<ul>
			{users.map(user => (
				<li key={user.id} data-testid='user'>
					{user.id}
				</li>
			))}
		</ul>
	);
};

export default Users;
