import React, { useState } from 'react';
import List from '@material-ui/core/List';
import { useStyles } from './styles';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useInterval } from 'react-use';
import { useTransition, animated as a } from 'react-spring';
import { mdiFormatLetterCaseLower, mdiFormatListCheckbox } from '@mdi/js';

function RotatingListItems(props) {
  const classes = useStyles();
  const { ItemComponent, items, interval = 5000, isRunning } = props;
  const [list, setList] = useState(items);
  const [rotation, setRotation] = useState(false);
  const rotateList = () => {
    const listCopy = [...list];
    const firstItem = listCopy.shift();
    setList(listCopy);
    setTimeout(() => {
      listCopy.push(firstItem);
      setList(listCopy);
    }, 780);
  };

  useInterval(rotateList, isRunning ? 5000 : null);

  const determineKey = (item) => {
    if (item.id) {
      return item.id;
    } else if (item.ups) {
      return item.ups;
    } else if (item.publishedAt) {
      return item.publishedAt;
    }
  };

  const transitions = useTransition(list, (item) => determineKey(item), {
    from: { transform: 'translate3d(0, 40px,0)', opacity: 0.5 },
    enter: { transform: 'translate3d(0, 0px,0)', opacity: 1 },
    leave: { opacity: 0 },
    unique: true
  });

  return (
    <List
      className={clsx(
        classes.root,
        classes.tweetList,
        rotation && classes.hide
      )}
    >
      {transitions.map(({ item, props, key }, index, list) => {
        return (
          <a.div key={key} style={props}>
            <ItemComponent {...item} />
            {index !== list.length - 1 ? (
              <Divider variant="middle" component="li" />
            ) : null}
          </a.div>
        );
      })}
    </List>
  );
}

RotatingListItems.propTypes = {
  items: PropTypes.array
};

export { RotatingListItems };
