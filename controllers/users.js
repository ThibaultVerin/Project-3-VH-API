const {findAll, findOne, createUser, deleteUser, updateUser} = require ('../models/users.js')

module.exports.handleAllUsers = async (req, res) => {
    const rawData = await findAll();
    res.json(rawData)
}

module.exports.handleAnUser = async (req, res) => {
    const rawData = await findOne(req.params.id);
    res.json(rawData)
}

module.exports.handleOneUserCreation = async (req, res) => {
    const createdUser = await createUser(req.body);
    return res.status(201).json(createdUser)
}

module.exports.handleOneUserDeletion = async (req, res) => {
    await deleteUser(req.params.id);
    res.sendStatus(204)
}

module.exports.handleOneUserUpdate = async (req, res) => {
    const rawData = await updateUser(req.params.id);
    res.json(rawData)
}

