const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.SERVER_PORT;
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});
