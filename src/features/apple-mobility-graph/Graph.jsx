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

function Graph({ country, subregion, classes }) {
  const { value, loading, error } = useAsync(async () => {
    if (country && subregion) {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/covid19/mobility/apple?country=${country}&subregion=${subregion}`
      );
      const result = await response.json();
      return result;
    }
  }, [country, subregion]);

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
    <LineChart width={1300} height={600} data={data}>
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
      <Line
        type="monotone"
        dataKey="driving"
        stroke="#172c9a"
        name={
          <>
            <i className={classes.icon + ' fas fa-car'} />
            Driving
          </>
        }
        strokeWidth="1.2"
        dot={false}
      />
      <Line
        type="monotone"
        dataKey="transit"
        stroke="#ffda58"
        name={
          <>
            <i className={classes.icon + ' fas fa-subway'} />
            Transit
          </>
        }
        strokeWidth="1.2"
        dot={false}
      />
      <Line
        type="monotone"
        dataKey="walking"
        stroke="#3ac690"
        name={
          <>
            <i className={classes.icon + ' fas fa-walking'} />
            Walking
          </>
        }
        strokeWidth="1.2"
        dot={false}
      />
    </LineChart>
  );
}

export { Graph };
