module.export={
    create:async(req,res,model)=>{
        const model = new model(req.body);
        try{
            console.log(model)
            await model.save().then((e)=>{res.status(200).send("Registered Successfully")})
        }
        catch(err){
            console.log(err)
            res.status(500).send("Register Failed")
        }
    }
}