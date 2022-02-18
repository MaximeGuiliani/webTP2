import express from 'express';
import usersHandler from './users-handler';
import asyncHandler from 'express-async-handler';
const usersRouter = express.Router();
let users = [{
    firstName: 'Maxime',
    lastName: 'Guiliani',
    email: 'maxime.guiliani@etu.univ-amu.fr',
    diploma: 'License 3 Informatique',
    options: ['web application', 'basket']
}];

usersRouter.get('/', asyncHandler(usersHandler.getUsers));
usersRouter.post('/', asyncHandler(usersHandler.create));
usersRouter.get('/', usersHandler.getUsers);
usersRouter.post('/', usersHandler.create);
usersRouter.post('/', function (req, res) {
    const userExist = users.find(user => user.firstName === req.body.firstName);

    if (userExist) {
        res.send({});
    } else {
        users.push(req.body);
        res.send({
            firstName: 'ok'
        });
    }
})
usersRouter.get('/', function (req, res) {
    res.send(users);



})


export default usersRouter;