const express = require("express");
const router = express.Router()

const registerController = require("../controller/registerController");
//To Add Form data to database
router.post('/',registerController.addData);
router.get('/view',registerController.readdata);
router.delete('/:id',registerController.deletedata);
router.patch('/:id',registerController.updatedata);
module.exports = router