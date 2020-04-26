import { init } from '@rematch/core';
import * as models from '../models';
import createLoadingPlugin from '@rematch/loading';

// see options API below
const options = {
  asNumber: true,
  blacklist: ['count/addOne'],
};

const loading = createLoadingPlugin(options);

const store = init({
  models,
  plugins: [loading],
});

export default store;
