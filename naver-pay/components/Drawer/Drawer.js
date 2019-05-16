import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { inject, observer } from 'mobx-react'
import { styles } from './Styles';

@inject('clickHandleStore')
@observer
class DrawerComponent extends React.Component {
  render() {
    const { classes, theme } = this.props;
      
    return (
        <Drawer
            variant="permanent"
            className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.props.clickHandleStore.drawerOpen,
            [classes.drawerClose]: !this.props.clickHandleStore.drawerOpen,
            })}
            classes={{
            paper: classNames({
                [classes.drawerOpen]: this.props.clickHandleStore.drawerOpen,
                [classes.drawerClose]: !this.props.clickHandleStore.drawerOpen,
            }),
            }}
            open={this.props.clickHandleStore.drawerOpen}
        >
            <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
            </div>
            <Divider />
            <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
                </ListItem>
            ))}
            </List>
            <Divider />
            <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
                </ListItem>
            ))}
            </List>
        </Drawer>
    );
  }
}

DrawerComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
  
export default withStyles(styles, { withTheme: true })(DrawerComponent);