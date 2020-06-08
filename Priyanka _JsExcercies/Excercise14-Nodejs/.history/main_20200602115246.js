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
    const pid = req.query.pid;
    const name = req.query.name;
    const age = req.query.age;
    const hno = req.query.hno;
    const street = req.query.street;
    const colName = req.query.colName;
    const contact = new Contact(pid,name,age,hno,street,colName);
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
    let contctDetails = [];
    for (const contact of contacts) {
        contctDetails.push(contact.getJson());
    }
    res.send({
        message: 'Success',
        data:contctDetails
    });
        
});