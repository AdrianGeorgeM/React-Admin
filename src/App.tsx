import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';

function App() {
	const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
	console.log(dataProvider);

	return (
		<div className='App'>
			<header className='App-header'>
				<Admin dataProvider={dataProvider}>
					{/* <Resource name='users' list={ListGuesser} /> */}
					<Resource name='users' list={UserList} />
				</Admin>
			</header>
		</div>
	);
}

export default App;
