import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import Button from '@material-ui/core/Button';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import { SettingsModal } from '../../features/settings-modal';
import useAppState from 'state/AppStateProvider';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import { VerticalTabs } from '../VerticalTabs';
import { RightToolbar } from '../RightToolbar';

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
  const {
    setSelectedCountry,
    handleOpenSettingsModal,
    handleLiveStream,
    openLiveStream
  } = useAppState();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <SettingsModal />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {title === 'World' ? (
            <Typography variant="h5" className={classes.title}>
              World
            </Typography>
          ) : (
            <>
              <ArrowBackIosOutlinedIcon
                onClick={() => setSelectedCountry({})}
              />
              <Typography variant="h5" className={classes.title}>
                {title}
              </Typography>
            </>
          )}
          <Button color="inherit" onClick={handleOpenSettingsModal}>
            <SettingsIcon />
          </Button>
          <Button color="inherit" onClick={handleLiveStream}>
            <ViewStreamIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        <Toolbar />
        <div className={classes.content}>
          <VerticalTabs>{children}</VerticalTabs>
        </div>
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="right"
        open={openLiveStream}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <RightToolbar />
        </div>
      </Drawer>
    </div>
  );
}
