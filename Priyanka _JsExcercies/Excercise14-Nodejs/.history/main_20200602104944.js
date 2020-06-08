const express = require ('express');
const Contact  = require('./contact');
const app = express();
let contacts = [];

const port = 4000;

app.listen(port,()=> {
    console.log("listen Succesfully with port ", port)

});
app.get('/',(req,res)=>{
console.log("hello world");
res.send("Success");
    
});
app.get('/create',(req,res)=>{
    console.log("message");
    const name = req.query.name;
    const age = req.query.age;
    const contact = new Contact(name,age);
    contacts.push(contact);
    res.send({
        message: "Successfully added contacts..."
    });
        
});
app.get('/getAll',(req,res)=>{
    console.log("GetAll COntacts");
    if(contacts.length === 0){
        res.send({
            message:"Empty Contacts"
        });
        return;
    }
    let contcDetails = " ";
    for (const contact of contacts) {
        contcDetails += contact.describe();
    }
    res.send({
        message: contcDetails
    });
        
});