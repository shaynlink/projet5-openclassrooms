const http = require('http');
const express = require('express');
const cors = require('cors');

const rents = require('./rents.json');

const app = express();

app.use(cors());

app.get('/rents', (req, res) => {
    const limit = req.query.limit;

    if (!limit) {
        return res.json(rents);
    } else {
        const shuffled = rents.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, limit);
        return res.json(selected);
    }
});

app.get('/rents/:id', (req, res) => {
    const id = req.params.id;
    const rent = rents.find(rent => rent.id === id);

    if (!rent) {
        return res.status(404).json({ error: 'Rent not found' });
    } else {
        return res.json(rent);
    }
});

http.createServer(app)
    .listen(3030, () => console.log('🚀 Server started at port :3030'))