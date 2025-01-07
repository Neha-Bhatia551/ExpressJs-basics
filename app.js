const express= require('express');
const app= express();
const path = require('path');   


//setup static and middleware  
app.use(express.static('./public')); 

// app.get("/", (req,res) => {
//     console.log(__dirname);
//     res.sendFile(path.resolve(__dirname, "basics/navbar-app/index.html"));
// }); 

app.all('*',(req,res) => {
    res.status(404).send("<h1>Resource not found</h1>");
})

app.listen(3000,() => {
    console.log('Server is listening on port 3000...');   
})