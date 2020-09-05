import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import { TabPanel } from './TabPanel';
import { tabs } from '../../config/tabs';
import { useParams, useLocation } from 'react-router-dom';

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: '#fff',
    justifyContent: 'stretch',
    flexDirection: 'row'
  },
  tabs: {
    borderRight: '1px solid #d0d0d0'
  },
  content: {
    padding: '1rem',
    minHeight: '100vh',
    width: 'calc(100% - 590px)',
    minWidth: 800
  }
}));

function VerticalTabs() {
  const { pathname } = useLocation();
  const cleanedPathname = pathname.replace('/', '');
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    window.location.href = newValue;
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={cleanedPathname}
        onChange={handleChange}
        aria-label="Vertical tabs"
        className={classes.tabs}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={tab.label}
            label={tab.label}
            value={tab.route}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
    </div>
  );
}

export { VerticalTabs };
