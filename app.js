const express = require('express');
const app = express();
const port = 8080;
app.get('/', (req, res) => res.send('Hello from Helix CI/CD via Harness!'));
app.listen(port, () => console.log(`App running on port ${port}`));
