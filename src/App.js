import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList, UserEdit, UserCreate } from './components/users';
import { PostList, PostEdit, PostCreate } from './components/posts';
import Dashboard from './components/Dashboard';
import authProvider from './components/authProvider';
import dataProvider from './components/dataProvider';

//import jsonServerProvider from 'ra-data-json-server';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';


//const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
  <Admin title="Blazar" dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
  </Admin>
);

export default App;