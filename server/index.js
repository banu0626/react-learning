require('dotenv').config()
const express= require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
 
const register = require("./src/routes/registerRoute")
const {DB}=require('./src/config/config')
const {PORT}= require('./src/config/config')

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors());


mongoose.connect("mongodb+srv://first_db_01:first_db_01@afreenmongodb.59imv.mongodb.net/registerdata?retryWrites=true&w=majority", connectionParams).then(() => {
    console.log("mongodb connected");
}).catch((err) => {
    console.log({ err: err });
})

app.use('/api/register', register);


app.listen(PORT, (err) => {
    if (err) {
        console.log({ err: err });
    }
    console.log("server running on port " + PORT);
});