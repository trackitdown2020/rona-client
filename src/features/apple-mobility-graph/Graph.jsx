import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
} from 'react-vis';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import moment from 'moment';
import { useAsync } from 'react-use';

function Graph({ country, subregion }) {
  // const { value, loading, error } = useAsync(async () => {
  //     if(country && subregion) {
  //         const response = await fetch(
  //             `http://localhost:8080/covid19/mobility/apple?country=${country}&subregion=${subregion}`
  //         );
  //         const result = await response.json();
  //         return result;
  //     }
  // }, [country, subregion]);
  const { value, loading, error } = useAsync(async () => {
    const response = await fetch(
      'http://localhost:8080/covid19/mobility/apple?country=USA&subregion=California'
    );
    const result = await response.json();
    return result;
  }, []);

  if (loading || !value) {
    return <LoadingSpinner />;
  }

  const { driving, transit, walking } = value;
  return (
    <XYPlot width={1200} height={700}>
      <HorizontalGridLines />
      <VerticalGridLines
        style={{
          stroke: '#ececec'
        }}
      />
      <XAxis
        attr="x"
        attrAxis="y"
        orientation="bottom"
        tickTotal={10}
        tickFormat={(d) => moment(d).format('MMMM YYYY')}
      />
      <YAxis tickFormat={(v) => `${v} %`} />
      <ChartLabel
        text="Date"
        className="alt-x-label"
        includeMargin={false}
        xPercent={0.025}
        yPercent={1.01}
      />
      <ChartLabel
        text="Percentage Change since 01/13"
        className="alt-y-label"
        includeMargin={false}
        xPercent={0.06}
        yPercent={0.06}
        style={{
          transform: 'rotate(-90)',
          textAnchor: 'end'
        }}
      />
      <LineSeries
        className="driving-series"
        data={driving}
        style={{
          fillOpacity: 0
        }}
      />
      <LineSeries
        className="transit-series"
        data={transit}
        style={{
          fillOpacity: 0
        }}
      />
      <LineSeries
        className="walking-series"
        data={walking}
        style={{
          fillOpacity: 0
        }}
      />
    </XYPlot>
  );
}

export { Graph };
