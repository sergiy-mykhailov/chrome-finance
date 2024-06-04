import './index.css';
// import { getPairs } from './api/polygon';
// import { getPairs } from './api/alpaca';
// import { getPairs } from './api/oanda';
import { getPairs } from './api/oandaV20';
// import { getPairs } from './api/exchangerates';
// import { getPairs } from './api/fcsapi';
// import { getPairs } from './api/ibkr';
// import { getPairs } from './api/finage';

const onClick = async () => {
  try {
    const result = await getPairs();
    console.log('Result:', result);

    if (!result) {
      return;
    }

    const container = document.querySelector('.container');
    if (!container) {
      return;
    }

    container.append(JSON.stringify(result));

  } catch (e) {
    console.error('Error:', e);
  }
};

const main = () => {
  const button = document.querySelector('.button');
  button.addEventListener('click', onClick);
};

main();
