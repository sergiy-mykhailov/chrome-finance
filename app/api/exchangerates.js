import axios from 'axios';

const baseURL = process.env.ER_API_BASE_URL;
const apiKey = process.env.ER_API_KEY;

const headers = {
  'Content-Type': 'application/json',
};

export const getPairs = async () => {
  const base = 'USD';
  const symbols = 'EUR';
  const date= '2024-05-29';

  const response = await axios.get(`${date}`, {
    baseURL,
    headers,
    params: {
      access_key: apiKey,
      base,
      symbols,
    },
  });

  console.log('Response:', response);

  if (response.status === 200) {
    return response.data;
  }

  return [];
};
