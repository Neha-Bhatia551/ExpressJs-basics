//express js is built on top of node 
//express js is a web application framework for node js
//cannot use express js without node js
//express js is used to build web applications and API's 

const express = require('express');
const app= express();

app.get('/',(req, res) => {
    res.status(200).send("hello world");
});

app.get('/about',(req, res) => {
    res.status(200 ).send("about page");
});

//if url input from user is not defined in the app, then we use app.use
app.use('*', (req,res) => {
    res.status(404 ).send("<h1>404 Page Not Found</h1>");
})


app.listen(3000, () => {
    console.log('Server is listening on port 5000...'); 
});