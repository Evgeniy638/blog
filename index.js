const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

const data = ['hello', 'world', '!']
 
app.get('/', function (req, res) {
  res.render('index', {data})
})

app.get('/create', function (req, res) {
    res.render('create')
})

app.post('/create', (req, res) => {
    data.push(req.body.text)
    res.redirect('/')
})
 
app.listen(3000)