import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/adatok', (req, res) => {
    fs.readFile('./adatok.json', (err, file) => {
        res.send(file);
    })
})


app.listen(6001, () => {
    console.log('sikeres csatlakozás!');
})