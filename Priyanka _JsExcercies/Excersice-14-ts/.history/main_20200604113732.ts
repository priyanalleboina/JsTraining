//const express = require('express');
import * as express from "express";
//const Contact = require('./contact');
 import Contact from './contact';
// const Address = require('/address');
const app = express();
let contacts = new Array();
// let contctDetails = [];
const port:number = 4000;

app.listen(port, () => {
    console.log("listen Succesfully with port ", port)

});
app.get('/', (req:any, res:any) => {
    console.log("hello world");
    res.send("Success");

});
app.get('/create', (req:any, res:any) => {
    console.log("message");
    const pid:number = document.getElementById('id').value;
    const name:string = req.query.name;
    const age :number= req.query.age;
    const hno:string = req.query.hno;
    const street:string = req.query.street;
    const colName:string = req.query.colName;
    const contact = new Contact(pid,name, age, hno, street, colName);
    contacts.push(contact);
    res.send({
        message: "Successfully added contacts..."
    });

});
app.get('/getAll', (req:any, res:any) => {
    console.log("GetAll COntacts");
    if (contacts.length === 0) {
        res.send({
            message: "Empty Contacts"
        });
        return;
    }

   let contctDetails = [];
    for (const contact of contacts) {
        contctDetails.push(contact.getJson());
        // contctDetails += contact.describe();
    }
    res.send({
        message: 'Success',
        data: contctDetails
    });

});
app.get('/searchByName', (req:any, res:any) => {
    const searchValue = req.query.name;
    console.log("Search Data");
    // console.log(contctDetails);
    let searchData = new Array();
    let filterdData = new Array();

    filterdData = contacts.filter(data => {
        if (data.name == searchValue) {
            return filterdData;
        }
    });
    res.send({
        data: filterdData,
        message: "Filterd"
    });

})