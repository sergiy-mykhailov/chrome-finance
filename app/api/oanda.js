import axios from 'axios';

const baseURL = process.env.OANDA_API_BASE_URL;
const apiKey = process.env.OANDA_API_KEY;

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

export const getCandles = async () => {
  const base = 'USD';
  const quote = 'EUR';
  const startTime= '2023-11-29T00:00:00.000Z';
  const endTime= '2023-11-30T00:00:00.000Z';
  const fields = 'all';

  const response = await axios.get('v2/rates/candles.json', {
    baseURL,
    headers,
    params: {
      api_key: apiKey,
      base,
      quote,
      start_time: startTime,
      end_time: endTime,
      fields,
    },
  });

  console.log('Response:', response);

  if (response.status === 200) {
    return response.data.quotes;
  }

  return [];
};

export const getAggregated = async () => {
  const base = 'USD';
  const quote = 'EUR';
  const startTime= '2023-11-29T00:00:00.000Z';
  const endTime= '2023-11-30T00:00:00.000Z';
  const fields = 'all';

  const response = await axios.get('v2/rates/aggregated.json', {
    baseURL,
    headers,
    params: {
      api_key: apiKey,
      base,
      quote,
      start_time: startTime,
      end_time: endTime,
      fields,
    },
  });

  console.log('Response:', response);

  if (response.status === 200) {
    return response.data.quotes;
  }

  return [];
};

export const getPairs = () => {
  return getAggregated();
};
