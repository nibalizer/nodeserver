const express = require('express');
const app = express();

app.get('/', (req, res) => {
        var resp = 'A crocodile approaches!';
        console.log(resp);
        res.send(resp);
});

app.listen(3000, () => console.log('Croc app listening on port 3000!'))
