const compression = require('compression');
const express = require('express');
const app = express();

app.use(express.static('./dist/brorfelde'));

// Compress all HTTP responses
app.use(compression());

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/brorfelde/'}
  );
});

app.listen(process.env.PORT || 8080);

