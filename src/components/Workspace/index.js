import React from 'react';
import { 
    useParams
} from 'react-router-dom';
import { CountryStatsGraph } from '../../features/country-stats-graph';
import { WorldChorolpethMap } from '../../features/world-choropleth-map/index.jsx';
import { MobilityGraph } from '../../features/mobility-graph';

function Workspace() {
    const { workspace } = useParams();
    console.log(workspace)

    const renderWorkspace = () => {
        switch(workspace) {
            case 'stats':
                return <CountryStatsGraph/>
            case 'heat-map':
                return <WorldChorolpethMap />
            case 'mobility':
                return <MobilityGraph />
        }
    }

    return (
        <>
            { renderWorkspace() }
        </>
    )
}

export { Workspace };