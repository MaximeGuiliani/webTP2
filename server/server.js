import express from 'express';
import router from './services/users';

const app = express();
app.use(express.json());

app.use('/users', router);
app.use(express.static('./app/etudiants'))
app.get('/', function (req, res) {
    res.sendFile('index.html');
});
app.listen(8080);