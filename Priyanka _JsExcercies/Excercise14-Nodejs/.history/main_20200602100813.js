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
    res.send({
        message: "data"
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