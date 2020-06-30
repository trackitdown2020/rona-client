import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Breadcrumbs } from '../Breadcrumbs';
import { makeStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { SettingsModal } from '../..//features/settings-modal';
import useAppState from 'state/AppStateProvider';

const drawerWidth = 450;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContainer: {
    overflow: 'auto'
  },
  main: {
    flexGrow: 1
  },
  content: {}
}));

export function Layout({ title, children, renderToolbar }) {
  const { handleOpenSettingsModal } = useAppState();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <SettingsModal />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar classes={classes.toolbar}>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Button color="inherit" onClick={handleOpenSettingsModal}>
            <SettingsIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        <Toolbar />
        <div className={classes.content}>{children}</div>
        {/* <Breadcrumbs /> */}
      </main>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="right"
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          {renderToolbar && renderToolbar()}
        </div>
      </Drawer>
    </div>
  );
}
