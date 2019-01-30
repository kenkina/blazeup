import React from 'react';
import {
  List, Edit, Create, Datagrid, TextField, Responsive, ReferenceInput,
  EditButton, SimpleForm, TextInput, ReferenceField, SelectInput,
  DateField, Filter, SimpleList, LongTextInput, NumberField, NumberInput,
  Show, SimpleShowLayout, RichTextField
} from 'react-admin';
import { Card, CardHeader, CardContent } from '@material-ui/core';


const ProductFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="Category" source="categoryId" reference="categories" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const ProductList = (props) => (
  <Card>
    <CardHeader title="Products" />
    <CardContent>
      <List title="Blazar" {...props} filters={<ProductFilter />}>
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
                reference="products"
                linkType="show">
                <TextField source="name" />
              </ReferenceField>
              <TextField source="description" />
              <ReferenceField label="Category" source="categoryId" reference="categories">
                <TextField source="name" />
              </ReferenceField>
              <NumberField source="price" options={{ style: 'currency', currency: 'PEN' }} />
              <DateField source="createdDate" />
              <EditButton />
            </Datagrid>
          }
        />
      </List>
    </CardContent>
  </Card>
);

const ProductTitle = ({ record }) => {
  return <span>Product {record ? `${record.name}` : ''}</span>;
};

//<DisabledInput source="id" />
export const ProductEdit = props => (
  <Edit title={<ProductTitle />} {...props}>
    <SimpleForm redirect="list">
      <TextInput source="name" />
      <LongTextInput source="description" />
      <ReferenceInput source="categoryId" reference="categories">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NumberInput source="price" />
    </SimpleForm>
  </Edit>
);

export const ProductCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="list">
      <TextInput source="name" />
      <LongTextInput source="description" />
      <ReferenceInput source="categoryId" reference="categories">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NumberInput source="price" />
    </SimpleForm>
  </Create>
);

export const ProductShow = (props) => (
  <Show title="Blazar" {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <RichTextField source="description" />
      <ReferenceField
        label="Category"
        source="categoryId"
        reference="categories"
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