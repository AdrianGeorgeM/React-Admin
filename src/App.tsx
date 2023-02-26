import './App.css';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { UserList } from './users';
import { PostList, PostEdit, PostCreate } from './posts';
import jsonServerProvider from 'ra-data-json-server';

function App() {
	const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
	console.log(dataProvider);
	const list = ListGuesser;
	console.log('list', list);
	return (
		<div className='App'>
			<header className='App-header'>
				<Admin dataProvider={dataProvider}>
					{/* <Resource name='users' list={ListGuesser} />  */}
					{/* <Resource name='posts' list={PostList} /> */}
					{/* <Resource name='posts' list={PostList} edit={EditGuesser} /> */}
					{/* <Resource name='posts' list={PostList} edit={PostEdit} /> */}
					<Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate} />
					<Resource name='users' list={UserList} recordRepresentation='name' />
				</Admin>
			</header>
		</div>
	);
}

export default App;
