const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// MongoDBconnection 
mongoose.connect("mongodb://0.0.0.0:27017/EmployeeDB", { useNewUrlParser: true })
    .then(() => console.log('connected to database'))
    .catch(Error => console.log(Error))


//  middleware 
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

//access control api
app.get("/", (req, res, next) => {
    res.json({ msg: "server starts" })

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE,');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'origin,X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
})

//Start Server
app.listen(3400, () => console.log("Server started on 3400"))


// routing api 
const employeecontroller = require('./controller/employeecontroller');

app.post('/api/register/create', employeecontroller.create);
app.get('/api/register/retrieve', employeecontroller.retrieve);
