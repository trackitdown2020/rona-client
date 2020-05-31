import React, { useEffect, useState } from 'react';
import { scaleLinear } from 'd3-scale';
import { 
    ComposableMap,
    Geographies,
    Geography,
    Sphere,
    Graticule
} from 'react-simple-maps';
import iso from 'iso-3166-1';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { useAsync } from 'react-use';

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

function WorldChorolpethMap() {
    const { value, error, loading } = useAsync(async () => {
        const response = await fetch('http://localhost:8080/covid19/summary')
        const result = await response.json();
        return result;
    });

    if(loading || !value) {
        return <LoadingSpinner/>
    }

    const { Global } = value;
    const { TotalConfirmed } = Global;
    const colorScale = scaleLinear()
        .domain([0, 1])
        .range(["#ffedea", "#ff5233"]);

  return (
    <ComposableMap
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 147
      }}
    >
      <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
      <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
      {value.Countries && value.Countries.length > 0 && (
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
                const d = value.Countries.find((s) => {
                    const countryData = iso.whereAlpha2(s.CountryCode);
                    return countryData && countryData.alpha3 === geo.properties.ISO_A3;
                });
                if(d) {
                    const colorFill = colorScale(d.TotalConfirmed/TotalConfirmed);
                    return (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={d ?  colorFill : "#F5F4F6"}
                        />
                  );
                }
              
            })
          }
        </Geographies>
      )}
    </ComposableMap>
  );
}

export { WorldChorolpethMap };
