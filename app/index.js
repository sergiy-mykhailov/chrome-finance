import './index.css';
import { forexAggregates } from './api/polygon';

const main = async () => {
  try {
    const result = await forexAggregates();

    const container = document.querySelector('.container');
    if (container) {

      result.forEach(((item) => {
        container.append(JSON.stringify(item));
      }));
    }

  } catch (e) {
    console.error('Error:', e);
  }
};

main();
