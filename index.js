const express = require('express')

const app = express();
app.use(express.json());
const PORT = 3000;

app.listen(PORT, () => console.log(`servidor corriendo en puerto ${PORT}`));

app.post('/hook', (req, res) => {
    const challenge = req.body.challenge;
    res.send({ challenge });

    console.log(req.body);
    res.status(200).end();
})