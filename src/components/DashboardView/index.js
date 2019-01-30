import React from 'react';
import { Title } from 'react-admin';
import { Card, CardHeader, CardContent } from '@material-ui/core';


export default () => (
  <Card>
    <Title title="Blazar" />
    <CardHeader title="Welcome to the administration" />
    <CardContent>
      Manage products, categories and users.
    </CardContent>
  </Card>
);