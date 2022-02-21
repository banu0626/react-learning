const Register = require('../model/registerModel');
module.exports = {
    addData: async (req, res) => {
        const register = new Register(req.body);
        try {
            console.log(register)
            await register.save().then((e) => { res.status(200).send("Registered Successfully") })
        }
        catch (err) {
            console.log(err)
            res.status(500).send("Register Failed")
        }
    },
    readdata: async (req, res) => {
        const list = await Register.find()
        try {
            console.log(list)
            res.send(list)
        } catch (err) {
            res.status(500)
        }
    },
    deletedata: async (req, res) => {
        try {
            const data = await Register.findById({ _id: req.params.id })
            if (data) {
                await Register.findByIdAndRemove({ _id: req.params.id })
                res.status(201).send("Deleted Successfully")
            }
            else {
                res.send("User doesn't exist!" )
            }
        } catch (err) {
            res.status(500).send("Invalid Id");
        }
    },
    updatedata: async (req, res) => {
        const updates = await Register.findByIdAndUpdate({ _id: req.params.id }, req.body)
        try {
             updates.save()
            res.send(updates)
        } catch (err) {
            res.status(500).send("Updation Failed");
        }
    }
}