const express = require("express")
const router = express.Router()
const User = require("../models/users");
const {addUser,deleteUser,updateUser} = require("../controllers/Users");



router.post('/', addUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);




module.exports = router