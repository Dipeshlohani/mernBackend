const mongoose = require('mongoose');
const dbConfig = require("../config/db.config.js");

mongoose.Promise = global.Promise;

const db = {};
db.url = dbConfig.url;
db.mongoose = mongoose;
db.user = require("./user.model");
db.role = require("./role.model");
db.ROLES = ["user", "admin", "moderator"];

module.exports = db;