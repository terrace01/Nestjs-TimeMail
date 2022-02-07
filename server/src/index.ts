import * as dev from '../src/common/config/env.dev';
import * as prop from '../src/common/config/env.dev';

const envconfigs = {

    development: dev,
    production: prop,
};
// const env = process.env.NODE_ENV || 'development';
const environment = envconfigs[process.env.NODE_ENV || 'development']

export {
    environment };
