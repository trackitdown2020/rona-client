import React, { useState } from 'react';
import { scaleLinear } from 'd3-scale';
import iso from 'iso-3166-1';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { useAsync } from 'react-use';
import { ChoroplethMap } from '../../components/Maps/ChoroplethMap';
import { Geography } from 'react-simple-maps';
import Tooltip from '@material-ui/core/Tooltip';
import { ChloroplethTooltip } from '../../components/Tooltip/ChloroplethTooltip';
import ReactTooltip from 'react-tooltip';

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

function WorldChorolpethMap() {
    const [content, setTooltipContent] = useState('');
    const { value, error, loading } = useAsync(async () => {
        const response = await fetch('http://localhost:8080/covid19/summary')
        const result = await response.json();
        return result;
    });

    if(loading || !value) {
        return <LoadingSpinner/>
    }

    const { Global, Countries } = value;
    const { TotalConfirmed } = Global;

    const colorScale = scaleLinear()
        .domain([0, 25])
        .range(["#ffedea", "#ff5233"]);

    const geoMapFn = (geo) => {
        const country = Countries.find((s) => {
            const countryCodes = iso.whereAlpha2(s.CountryCode);
            const countryIso3 = countryCodes && countryCodes.alpha3;
            return countryIso3 === geo.properties.ISO_A3;
        });
        if(country) {
            const { 
                TotalConfirmed:CountryTotalConfirmed,
                Country
            } = country;
            const colorFill = colorScale(CountryTotalConfirmed/TotalConfirmed * 100);
            return (
                <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={country ? colorFill : "#F5F4F6"}
                    stroke={"#D3D3D3"}
                    onMouseEnter={() => {
                        setTooltipContent(`${Country} - ${CountryTotalConfirmed} cases`);
                    }}
                    onMouseLeave={() => {
                        setTooltipContent('');
                    }}
                />
            );
        }
    }
    console.log(content)

    return (
        <>
            <ReactTooltip>{content}</ReactTooltip>
            <ChoroplethMap
                geoUrl={geoUrl}
                data={Countries}
                geoMapFn={geoMapFn}
            />
        </>
    );
}

export { WorldChorolpethMap };
