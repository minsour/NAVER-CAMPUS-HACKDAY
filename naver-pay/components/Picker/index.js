import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {inject, observer} from 'mobx-react';

const styles = theme => ({
  container: {
    display: 'inline',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

@inject('orderStore')
@observer
export class Picker extends React.Component {
  render() {
    const { classes, label, date } = this.props;
    return (
      <form className={classes.container} noValidate>
        <TextField
          id="date"
          label={label}
          type="date"
          value={date}
          onChange={(date) => {date = date}}
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    );
  }
}
  

Picker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Picker);