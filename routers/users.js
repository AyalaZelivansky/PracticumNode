const express = require("express")
const router = express.Router()
const User = require("../models/users");
const {addUser,deleteUser,updateUser,getUserById} = require("../Controllers/Users");



router.post('/', addUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);
router.get('/:userId',getUserById);




module.exports = router