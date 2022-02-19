"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _usersRepository = _interopRequireDefault(require("./users-repository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getUsers(req, res) {
  try {
    const result = await _usersRepository.default.getAll();
    const finalArray = [];

    for (let obj of res.body.hits.hits) {
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
      await _usersRepository.default.store(req.body);
      res.send(firstName = 'ok');
    }
  } catch (e) {
    res.status(400).end();
  }
}

async function userExist(firstName) {
  try {
    // TODO : ERROR here
    const result = await _usersRepository.default.getUser(firstName);
    return res.body.hits.total.value > 0 ? true : false;
  } catch (e) {
    console.log('error getting user', e);
    return false;
  }
}

async function userDelete(req, res) {
  try {
    console.log(req.params.id);
    const userBool = await userExist(req.params.id);

    if (!userBool) {
      res.status(404).end();
    } else {
      const result = await _usersRepository.default.remove(req.params.id);
      res.send(result);
    }
  } catch (e) {
    res.status(error.status || 400).end();
  }
}

var _default = {
  getUsers,
  create,
  userExist,
  userDelete
};
exports.default = _default;