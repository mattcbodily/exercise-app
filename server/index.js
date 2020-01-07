require('dotenv').config();
const express = require('express'),
      {SERVER_PORT} = process.env,
      app = express();

app.use(express.json());

const port = SERVER_PORT || 4040;
app.listen(port, () => console.log(`Exercise Gamified at ${port}`));