// imports
const express = require('express')

//configs
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let USERS = [];

//logic
app.get('/', (req, res) => {
    res.send("Hello world");
});

app.get('/echo/:msg', (req, res) => {
    res.send(req.params.msg);
});

app.post('/echo', (req, res) => {
    res.send(req.body);
});

app.post('/users', (req, res) => {
    let user = {
        name: req.body.name,
        pass: req.body.pass,
    };
    USERS.push(user);
    res.send("User has been added");
})

app.get('/users', (req, res) => {
    res.send(USERS);
});

app.put('/users', (req, res) => {
    let userupdate = USERS.find(user => user.name === req.body.name);
    userupdate = req.body;
    res.send("user has been updated");
});

app.delete('/users', (req, res) => {
    USERS.pop(user => user.name === req.body.name);
    req.send("user has been deleted");
});

//listen
app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
});