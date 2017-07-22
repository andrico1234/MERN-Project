require('./config/config');

const bodyParser = require('body-parser');
const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const port = process.env.PORT;

require('./app_api/models/db');

const index = require('./app_server/routes/index');
const users = require('./app_server/routes/users');
const {router} = require('./app_api/routes/locations');

let app = express();

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api', router);
app.use('/users', users);

app.use((req, res, next) => {

  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {

  console.log(`listening on ${port}`);
});

module.exports = {
  app
};
