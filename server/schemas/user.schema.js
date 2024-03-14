const joi = require("joi");

const registerSchema = joi.object({
    userId: joi.string().email().required(),
    favoriteImage: joi.string().required(),
});

module.exports = { registerSchema };