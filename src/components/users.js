import React from 'react';
import {
  List, Edit, Create, Datagrid, TextField, Responsive,
  EditButton, SimpleForm, DisabledInput, TextInput,
  DateField, Filter, SimpleList
} from 'react-admin';
//import MyUrlField from './MyUrlField';

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);

export const UserList = (props) => (
  <List {...props} filters={<UserFilter />}>
    <Responsive
      small={
        <SimpleList
          primaryText={user => user.username}
          secondaryText={user => user.lastName}
          tertiaryText={user => new Date(user.createdDate).toLocaleDateString()}
        />
      }
      medium={
        <Datagrid>
          <TextField source="id" label="ID" sortable={false} />
          <TextField source="username" />
          <TextField source="firstName" />
          <TextField source="lastName" />
          <DateField source="createdDate" showTime />
          <EditButton />
        </Datagrid>
      }
    />
  </List>
);

const UserTitle = ({ record }) => {
  return <span>User {record ? `${record.username}` : ''}</span>;
};

export const UserEdit = props => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="username" />
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="password" type="password" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="username" />
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="password" type="password" />
    </SimpleForm>
  </Create>
);