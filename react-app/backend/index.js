var express = require("express")
var path = require('path')
var app = express()
app.use(express.json())
var mongoose = require("mongoose")
var user_schema = require('./models/users')
app.use(express.urlencoded({ extended: true }))
const port = 3002

mongoose.connect("mongodb://localhost:27017/FSD").then(() => {
    console.log("MongoDb connected successfully");
}).catch(() => {
    console.log("check your connection string");
})

app.get("/", (req, res) => {
    res.send("Welcome Mathav Ramalingam")
})
app.get('/sign', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'))
})

app.post('/sign', (req, res) => {
    console.log(req.body);
    // var { firstname, lastname, email } = req.body;
    // console.log(firstname, lastname, email);

    // try {
    //     var newuser = new user_schema({
    //         firstname: firstname,
    //         lastname: lastname,
    //         email: email
    //     })
    try {
        var newuser = new user_schema(req.body)
        newuser.save()
        console.log("user added successfully");
        res.status(200).send("user added successfully");
    }
    catch (err) {
        console.log(err);
    }
})
app.get('/getsign', async (req, res) => {
    try {
        var getrecords = await user_schema.find()
        res.json(getrecords)
        console.log(getrecords)
    }
    catch (err) {
        console.log(err);
        res.send(err)
    }
})
app.get("/json", (req, res) => {
    res.send("Hii this is JSON")
})
app.get("/static", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
    console.log(`Sever Started URL:http://localhost:${port}`);
})