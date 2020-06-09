import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import { TabPanel } from './TabPanel';

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: '#fff',
    justifyContent: 'stretch',
    flexDirection: 'row',
  },
  tabs: {
    borderRight: '1px solid #d0d0d0',
  },
  content: {
    padding: '1rem',
  },
}));

function VerticalTabs({ tabs }) {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {tabs.map((tab, index) => (
          <Tab key={tab.label} label={tab.label} {...a11yProps(index)} />
        ))}
      </Tabs>
      {tabs.map((tab, index) => (
        <TabPanel
          className={classes.content}
          key={tab.label}
          value={value}
          index={index}
        >
          {tab.content}
        </TabPanel>
      ))}
    </div>
  );
}

export { VerticalTabs };
