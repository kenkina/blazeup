import React from 'react';
import compose from 'recompose/compose';
import MuiGridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import { NumberField, TextField } from 'react-admin';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from 'react-router-dom';
import { linkToRecord } from 'ra-core';


const styles = {
  root: {
    margin: '-2px',
  },
  gridList: {
    width: '100%',
    margin: 0,
  },
  tileBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.9) 0%,rgba(0,0,0,0.8) 85%,rgba(0,0,0,0) 100%)',
  },
  price: {
    display: 'inline',
    fontSize: '1em',
  },
  link: {
    color: '#fff',
  },
};

const getColsForWidth = width => {
  if (width === 'xs') return 2;
  if (width === 'sm') return 3;
  if (width === 'md') return 4;
  if (width === 'lg') return 5;
  return 6;
};

const GridList = ({ classes, ids, data, basePath, width }) => {
  return (
    <div className={classes.root}>
      <MuiGridList
        cellHeight={180}
        cols={getColsForWidth(width)}
        className={classes.gridList}>

        {ids.map(id => (
          <GridListTile key={id}>
            <img src={'http://www.bowkynart.com/wp-content/uploads/2017/03/samples.png'} alt="data[id].thumbnail" />
            <GridListTileBar
              className={classes.tileBar}
              title={
                <TextField
                  className={classes.price}
                  source="name"
                  record={data[id]}
                  color="inherit" />
              }
              subtitle={
                <NumberField
                  className={classes.price}
                  source="price"
                  record={data[id]}
                  color="inherit"
                  options={{
                    style: 'currency',
                    currency: 'PEN',
                  }} />
              }
              actionIcon={
                <IconButton
                  to={linkToRecord(basePath, data[id].id, 'show')}
                  className={classes.link}
                  component={Link}>
                  <VisibilityIcon />
                </IconButton>
              }
            />
          </GridListTile>

        ))}
      </MuiGridList>
    </div>
  )
};

const enhance = compose(
  withWidth(),
  withStyles(styles)
);

export default enhance(GridList);
