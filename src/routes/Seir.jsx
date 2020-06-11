import React from 'react';
import { Layout } from '../components/Layout';
import { SEIRGraph } from '../features/seir-graph'
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     container: {
//         width: 450,
//     },
// }));

function Seir() {
    // const classes = useStyles();

    const renderContent = () => (
        <>
            <h1>SEIR GRAPH</h1>
            <SEIRGraph />
        </>
    );

    return (
        <Layout
            title={'SEIR Model COVID-19'}
        >
            {renderContent()}
        </Layout>
    )
}

export { Seir };