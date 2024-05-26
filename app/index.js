import { restClient } from '@polygon.io/client-js';
import './index.css'

const rest = restClient(process.env.POLY_API_KEY);

rest.forex.aggregates("C:EURUSD", 1, "day", "2023-01-01", "2023-04-14").then((data) => {
  console.log('Response:', data);

  if (data.status === 'OK') {
    const container = document.querySelector('.container');
    if (container) {

      data.results.forEach(((item) => {
        container.append(JSON.stringify(item))
      }))
    }
  }

}).catch(e => {
  console.error('An error happened:', e);
});


