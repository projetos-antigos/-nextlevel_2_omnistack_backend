import express from 'express';

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.get('/users',(req,res)=>{
    return res.send({users:[]})
})

app.listen(3333,()=>{
    console.log("Server running in port 3333!")
})