const express = require('express');
const router = express.Router();


let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    },
];

// GET request: Retrieve all users
router.get("/",(req,res)=>{
      res.send(users);
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email",(req,res)=>{
  
    const email = req.params.email;
    let matched_users = users.filter( (e) => e.email === email);
    res.send(JSON.stringify({matched_users},null,4));
});


// POST request: Create a new user
router.post("/",(req,res)=>{

    const {firstName, lastName, email, DOB} =
        req.query;
    users.push
    (
        { firstName:firstName , lastName:lastName , email:email, DOB:DOB}
    );

    res.send( "users is updated as " + users.reduce( (result, e) =>  result + " " + e.firstName, "" )); 

});


// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {

    const email = req.params.email;
    const DOB = req.query.DOB;
    users.filter( (e) => e.email === email).forEach( (e) => e.DOB = DOB);
    res.send(JSON.stringify({users},null,4));
});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  
    const email = req.params.email;
    users = users.filter( e=> e.email != email);
    res.send(JSON.stringify({users},null,4));
});

module.exports=router;
