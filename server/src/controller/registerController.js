const newuserModel = require('../model/newuserModel');
const Register = require('../model/registerModel');
const { create, view, update, removedata,newuser} = require('../service/service');
module.exports = {
    addData:(req,res)=>create(req,res,Register),
    readdata:(req,res)=>view(req,res,Register) ,
    deletedata: (req,res)=>removedata(req,res,Register),
    updatedata: (req,res)=>update(req,res,Register) ,
    addnewuser:(req,res)=>create(req,res,newuserModel),
    }
