const express = require('express');
const app = express();

app.use(express.static('./dist/brorfelde'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/brorfelde/'}
  );
});

app.listen(process.env.PORT || 8080);

