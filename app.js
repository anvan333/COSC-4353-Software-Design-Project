if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const userSchema = new mongoose.Schema({ 
    full_name: { type: String, required: true }, 
    street1: { type: String, required: true },
    street2: String,
    city: { type: String, required: true }, 
    zip: { type: Number, required: true },
    state: { type: String, required: true },
    username: { type: String, required: true }
});
const userInfoSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    new_user: { type: Boolean, default: true},
});
const fuelQuoteSchema = new mongoose.Schema({
    gallons: { type: Number, required: true },
    delivery_address: { type: String, required: true},
    delivery_date: { type: Date, required: true },
    price_per: { type: Number, required: true },
    total: { type: Number, required: true },
    username: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
const FuelQuote = mongoose.model("FuelQuote", fuelQuoteSchema);

const UserInfo = require('./models/UserInfo')
const initializePassport = require('./passport-config') 
const { join } = require('path')
const { truncateSync } = require('fs')

//imports 
const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const path = require("path")

const uri = "mongodb+srv://dbUser:group10SD@sdproject.ebxx7.mongodb.net/database1?retryWrites=true&w=majority"
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))



//static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/css'))
app.use('/imgs', express.static(__dirname + 'public/css'))


//set views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', checknotAuthenticated, (req, res) => {
    res.render('login')
})

app.get('/login', checknotAuthenticated, (req, res) => {
    res.render('login')
})

app.get('/register', checknotAuthenticated, (req, res) => {
    res.render('userregister') 
    try{
        const hashedPassword = await bcrypt.hash(req.body.inputPassword, 10 )
        users.push({
            id: Date.now().toString(),
            inputUsername: req.body.inputUsername,
            inputPassword: hashedPassword
        })
      await UserInfo.find({ username: req.body.inputUsername }).then((users) =>{
          if (users.length > 0){
              // console.log(users.length);
              //users.splice(0, users.length);
              res.redirect('/register');
          } else{
              const userInfo = new UserInfo ({
                  username: req.body.inputUsername,
                  password: hashedPassword,
                  new_user: true
              })
              userInfo.save();
              console.log(userInfo);
              res.redirect('/login')
          }
      })
      } catch{
        res.redirect('/register')
      }
  })

app.get('/home', checknotAuthenticated, (req, res) => {
    res.render('home32')
})

app.get('/profile', checknotAuthenticated, (req, res) => {
    res.render('user_profile', {full_name: userInfo.full_name, 
        street1: userInfo.street1, 
        street2: userInfo.street2,
        state: userInfo.state,
        city: userInfo.city,
        zip: userInfo.zip});
    })

app.get('/fuelhistory', checknotAuthenticated, (req, res) => {
    await FuelQuote.find(filter).then((quotes) =>{
        var i = 0;
        for (i = 0; i < quotes.length; i++){
            hist.push({
                gallons: quotes[i].gallons,
                d_address: quotes[i].delivery_address,
                d_date: quotes[i].delivery_date,
                price_per: quotes[i].price_per,
                total: quotes[i].total
            });
        }
        console.log(hist);
    })
    res.render('fuel_history', {hist: hist});
    hist.splice(0, hist.length);
})

app.get('/fuelquote', checknotAuthenticated, (req, res) => {
    let currentDate = new Date();
    let cDay = currentDate.getDate()
    let cMonth = currentDate.getMonth() + 1
    let cYear = currentDate.getFullYear()
    let min_date = cYear + '-' + cMonth + '-' + cDay
    if(cMonth < 10){
        min_date = cYear + '-0' + cMonth
        if(cDay < 10){
            min_date = min_date + '-0' + cDay
        } else{
            min_date = min_date + '-' + cDay
        }
    } else{
        min_date = cYear + '-' + cMonth
        if(cDay < 10){
            min_date = min_date + '-0' + cDay
        } else{
            min_date = min_date + '-' + cDay
        }
    }
    //console.log(min_date)
    res.render('fuel_quote', {user:userInfo, location_f: req.user.first_time, min_date});
})


//listen on port 3000
app.listen(port, () => console.info('Listening on port ${port}'))
