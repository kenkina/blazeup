import React from 'react';
import {
  List, Edit, Create, Datagrid, TextField, Responsive,
  EditButton, SimpleForm, TextInput, Show, SimpleShowLayout,
  DateField, Filter, SimpleList, LongTextInput, ReferenceField
} from 'react-admin';
import { Card, CardHeader, CardContent } from '@material-ui/core';


const CategoryFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);

export const CategoryList = (props) => (
  <Card>
    <CardHeader title="Categories" />
    <CardContent>
      <List title="Blazar" {...props} filters={<CategoryFilter />}>
        <Responsive
          small={
            <SimpleList
              primaryText={category => category.name}
              secondaryText={category => category.description}
              tertiaryText={category => new Date(category.createdDate).toLocaleDateString()}
              linkType="show"
            />
          }
          medium={
            <Datagrid>
              <ReferenceField
                label="Name"
                source="id"
                reference="categories"
                linkType="show">
                <TextField source="name" />
              </ReferenceField>
              <TextField source="description" />
              <DateField source="createdDate" />
              <EditButton />
            </Datagrid>
          }
        />
      </List>
    </CardContent>
  </Card>
);

export const CategoryEdit = props => (
  <Edit title="Blazar" {...props}>
    <SimpleForm redirect="list">
      <TextInput source="name" />
      <LongTextInput source="description" />
    </SimpleForm>
  </Edit>
);

export const CategoryCreate = props => (
  <Create title="Blazar" {...props}>
    <SimpleForm redirect="list">
      <TextInput source="name" />
      <LongTextInput source="description" />
    </SimpleForm>
  </Create>
);

export const CategoryShow = (props) => (
  <Show title="Blazar" {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <DateField source="createdDate" showTime />
    </SimpleShowLayout>
  </Show>
);