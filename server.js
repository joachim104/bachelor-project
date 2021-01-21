const compression = require('compression');
const express = require('express');
const app = express();

// Compress all HTTP responses
app.use(compression());

app.use(express.static('./dist/brorfelde'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/brorfelde/'}
  );
});

app.listen(process.env.PORT || 8080);

