import React, { useEffect, useState } from 'react';
import { 
    ComposableMap,
    Geographies,
    Sphere,
    Graticule
} from 'react-simple-maps';

function ChoroplethMap(props) {
    const { 
        geoUrl,
        data,
        geoMapFn
    } = props

    return (
        <ComposableMap
            projectionConfig={{
                rotate: [-10, 0, 0],
                scale: 147
            }}
        >
            <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
            <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
            {data.length > 0 && (
                <Geographies geography={geoUrl}>
                    {({ geographies }) => geographies.map(geoMapFn)}
                </Geographies>
            )}
        </ComposableMap>
    )
}

export { ChoroplethMap }