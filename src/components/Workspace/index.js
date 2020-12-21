import React from 'react';
import {
    useParams
} from 'react-router-dom';
import { CountryStatsGraph } from '../../features/country-stats-graph';
import { WorldChorolpethMap } from '../../features/world-choropleth-map/index.jsx';
import { MobilityGraph } from '../../features/mobility-graph';
import { AppleMobilityGraph } from '../../features/apple-mobility-graph';
import { YoutubeNewsfeedStream } from '../../features/youtube-stream'

function Workspace() {
    const { workspace } = useParams();

    const renderWorkspace = () => {
        switch (workspace) {
            case 'stats':
                return <CountryStatsGraph />
            case 'heat-map':
                return <WorldChorolpethMap />
            case 'mobility':
                return <MobilityGraph />
            case 'apple-mobility':
                return <AppleMobilityGraph />
            case 'newsfeed-stream':
                return <YoutubeNewsfeedStream />
        }
    }

    return (
        <>
            { renderWorkspace()}
        </>
    )
}

export { Workspace };