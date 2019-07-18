import { ChadwickConfig, ChadwickToMongo } from 'chadwick-to-mongo/dist';

import ChadConfig from 'chadwick-to-mongo/dist'
import ChadToMongo from 'chadwick-to-mongo/dist'

const { ChadwickConfig } = ChadConfig;
const { ChadwickToMongo } = ChadToMongo;


// import lodash from 'lodash';
// const { throttle } = lodash;


const config = new ChadwickConfig('mongodb://localhost:27017', 'chadwick', 'chadwick');
const ctm = new ChadwickToMongo(config);
ctm.init();
