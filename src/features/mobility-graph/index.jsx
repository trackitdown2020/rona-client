import React, { useState } from 'react';
import { useFetchMobility } from '../../lib/hooks/mobilityAPI';
import { Chip } from '../../components/Chip';
import { LineGraph } from '../../components/LineGraph';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { LoadingSpinner } from '../../components/LoadingSpinner';

const typeSelection = [
    {
        id: 'parks',
        label: 'Parks'
    },
    {
        id: 'residential',
        label: 'Residential' 
    },
    {
        id: 'retail-and-recreation',
        label: 'Retail and Recreation'
    },
    {
        id: 'transit-stations',
        label: 'Transit Stations'
    },
    {
        id: 'workplaces',
        label: 'Workplaces'
    },
    {
        id: 'grocery-and-pharmacy',
        label: 'Grocery and Pharmacy'
    },
    {
        id: 'all',
        label: 'All'
    }
];

const useStyles = makeStyles((theme) => ({
  chipsContainer: {
      marginTop: 24,
      width: '60%',
  }
}));


function MobilityGraph() {
    const classes = useStyles();
    const [types, setTypes] = useState([]);
    
    const handleOnClick = ({ id, selected }) => {
        if(id === 'all') {
            setTypes(['all']);
            return;
        } else {
            let newTypesList;
            if(types.includes('all')) {
                newTypesList = [];
            } else {
                newTypesList= [...types];
            }
            if(selected) {
                if(!newTypesList.includes(id)) {
                    newTypesList.push(id);
                }
            } else {
                let index = newTypesList.findIndex(value => value === id);
                console.log(index);
                newTypesList.splice(index, 1);
            }
            setTypes(newTypesList);
        }
    }

    const { response, error, loading } = useFetchMobility('US', '', types);

    console.log(typeSelection, types);
    return (
        <>
            <LineGraph
                width={'1300px'}
                height={'500px'}
                data={response}
                hAxis={{title: 'Date', gridlines: { count: 5 }}}
                vAxis={{title: 'Percentage', format: 'percent', baseline: 0, baselineColor: 'black'}}
            />
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                className={classes.chipsContainer}
            >
                {
                    typeSelection.map(({id, label}) => 
                        (<Chip id={id}
                            label={label}
                            clicked={types.includes(id)}
                            onClick={handleOnClick}
                        />))
                }
            </Grid>
           
        </>
    )


}

export { MobilityGraph };