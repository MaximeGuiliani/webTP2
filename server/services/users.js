import express from 'express';
const router = express.Router();
let users = [{
    firstName: 'Maxime',
    lastName: 'Guiliani',
    email: 'maxime.guiliani@etu.univ-amu.fr',
    diploma: 'License 3 Informatique',
    options: ['web application', 'basket']
}];



router.post('/', function (req, res) {
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
router.get('/', function (req, res) {
    res.send(users);



})


export default router;