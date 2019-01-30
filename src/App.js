import React from 'react';
import { Admin, Resource } from 'react-admin';

import { authProvider, dataProvider } from './providers';
//import jsonServerProvider from 'ra-data-json-server';
//const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

import { UserList, UserEdit, UserCreate, UserShow } from './components/UserView';
import { CategoryList, CategoryEdit, CategoryCreate, CategoryShow } from './components/CategoryView';
import { ProductList, ProductEdit, ProductCreate, ProductShow } from './components/ProductView';
import { PublicProductList, PublicProductShow } from './components/PublicProductView';
import { PublicCategoryList, PublicCategoryShow } from './components/PublicCategoryView';
import Dashboard from './components/DashboardView';
import LoginPage from './components/LoginView';

import CategoryIcon from '@material-ui/icons/Loyalty';
import ProductIcon from '@material-ui/icons/ShoppingCart';
import UserIcon from '@material-ui/icons/Group';


const App = () => (
  <Admin
    title="Blazar"
    dashboard={Dashboard}
    loginPage={LoginPage}
    authProvider={authProvider}
    dataProvider={dataProvider}>
    {
      permissions => {
        const isAdmin = permissions === 'admin';
        return [
          !isAdmin
            ? <Resource name="publicProducts"
              list={PublicProductList}
              show={PublicProductShow}
              icon={ProductIcon}
              options={{ label: 'Products' }} />
            : null,
          !isAdmin
            ? <Resource name="publicCategories"
              list={PublicCategoryList}
              show={PublicCategoryShow}
              icon={CategoryIcon}
              options={{ label: 'Categories' }} />
            : null,
          isAdmin
            ? <Resource name="products"
              list={ProductList}
              edit={ProductEdit}
              create={ProductCreate}
              show={ProductShow}
              icon={ProductIcon} />
            : null,
          isAdmin
            ? <Resource name="categories"
              list={CategoryList}
              edit={CategoryEdit}
              create={CategoryCreate}
              show={CategoryShow}
              icon={CategoryIcon} />
            : null,
          isAdmin
            ? <Resource name="users"
              list={UserList}
              edit={UserEdit}
              create={UserCreate}
              show={UserShow}
              icon={UserIcon} />
            : null
        ];
      }
    }

  </Admin>
);

export default App;


/*
  <Resource name="publicProducts" list={PublicProductList} show={PublicProductShow} icon={ProductIcon} options={{ label: 'PProducts' }} />
  <Resource name="categories" list={CategoryList} edit={CategoryEdit} create={CategoryCreate} icon={CategoryIcon} />
  <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} icon={ProductIcon} />
  <Resource name="categories" list={CategoryList} edit={CategoryEdit} create={CategoryCreate} icon={CategoryIcon} />    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
*/