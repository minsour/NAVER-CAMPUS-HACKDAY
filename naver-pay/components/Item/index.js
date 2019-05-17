import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});

function AlignItemsList(props) {
  const { classes, items, date } = props;
  return (
    <List className={classes.root}>
      {items.map(item =>
        <ListItem button alignItems="flex-start">
        <ListItemText
          primary={item.name}
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
                {item.amount}개   총 {item.amount*item.price} 원<br/>
              </Typography>
              <Typography component="span" className={classes.inline} color="textPrimary">
                {date}<br/>
              </Typography>
              {item.status}
            </React.Fragment>
          }
        />
      </ListItem>
      )}
    </List>
  );
}

AlignItemsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlignItemsList);
