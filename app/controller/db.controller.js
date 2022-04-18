const db = require("../models");
const Tutorial = db.tutorials;
// Create and Save a new Tutorial

exports.create = (payload) => {
    return Tutorial.create(payload)
};
// Retrieve all Tutorials from the database.
exports.findAll = (filter) => {
    let fltr = {}
    fltr = filter ? filter : fltr;
    return Tutorial.find(fltr)
};

// Find a single Tutorial with an id
exports.findOne = (id) => {
    return Tutorial.findOne({ _id: id })
};

// Find a single Tutorial with an title
exports.findByTitle = (title) => {
    return Tutorial.findOne({ title: title })
};

// Update a Tutorial by the id in the request
exports.update = (id, payload) => {
    return Tutorial.updateOne({ _id: id }, payload)
};
// Delete a Tutorial with the specified id in the request
exports.delete = (id) => {
    return Tutorial.deleteOne({ _id: id })
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};
