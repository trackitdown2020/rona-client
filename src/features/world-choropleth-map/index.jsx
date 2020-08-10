import React from 'react';
import { Container } from '@material-ui/core';
import { scaleLinear } from 'd3-scale';
import iso from 'iso-3166-1';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { useAsync } from 'react-use';
import { ChoroplethMap } from '../../components/Maps/ChoroplethMap';
import { Geography } from 'react-simple-maps';
import Tooltip from '@material-ui/core/Tooltip';
import { ChloroplethTooltip } from '../../components/Tooltip/ChloroplethTooltip';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    width: 1000
  }
}));

const geoUrl =
  'https://raw.githubusercontent.com/malan88/topojson/master/world-countries-sans-antarctica.json';

function WorldChorolpethMap() {
  const classes = useStyles();
  const { value, error, loading } = useAsync(async () => {
    const response = await fetch('http://localhost:8080/covid19/summary');
    const result = await response.json();
    return result;
  });

  if (loading || !value) {
    return <LoadingSpinner />;
  }

  const { Global, Countries } = value;
  const { TotalConfirmed } = Global;

  const colorScale = scaleLinear()
    .domain([0, 25])
    .range(['#ffedea', '#ff5233']);

  const geoMapFn = (geo) => {
    const country = Countries.find((s) => {
      const countryCodes = iso.whereAlpha2(s.CountryCode);
      const countryIso3 = countryCodes && countryCodes.alpha2;
      return countryIso3 === geo.properties['Alpha-2'];
    });

    if (country) {
      const { TotalConfirmed: CountryTotalConfirmed, Country } = country;
      const percentage = (CountryTotalConfirmed / TotalConfirmed) * 100;
      const colorFill = colorScale(percentage);
      return (
        <ChloroplethTooltip
          country={Country}
          totalConfirmed={CountryTotalConfirmed}
        >
          <Geography
            key={geo.rsmKey}
            geography={geo}
            fill={country ? colorFill : '#F5F4F6'}
            stroke={'#D3D3D3'}
          />
        </ChloroplethTooltip>
      );
    }
  };

  return (
    <div className={classes.container}>
      <ChoroplethMap geoUrl={geoUrl} data={Countries} geoMapFn={geoMapFn} />
    </div>
  );
}

export { WorldChorolpethMap };
