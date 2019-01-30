import React from 'react';
import {
  List, Show, Datagrid, TextField, Responsive, TextInput, SimpleShowLayout,
  DateField, Filter, SimpleList, ReferenceField
} from 'react-admin';
import { Card, CardHeader, CardContent } from '@material-ui/core';


const PublicCategoryFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);

export const PublicCategoryList = (props) => (
  <Card>
    <CardHeader title="Categories" />
    <CardContent>
      <List title="Blazar" {...props} filters={<PublicCategoryFilter />}>
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
                reference="publicCategories"
                linkType="show">
                <TextField source="name" />
              </ReferenceField>
              <TextField source="description" />
              <DateField source="createdDate" />
            </Datagrid>
          }
        />
      </List>
    </CardContent>
  </Card>
);

export const PublicCategoryShow = (props) => (
  <Show title="Blazar" {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="description" />
      <DateField source="createdDate" showTime/>
    </SimpleShowLayout>
  </Show>
);