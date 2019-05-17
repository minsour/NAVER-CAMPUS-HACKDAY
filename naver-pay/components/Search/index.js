import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Picker from '../Picker';
import { inject, observer } from 'mobx-react';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    width: '92%',
    marginLeft: '4%',
    marginTop: 12,
    marginBottom: 10,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    display: 'inline-block'
  },
  button: {
    margin: theme.spacing.unit,
    flexBasis: '30%',
  },
});

@inject('orderStore')
@observer
export class Search extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Picker label='시작 날짜' date={this.props.orderStore.startDate}/>
          <Picker label='종료 날짜' date={this.props.orderStore.startDate}/>
          <Button variant="outlined" onClick={this.props.orderStore.getOrderList} color="inherit" className={classes.button}>
            조회
          </Button>
        </Paper>
      </div>
    );
  }
  }


Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);
