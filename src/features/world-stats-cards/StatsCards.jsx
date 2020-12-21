import React from 'react';
import { useAsync } from 'react-use';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { StatsDisplayCard } from '../../components/StatsDisplayCard';

function StatsCards() {
  const { value, loading, error } = useAsync(async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/covid19/globalSummary`
    );
    const result = await response.json();
    return result;
  });

  if (loading || !value) {
    return <LoadingSpinner />;
  }

  const { TotalConfirmed, TotalDeaths, TotalRecovered } = value;

  return (
    <>
      <StatsDisplayCard title={'TOTAL CONFIRMED'} value={TotalConfirmed} />
      <StatsDisplayCard title={'TOTAL DEATHS'} value={TotalDeaths} />
      <StatsDisplayCard title={'TOTAL RECOVERED'} value={TotalRecovered} />
    </>
  );
}

export { StatsCards };
