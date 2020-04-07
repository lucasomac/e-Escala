const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const PORT = process.env.SERVER_PORT;
const routes = require('./routes');

app.use(routes);
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});