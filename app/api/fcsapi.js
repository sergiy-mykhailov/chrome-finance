import axios from 'axios';

const baseURL = process.env.FCSAPI_API_BASE_URL;
const apiKey = process.env.FCSAPI_API_KEY;

const headers = {
  'Content-Type': 'application/json',
};

export const getSymbolsList = async () => {
  const type = 'forex';

  const response = await axios.get('forex/list', {
    baseURL,
    headers,
    params: {
      access_key: apiKey,
      type,
    },
  });

  console.log('Response:', response);

  if (response.status === 200) {
    return response.data;
  }

  return [];
};

export const getPairs = async () => {
  // Symbol data example:
  // {id: '1', name: 'Euro US Dollar', decimal: '4', symbol: 'EUR/USD'}

  const period = '1m'; // 1m,5m,15m,30m,1h,2h,4h,5h,1d,1w,month
  const symbol = 'EUR/USD';
  const level = 1; // 1 -> 300 items, 2 -> 600, 3 -> 900

  const response = await axios.get('forex/history', {
    baseURL,
    headers,
    params: {
      access_key: apiKey,
      period,
      symbol,
      level,
    },
  });

  console.log('Response:', response);

  if (response.status !== 200 || !response.data) {
    return [];
  }

  if (response.data.code !== 200) {
    return [];
  }

  return Object.values(response.data.response);
};
