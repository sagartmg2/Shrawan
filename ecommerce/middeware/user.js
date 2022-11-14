
const validate = require("../utils/validate")
const { body } = require('express-validator');

const signup_middleware = validate([
    body("name").exists().withMessage('path name is required'),
    body("role").exists().withMessage('path role is required'),
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
]);

const login_middleware = validate([
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
]);

module.exports = {
    signup_middleware,
    login_middleware
}
