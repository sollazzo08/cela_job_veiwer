const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const passport = require('passport');

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('tiny'));
app.use(compression());
app.use(helmet());
app.use(express.json());
// To get around cors origin error
app.use(cors());


app.get('/', (req, res) => {
  res.json({
    message: 'hello',
  });
});
// Passport
app.use(passport.initialize());
require('./lib/passport')(passport);

app.use('/api/v1', api);

// Custom Middlewars
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);


module.exports = app;
