import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { styles } from './Styles';
import LinesEllipsis from 'react-lines-ellipsis'
import Link from 'next/link';
import Item from '../Item';


function Order(props) {
  const { classes, orderId, itemName, date, items } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel defaultUnExpanded>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.columnDate}>
            <Typography className={classes.secondaryHeading}>{date}</Typography>
          </div>
          <div className={classes.columnName}>
            <Typography className={classes.heading}>
            <LinesEllipsis
                    text={itemName}
                    maxLine='1'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />
            </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.columnButton} />
          <div className={classNames(classes.column, classes.helper)}>
            <Item date={date} items={items}/>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button className={classes.button} color="inherit">
            <Link href={{pathname: '/order', query: `/${orderId}`}}>
              <a>주문 상세 페이지</a>
            </Link>
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}

Order.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Order);
