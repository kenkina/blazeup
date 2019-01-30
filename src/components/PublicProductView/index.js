import React from 'react';
import {
  List, Show, TextField, ReferenceInput, TextInput,
  ReferenceField, SelectInput, SimpleShowLayout,
  DateField, Filter, NumberField, RichTextField
} from 'react-admin';
import { Card, CardHeader, CardContent } from '@material-ui/core';

import GridList from './GridList';


const PublicProductFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="Category" source="categoryId" reference="publicCategories" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const PublicProductList = (props) => (
  <Card>
    <CardHeader title="Products" />
    <CardContent>
      <List
        title="Blazar"
        {...props}
        filters={<PublicProductFilter />}>
        <GridList />
        
      </List>
    </CardContent>
  </Card>
);

export const PublicProductShow = (props) => (
  <Show title="Blazar" {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <RichTextField source="description" />
      <ReferenceField
        label="Category"
        source="categoryId"
        reference="publicCategories"
        linkType="show">
        <TextField source="name" />
      </ReferenceField>
      <NumberField
        source="price"
        options={{ style: 'currency', currency: 'PEN' }} />
      <DateField source="createdDate" showTime />
    </SimpleShowLayout>
  </Show>
);



/*


      <List title="Blazar" {...props} filters={<PublicProductFilter />}>
        <Responsive
          small={
            <SimpleList
              primaryText={product => product.name}
              secondaryText={product => product.description}
              tertiaryText={product => product.price}
              linkType="show"
            />
          }
          medium={
            <Datagrid>
              <ReferenceField
                label="Name"
                source="id"
                reference="publicProducts"
                linkType="show">
                <TextField source="name" />
              </ReferenceField>
              <TextField source="description" />
              <ReferenceField
                label="Category"
                source="categoryId"
                reference="publicCategories"
                linkType="show">
                <TextField source="name" />
              </ReferenceField>
              <NumberField
                source="price"
                options={{ style: 'currency', currency: 'PEN' }}
              />
            </Datagrid>
          }
        />
      </List>

*/