import axios from 'axios';

const baseURL = process.env.FINAGE_API_BASE_URL;
const apiKey = process.env.FINAGE_API_KEY;

const headers = {
  'Content-Type': 'application/json',
};

export const getPairs = async () => {
  const symbol = 'EURUSD';
  const multiply = '1';
  const time = 'minute'; // minute, hour, day, week, month, quarter, year
  const from = '2024-06-03';
  const to = '2024-06-03';
  // const limit = 20; // Maximum allowed limit is 20 for free API subscriptions.

  const apiUrl = `agg/forex/${symbol}/${multiply}/${time}/${from}/${to}`;

  const response = await axios.get(apiUrl, {
    baseURL,
    headers,
    params: {
      apikey: apiKey,
      // limit,
    },
  });

  console.log('Response:', response);

  if (response.status !== 200 || !response.data) {
    return [];
  }

  return response.data.results;
};
