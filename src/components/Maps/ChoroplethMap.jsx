import React, { useEffect, useState } from 'react';
import { ComposableMap, Geographies } from 'react-simple-maps';

function ChoroplethMap(props) {
  const { geoUrl, data, geoMapFn } = props;

  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 150
      }}
      width={1000}
    >
      {data.length > 0 && (
        <Geographies geography={geoUrl}>
          {({ geographies }) => geographies.map(geoMapFn)}
        </Geographies>
      )}
    </ComposableMap>
  );
}

export { ChoroplethMap };
