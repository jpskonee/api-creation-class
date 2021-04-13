const { json } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const port = 3000;
const LOCAL_DB = "mongodb://localhost/cart"
const ONLINE_DB = "mongodb+srv://jpskonee:jpskonee@cluster0.rfukp.mongodb.net/moneyDB?retryWrites=true&w=majority"


const app = express()
app.use(express.json());

mongoose.connect(ONLINE_DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
   console.log(`DB connected to ${LOCAL_DB}`) 
});

const myViews = require("../MVC/Component/Controller")
app.use("/", myViews )


app.listen(port, () => {
    console.log(`Server is up and running and listening on port${port}`);
})