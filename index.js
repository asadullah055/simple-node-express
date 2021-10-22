const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello form node, I am excited, i am heinvi')
})

const users = [
    { id: 0, name: 'sabana', email: 'sabana@gmail.com', phone: '01789964545' },
    { id: 1, name: 'sabnur', email: 'sabnur@gmail.com', phone: '01789964545' },
    { id: 2, name: 'susmita', email: 'susmita@gmail.com', phone: '01789964545' },
    { id: 3, name: 'sonia', email: 'sonia@gmail.com', phone: '01789964545' },
    { id: 4, name: 'suchorita', email: 'suchorita@gmail.com', phone: '01789964545' },
]

app.get('/users', (req, res) => {
    // console.log(req.query.search);
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users)
    }

});
// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log("hitting post", req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})


app.listen(port, () => {
    console.log('listening to port', port);
});
