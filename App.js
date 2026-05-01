const exp = require('express');
const cors = require('cors');
const path = require('path')
const app = exp();

app.use(exp.json());
app.use(cors());

const Port = 3060

app.use(exp.static(path.join(__dirname, '/Pubilc')))

const page = path.join(__dirname, '/index.html')

let Data = [];


app.get('/Sign', (req,res) => {
    res.sendFile(page)
})


app.post('/SIGN', (req,res)=> {
    let NewData = {
        Name : req.body.Name,
        Last : req.body.Last,
        Number : req.body.Numbers,
        Email : req.body.Email,
        Date : req.body.Date
    }

    Data.push(NewData)
    res.status(201).json(({
        mess : 'Sign in Sucess',
        DATA : NewData
    }))
})

app.use('/', (req,res) => {
    res.status(404).send('Not Found!')
})

app.listen(Port, ()=> {
    console.log('Start Server on port : ' + Port)
})