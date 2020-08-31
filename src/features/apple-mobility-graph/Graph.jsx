import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label
} from 'recharts';
import { GraphTooltip } from './GraphTooltip';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import { useAsync } from 'react-use';

function Graph({ country, subregion }) {
  const { value, loading, error } = useAsync(async () => {
    if (country && subregion) {
      const response = await fetch(
        `http://localhost:8080/covid19/mobility/apple?country=${country}&subregion=${subregion}`
      );
      const result = await response.json();
      return result;
    }
  }, [country, subregion]);
  // const { value, loading, error } = useAsync(async () => {
  //   const response = await fetch(
  //     'http://localhost:8080/covid19/mobility/apple?country=USA&subregion=California'
  //   );
  //   const result = await response.json();
  //   return result;
  // }, []);

  const formatXAxis = (d) => {
    return moment(d).format('MMMM YYYY');
  };

  const formatYAxis = (d) => {
    return `${d}%`;
  };

  if (loading || !value) {
    return <LoadingSpinner />;
  }

  const { data } = value;
  return (
    <LineChart width={1100} height={700} data={data}>
      <XAxis
        axisLine
        type={'number'}
        dataKey="date"
        tickFormatter={formatXAxis}
        domain={['auto', 'auto']}
      />
      <YAxis
        domain={[-100, 100]}
        tickFormatter={formatYAxis}
        label={{
          value: 'Percentage Change since 01/13',
          angle: -90,
          position: 'insideLeft'
        }}
      />
      <Tooltip content={<GraphTooltip />} />
      <Legend verticalAlign="top" align="center" />
      <Line type="monotone" dataKey="driving" stroke="#8884d8" />
      <Line type="monotone" dataKey="transit" stroke="#82ca9d" />
      <Line type="monotone" dataKey="walking" stroke="black" />
    </LineChart>
  );
}

export { Graph };
