// Express server on port 3000
import express from 'express';
const app = express();
const port = 3000;
app.get('/', (_req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Return the current time
app.get('/time', (req, res) => {
  res.send(new Date());
});
