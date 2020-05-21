import React, { useState } from 'react';
import FlipMove from 'react-flip-move';
import { useInterval } from 'react-use';
import List from'@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { useStyles } from './styles';
import clsx from 'clsx';

function AnimatedList(props) {
    const { data, interval, ItemComponent } = props;
    const [list, setList] = useState(data);
    const classes = useStyles();

    useInterval(() => {
        rotate();
    }, interval);

    const rotate = () => {
        const updatedList = [...list];
        updatedList.unshift(updatedList.pop());
        setList(updatedList);
    }

    return (
        <FlipMove
            staggerDurationBy="50"
            duration={5000}
            enterAnimation="accordionVertical"
            leaveAnimation="accordionVertical"
        >
            {
                list.map((item, index, list) => {
                    return (
                        <>
                            <ItemComponent {...item}/>
                        </>
                    );
                })
            }
        </FlipMove>
    );
}

export { AnimatedList };