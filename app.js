//imports 
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 3000


//static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/css'))
app.use('/imgs', express.static(__dirname + 'public/css'))

const urilink = ('mongodb+srv://cluster0.8msb7.mongodb.net/myGroup32db?appName=mongosh+1.3.1');
mongoose.connect(urilink, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))


//set views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('login')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/register', (req, res) => {
    res.render('userregister')
})

app.get('/home', (req, res) => {
    res.render('home32')
})

app.get('/profile', (req, res) => {
    res.render('user_profile')
})

app.get('/fuelhistory', (req, res) => {
    res.render('fuel_history')
})

app.get('/fuelquote', (req, res) => {
    res.render('fuel_quote')
})

// app.get('/profile', (req, res) => {
//     res.render('fuel_quote')
// })



//listen on port 3000
app.listen(port, () => console.info('Listening on port ${port}'))