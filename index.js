require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send("This is About Page of this app")
})

app.get('/login', (req, res) => {
    res.send('<h1>This is Login Page</h1>')
})

app.get('/register', (req, res) => {
    res.send('<h1>This is register Page</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})