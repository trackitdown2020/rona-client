import React, { useState } from 'react';
import { useFetchMobility } from '../../lib/hooks/mobilityAPI';
import { Chip } from '../../components/Chip';
import { LineGraph } from '../../components/LineGraph';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
      width: '80%',
      margin: 24
  }
}));


function MobilityGraph() {
    const classes = useStyles();
    const [types, setTypes] = useState([]);
    
    const handleOnClick = ({ id, selected }) => {
        const newTypesList = [...types];
        if(selected) {
            newTypesList.push(id);
        } else {
            let index = newTypesList.findIndex(value => value === id);
            console.log(index);
            newTypesList.splice(index, 1);
        }
        setTypes(newTypesList);
    }

    const { response, error, loading } = useFetchMobility('US', '', types);

    // const hTicks = [];
    // if(response) {
    //     response.forEach((value, index) => { 
    //         if(index % 5 === 0 && value[0] !== 'Date') {
    //             hTicks.push(value[0]);
    //         }
    //     });
    // }
    // console.log(hTicks);


    return (
        <>
            <Typography variant="h3" gutterBottom>
                Mobility of the US
            </Typography>
            <LineGraph
                width={'1500px'}
                height={'500px'}
                data={response}
                hAxis={{title: 'Date', gridlines: { count: 5 }}}
                vAxis={{title: 'Percentage', format: 'percent', baseline: 0, baselineColor: 'black'}}
                title={'Mobility'}
                subtitle={'test'}
            />
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                className={classes.chipsContainer}
            >
                {
                    typeSelection.map(({id, label}) => (<Chip id={id} label={label} onClick={handleOnClick}/>))
                }
            </Grid>
           
        </>
    )


}

export { MobilityGraph };