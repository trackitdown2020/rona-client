import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { VerticalTabs } from 'components/VerticalTabs';
import { makeStyles } from '@material-ui/core/styles';
import Chart1 from '../Chart1';

const drawerWidth = 450;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  main: {
    flexGrow: 1,
  },
  content: {},
}));

export function View({ classes1 = {}, title, children, renderToolbar }) {
  const classes = useStyles();

  const tabs = [
    { label: 'Maps', content: <h1>Test</h1> },
    { label: 'Heat Maps', content: <h1>Heat Map</h1> },
    { label: 'Chart 1', content: <Chart1 /> },
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        <Toolbar />
        <div className={classes.content}>
          {/* TODO use a route and make this into a different component */}
          <VerticalTabs tabs={tabs} />
        </div>
      </main>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
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
