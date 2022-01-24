const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const { response, request } = require("express");

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// create
app.post('/insert',(request,response)=>{

});

// read
app.get('/getAll',(request,response)=>{
    response.json({
        success: true
    });
});

// update


// delete


app.listen(process.env.PORT,()=>{
    console.log('App is running');
})