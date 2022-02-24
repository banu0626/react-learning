const express = require("express");
const router = express.Router()

const registerController = require("../controller/registerController");


router.post('/',registerController.addData);
router.get('/view',registerController.readdata);
router.delete('/:id',registerController.deletedata);
router.patch('/:id',registerController.updatedata);

router.post('/register',registerController.addnewuser);
module.exports = router