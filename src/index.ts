import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello!')
});

app.get('/info', (req, res) => {
    res.send('Hello from info page!')
});

const port = 3000;
const host = '0.0.0.0';
app.listen(port, host, () => console.log(`Listening on port ${port}.`));