import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';
import DrawerComponent from '../Drawer/Drawer';
import { styles } from './Styles';

@inject('clickHandleStore')
@observer
class Layout extends React.Component {
  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.props.clickHandleStore.drawerOpen,
          })}
          style={{backgroundColor: '#53C14B'}}
        >
          <Toolbar disableGutters={!this.props.clickHandleStore.drawerOpen}>
            {this.props.clickHandleStore.drawerOpen ?
              <IconButton
                color="inherit"
                onClick={this.props.clickHandleStore.handleDrawerClose}
                className={classNames(classes.menuButton)}
                style={{marginLeft: -12}}
              >
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton> :
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.props.clickHandleStore.handleDrawerOpen}
                className={classNames(classes.menuButton, {
                  [classes.hide]: this.props.clickHandleStore.drawerOpen,
                })}
              >
                <MenuIcon />
              </IconButton>
            }
            <Typography variant="h5" color="inherit" noWrap>
              Pay
            </Typography>
          </Toolbar>
        </AppBar>
        <DrawerComponent />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Layout);