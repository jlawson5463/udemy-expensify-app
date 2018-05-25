// import moment from 'moment'; don't do this. Circular reference hell - will run down all memory until it crashes
const moment = require.requireActual('moment'); // this is how to mock a library

export default (timestamp = 0) => {
    return moment(timestamp);
};