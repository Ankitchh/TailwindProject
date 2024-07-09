require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express();
const port=process.env.PORT||5000;


app.use(express.static(path.join(__dirname, '/public')));

app.use((req, res)=>{
    res.status(404);file:///home/ankit/Desktop/workspace/resturantProject
    
    res.sendFile('/home/ankit/Desktop/workspace/ResturantProject/public/error.html')
});

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
})