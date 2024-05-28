import { restClient } from '@polygon.io/client-js';

const polygonRestClient = restClient(process.env.POLY_API_KEY);

export const forexAggregates = async () => {
  const response = await polygonRestClient.forex.aggregates(
    'C:EURUSD',
    1,
    'day',
    '2023-01-01',
    '2023-04-14',
  );
  console.log('Response:', response);

  if (response.status === 'OK') {
    return response.results;
  }

  return [];
};
