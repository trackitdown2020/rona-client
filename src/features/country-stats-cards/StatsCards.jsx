import React from 'react';
import { useAsync } from 'react-use';
import { StatsDisplayCard } from '../../components/StatsDisplayCard';
import { LoadingSpinner } from '../../components/LoadingSpinner';

function StatsCards({ alpha3Code }) {
  console.log('alpha3Code', alpha3Code);
  const { value, loading, error } = useAsync(async () => {
    // const isoCode = countries.alpha2ToAlpha3(code);
    const response = await fetch(
      `http://localhost:8080/covid19/countryReport?iso=${alpha3Code}`
    );
    const result = await response.json();
    return result;
  });

  if (loading || !value) {
    return <LoadingSpinner />;
  }

  const { confirmed, recovered, deaths } = value;
  return (
    <>
      <StatsDisplayCard title={'TOTAL CONFIRMED'} value={confirmed} />
      <StatsDisplayCard title={'TOTAL DEATHS'} value={deaths} />
      <StatsDisplayCard title={'TOTAL RECOVERED'} value={recovered} />
    </>
  );
}

export { StatsCards };
