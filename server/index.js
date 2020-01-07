const express = require('express'),
      app = express();

app.use(express.json());

const port = 4040;
app.listen(port, () => console.log(`Exercise Gamified at ${port}`));