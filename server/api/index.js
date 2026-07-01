const app = require('../src/app');
const connectDB = require('../src/database/connection');

connectDB();

module.exports = app;