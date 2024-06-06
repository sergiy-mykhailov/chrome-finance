import axios from 'axios';

const baseURL = process.env.DATABENTO_API_BASE_URL;
const apiKey = process.env.DATABENTO_API_KEY;

const headers = {};

export const getDatasets = async () => {
  /*
  curl -G 'https://hist.databento.com/v0/metadata.list_datasets' \
   -u <api-key>:
  */

  const response = await axios.get( 'metadata.list_datasets', {
    baseURL,
    headers,
    auth: {
      username: apiKey,
      // password: '',
    },
  });

  console.log('Response:', response);

  if (response.status === 200) {
    return response.data;
  }

  return [];
};

export const getCandles = async () => {
  const dataset = ''; // "DBEQ.BASIC","GLBX.MDP3","IFEU.IMPACT","NDEX.IMPACT","OPRA.PILLAR","XNAS.ITCH"
  const schema = 'ohlcv-1m'; // ["mbo","mbp-1","mbp-10","tbbo","trades","ohlcv-1s","ohlcv-1m","ohlcv-1h","ohlcv-1d","definition","statistics"]

/*
curl -X POST 'https://hist.databento.com/v0/timeseries.get_range' \
 -u <api-key>: \
 -d dataset=GLBX.MDP3 \
 -d symbols=ESM2 \
 -d schema=ohlcv-1m \
 -d start='2024-06-03T00:00' \
 -d end='2024-06-03T10:10' \
 -d encoding=json \
 -d pretty_px=true \
 -d pretty_ts=true \
 -d map_symbols=true \
 -d limit=1
*/

  const response = await axios.get( 'timeseries.get_range', {
    baseURL,
    headers,
    params: {},
    auth: {
      username: apiKey,
      // password: '',
    },
  });

  console.log('Response:', response);

  if (response.status === 200) {
    return response.data.candles;
  }

  return [];
};

export const getPairs = () => {
  return getDatasets();
};
