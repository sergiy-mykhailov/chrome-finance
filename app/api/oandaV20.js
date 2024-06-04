import axios from 'axios';

const baseURL = process.env.OANDA_V20_PRACTICE_API_BASE_URL;
const apiKey = process.env.OANDA_V20_API_KEY;

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${apiKey}`,
};

export const getCandles = async () => {
  const instrument = 'EUR_USD';
  // const count = 288;
  const price = 'MBA'; // Can contain any combination of the characters “M” (midpoint candles) “B” (bid candles) and “A” (ask candles).
  const granularity = 'M5';
  const from= '2024-06-03T00:00:00.000000000Z';
  const to= '2024-06-03T20:00:00.000000000Z';

  const response = await axios.get( `instruments/${instrument}/candles`, {
    baseURL,
    headers,
    params: {
      // count,
      price,
      granularity,
      from,
      to,
    },
  });

  console.log('Response:', response);

  if (response.status === 200) {
    return response.data.candles;
  }

  return [];
};

export const getOrderBook = async () => {
  const instrument = 'EUR_USD';
  // const time= '2024-06-03T00:00:00.000000000Z';

  const response = await axios.get( `instruments/${instrument}/orderBook`, {
    baseURL,
    headers,
    params: {},
  });

  console.log('Response:', response);

  if (response.status === 200) {
    return response.data.orderBook;
  }

  return [];
};

export const getPairs = () => {
  return getCandles();
};
