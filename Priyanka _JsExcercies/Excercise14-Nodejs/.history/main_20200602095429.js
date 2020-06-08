const express = require ('express');
import Contact from './contact';
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
app.get('/getall',(req,res)=>{
    console.log("GetAll COntacts");
    if(contacts.length === 0){
        res.send({
            message:"Empty Contacts"
        });
        return;
    }
    for (const contact of contacts) {
        let contcdetails = contact.describe();
    }
    res.send("Success");
        
});