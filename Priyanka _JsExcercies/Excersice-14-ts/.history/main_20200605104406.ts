
app.get('/index.html', (req:any, res:any) => {
    fs.readFile('index.html', function(err:any, data:any) {
        res.write(data);
        return res.end();
      });

});

app.get('/create', (req:any, res:any) => {
    console.log("message");
    const pid:number = req.query.pid;
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