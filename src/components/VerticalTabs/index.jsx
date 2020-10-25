import React, { useEffect, useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import { tabs } from '../../config/tabs';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

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
    flexDirection: 'row'
  },
  tabs: {
    borderRight: '1px solid #d0d0d0'
  },
  content: {
    padding: '1rem',
    width: 'calc(100% - 590px)',
    minWidth: 800,
    maxWidth: '100%',
    minHeight: '100vh',
    height: '100vh'
  },
  link: {
    textDecoration: 'unset',
    color: 'unset'
  }
}));

function VerticalTabs(props) {
  const { pathname } = useLocation();
  const [tabIndex, setTabIndex] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    const cleanedPathname = pathname.replace('/', '');
    let index;
    switch (cleanedPathname) {
      case 'heat-map':
        index = 0;
        break;
      case 'stats':
        index = 1;
        break;
      case 'mobility':
        index = 2;
        break;
      case 'apple-mobility':
        index = 3;
        break;
      default:
        index = 0;
        break;
    }
    setTabIndex(index);
  }, [pathname]);

  const handleRoute = (tab) => {
    const { label } = tab;
    switch (label) {
      case 'Stats':
        return '/stats';
      case 'Mobility':
        return '/mobility';
      case 'Heat Map':
        return '/heat-map';
      case 'Apple Mobility':
        return '/apple-mobility';
      default:
        return '/';
    }
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={tabIndex}
        aria-label="Vertical tabs"
        className={classes.tabs}
      >
        {tabs.map((tab, index) => (
          <Link to={handleRoute(tab)} className={classes.link} key={tab.label}>
            <Tab
              key={tab.label}
              label={tab.label}
              value={tab.route}
              {...a11yProps(index)}
            />
          </Link>
        ))}
      </Tabs>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

export { VerticalTabs };
