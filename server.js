const express = require('express');
const app = express();
const { join } = require('path');

const port = 1337;

app.use('/', express.static(join(__dirname,'public')));
console.log(join(__dirname, 'public'));
app.listen(port, () => console.log(
`Express server running at http://localhost:${port}`));