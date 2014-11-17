var app = require('./app');
app.set('host', process.env.HOST || 'localhost');
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  console.log('Server started: http://%s:%s', app.get('host'), app.get('port'));
});
