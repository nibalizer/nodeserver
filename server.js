const express = require('express');
const app = express();

app.get('/', (req, res) => {
        res.send('A crocodile approaches!');
});

app.listen(3000, () => console.log('Croc app listening on port 3000!'))
