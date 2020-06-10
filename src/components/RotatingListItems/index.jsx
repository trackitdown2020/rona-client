import React, { useState } from 'react';
import List from'@material-ui/core/List';
import { useStyles } from './styles';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useInterval } from 'react-use';

function RotatingListItems(props) {
    const classes = useStyles();
    const { ItemComponent, items, interval=5000  } = props;
    const [list, setList] = useState(items);

    const rotateList = () => {
        const listCopy = [...list];
        const firstItem = listCopy.shift();
        listCopy.push(firstItem);
        setList(listCopy);
    }

    useInterval(rotateList, interval);

    return (
        <List className={clsx(classes.root, classes.tweetList)}>
            {
                list.map((item, index, list) => {
                    return (
                        <>
                            <ItemComponent {...item}/>
                            { index !== list.length - 1 ? <Divider variant="middle" component="li" /> : null}
                        </>
                    );
                })
            }
        </List>
    )
}

RotatingListItems.propTypes = {
    items: PropTypes.array
}

export { RotatingListItems }