"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

let users = [{
  firstName: 'Maxime',
  lastName: 'Guiliani',
  email: 'maxime.guiliani@etu.univ-amu.fr',
  diploma: 'License 3 Informatique',
  options: ['web application', 'basket']
}];
router.get('/', function (req, res) {
  res.send(users);
});
var _default = router;
exports.default = _default;