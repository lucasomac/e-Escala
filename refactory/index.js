const dotenv = require('dotenv');

dotenv.config();
const express = require('express');
const app = express();
const PORT = process.env.SERVER_PORT;
const Ministro = require('./models/Ministro');

app.get('/', (req, res) => {
    res.send({ message: 'Endpoint Working - APU Sucefull!' });
});
// new: route to users, that runs readAll()
app.get('/ministros', Ministro.readAll);

app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});