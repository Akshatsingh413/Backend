const express = require('express')

const app = express()

app.use(express.json())
let users=[
    {id: 1, name:'John Doe', age:40},
    {id: 1, name:'John Doe', age:40},
    {id: 1, name:'John Doe', age:40}
]

app.get('/users',(req,res)=>{
    res.json(users);
})

app.post('/users',(req,res)=>{
    const {username,password} = req.body;
    console.log(`user ${username} and Password ${password}`)
    res.json({message:"Data received"});

})

app.post('/reg',(req,res)=>{
    const newUsers = req.body;
    const newId = users.length > 0 ? users[users.length-1].id+1 : 1;
    newUsers.id = newId;
    users.push(newUsers)
    res.json(newUsers);

})

app.listen(9000,()=>{
    console.log('Server is running on port 9000');
});