module.exports = {
  create: async (req, res, Model) => {
    const model = new Model(req.body);
    try {
      console.log(model);
      await model.save().then((e) => {
        res.status(200).send("Registered Successfully");
      });
    } catch (err) {
      console.log(err);
      res.status(500).send("Register Failed");
    }
  },
  view: async (req, res,model) => {
    const list = await model.find();
    try {
      console.log(list);
      res.send(list);
    } catch (err) {
      res.status(500);
    }
  },
  removedata: async (req, res,model) => {
    try {
      const data = await model.findById({ _id: req.params.id });
      if (data) {
        await model.findByIdAndRemove({ _id: req.params.id });
        res.status(201).send("Deleted Successfully");
      } else {
        res.send("User doesn't exist!");
      }
    } catch (err) {
      res.status(500).send("Invalid Id");
    }
  },
  update: async (req, res,model) => {
    const updates = await model.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    try {
      updates.save();
      res.send(updates);
    } catch (err) {
      res.status(500).send("Updation Failed");
    }
  }
}
