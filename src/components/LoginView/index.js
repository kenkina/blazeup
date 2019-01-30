import React from 'react';
import { Login, LoginForm } from 'ra-ui-materialui';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  login: {
    main: {
      backgroundImage: 'url(http://www.woorockets.com/wp-content/uploads/2014/12/ecommerce-woocommerce-plugin.jpg)',
    },
    card: {
      padding: '5px 0 15px 0',
    },
  },
  form: {
    button: {
      height: '3em',
    },
  },
};

const MyLoginForm = withStyles(styles.form)(LoginForm);

const MyLogin = (props) => (
  <Login
    loginForm={<MyLoginForm />}
    backgroundImage="https://media.cqlcorp.com/media/cql-post-background.jpg"
    {...props} />
);

export default withStyles(styles.login)(MyLogin);