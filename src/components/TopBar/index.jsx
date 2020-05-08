import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {useStyles} from './styles.js'

function TopBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography className={classes.title} variant="h6" noWrap>
                        City, Province, Country
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export { TopBar };