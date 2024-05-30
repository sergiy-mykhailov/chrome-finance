const baseUrl = process.env.APCA_API_BASE_URL;

export const getPairs = async () => {
  const apiUrl = 'forex/rates';
  const queryParams = 'currency_pairs=USDEUR&timeframe=5S&start=2024-05-29T08%3A00%3A00Z&end=2024-05-29T09%3A00%3A00Z&limit=1000&sort=asc';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'APCA-API-KEY-ID': process.env.APCA_API_KEY_ID,
      'APCA-API-SECRET-KEY': process.env.APCA_API_SECRET_KEY,
    },
  };

  const response = await fetch(`${baseUrl}/${apiUrl}?${queryParams}`, options);

  return response;
};
