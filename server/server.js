const express = require('express');
const app = express();

app.get("/api", (req,res)=>{
    res.json({'users':['userOne','UserTwo','UserThree']})
})

app.listen(5000, ()=>{ console.log('server started')})