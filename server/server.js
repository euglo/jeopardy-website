const express = require('express');
const { getClues } = require('./utils/clues')
const app = express();

app.get('/api/clues', (req, res) => {
    getClues((error, data) => {
        if (error) {
            return res.json({error: error.message});
        }
        res.json(data);

    })
})
const port = 5000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

//npm i install nodemon --save-dev