import usersRep from './users-repository';

async function getUsers(req, res) {
    try {
        const result = await usersRep.getAll();
        const finalArray = [];
        for (let obj of result.body.hits.hits) {
            finalArray.push(obj.source);
        }
        res.send(finalArray);
    } catch (e) {
        res.status(400).end();
    }
}


async function create(req, res) {
    res.set('Content-Type', 'application/json');
    try {
        const userBool = await userExist(req.body.firstName);
        if (userBool) {
            res.send({});
        } else {
            await usersRep.store(req.body);
            res.send(
                firstName = 'ok'
            );
        }
    } catch (e) {
        res.status(400).end();
    }
}

async function userExist(firstName) {
    try {
        // TODO : ERROR here
        const result = await usersRep.getUser(firstName);
        return result.body.hits.total.value > 0 ? true : false;
    } catch (e) {
        console.log('error getting user', e);
        return false;
    }
}

async function userDelete(req, res) {
    try {
        console.log(req.params.id)
        const userBool = await userExist(req.params.id);
        if (!userBool) {
            res.status(404).end();
        } else {
            const result = await usersRep.remove(req.params.id);
            res.send(result);
        }
    } catch (e) {
        res.status(error.status || 400).end();
    }
}

export default {
    getUsers,
    create,
    userExist,
    userDelete,
};