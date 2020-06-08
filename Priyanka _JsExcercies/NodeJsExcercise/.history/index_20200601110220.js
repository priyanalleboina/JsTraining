const express = require ('express');
const app = express();

const port = 4000;

app.listen(port,()=> {
    console.log("listen Succesfully with port" +port)

});
app.get('/',(req,res)=>{
console.log("hello world");
res.send("Success");
    
});