require('dotenv').config();
const { get } = require("env-var")


const envs = {
    PORT: get('PORT').default('5050').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}

module.exports = {
    envs
}