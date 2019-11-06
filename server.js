const express = require('express');
var cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/products/:id', function(req, res, next) {
  console.log('product');
  res.json({ msg: 'This is CORS-enabled for all origins!' });
});

app.post('/forgotPassword', (req, res) => {
  console.log('request', req.body);
  const { email } = req.body;
  if (!/\w+@\w+\.\w+/.test(email)) {
    res.status(400).json({ error: 'Invalid email' });
  } else if (/error/.test(email)) {
    res.status(400).json({ error: 'No matching account found' });
  }
  res.json({ status: 'ok' });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
