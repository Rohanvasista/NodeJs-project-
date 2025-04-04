const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Docker + GitHub + DockerHub!');
});

// Bind to 0.0.0.0 so Docker can expose it outside the container
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}`);
});

