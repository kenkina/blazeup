import React from 'react';
import {
  List, Edit, Create, Datagrid, TextField, Responsive,
  EditButton, SimpleForm, TextInput, ReferenceField,
  DateField, Filter, SimpleList, SimpleShowLayout, Show
} from 'react-admin';


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
          linkType="show"
        />
      }
      medium={
        <Datagrid>
          <ReferenceField
            label="Username"
            source="id"
            reference="users"
            linkType="show">
            <TextField source="username" />
          </ReferenceField>
          <TextField source="firstName" />
          <TextField source="lastName" />
          <DateField source="createdDate" />
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
    <SimpleForm redirect="list">
      <TextInput source="username" />
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="password" type="password" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="list">
      <TextInput source="username" />
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="password" type="password" />
    </SimpleForm>
  </Create>
);

export const UserShow = (props) => (
  <Show title="Blazar" {...props}>
    <SimpleShowLayout>
      <TextField source="username" />
      <TextField source="firstName" />
      <TextField source="lastName" />
      <DateField source="createdDate" showTime />
    </SimpleShowLayout>
  </Show>
);