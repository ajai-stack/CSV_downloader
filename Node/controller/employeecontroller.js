const regmodel= require('../model/employee');

// insert method 

module.exports= {
create: (req, res) => {
    let employee = new regmodel({

        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password:req.body.password,
        mobilenumber:req.body.mobilenumber
        
     })
     employee.save()
     .then(result => {
         res.json({ success: true, result: result})
     }) 
     .catch(err => {
          res.json({ success: false, result: err})
      })
},


// retrive 

retrieve: (req, res) => {
    regmodel.find()
    .then(employee => {
        res.send(employee);
    })
    .catch(err => {
        res.json({ success: false, result: "No register found"})
    })
},

}