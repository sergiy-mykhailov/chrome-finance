import './index.css';
// import { getPairs } from './api/polygon';
import { getPairs } from './api/alpaca';

const onClick = async () => {
  try {
    const result = await getPairs();
    console.log('Result:', result);

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

const main = () => {
  const button = document.querySelector('.button');
  button.addEventListener('click', onClick);
};

main();
