import express from 'express';
import usersRouter from './services/users-routage';

const app = express();
app.use(express.json());

app.use('/users', usersRouter);
app.use(express.static('./app/etudiants'))
app.get('/', function (req, res) {
    res.sendFile('index.html');
});
app.listen(8080);