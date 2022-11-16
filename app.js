const express = require('express')
const chalk = require('chalk')
const mongoose = require('mongoose')
require('dotenv').config();
const passport = require('passport');
const cors = require('cors')
const path = require('path')
const adminRoute = require('./routes/adminRoute')
const productsRoute = require('./routes/productsRoute')
const customersRoute = require('./routes/customersRoute')
const uploadsRoute = require('./routes/uploadsRoute')
const paymentRoute = require('./routes/paymentRoute')
const searchRoute = require('./routes/searchRoute')

const app = express()

app.use(express.static('public')),  //make the public directory public
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(passport.initialize())
require('./passport')(passport)
app.use('/api/ssl-commerce', paymentRoute)
app.use('/api/admin', adminRoute)
app.use('/api/products', productsRoute)
app.use('/api/customers', customersRoute)
app.use('/api/uploads', uploadsRoute)
app.use('/api/search', searchRoute)

//------for heroku hosting
if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve(__dirname, 'client', 'build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
//------for heroku hosting

//------ for vercel hosting 

// app.use(express.static(path.join('./client/build')))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"))
// })

//------ for vercel hosting 

// if(app.get('env') === 'development') {
//     app.use('dev')
// }

app.get('/', (req, res) => {
    res.send('<h1>Welcome To Ecommerce One API site</h1>')
})

//error handling

app.use((req, res, next) => {
    let error = new Error('404 page not found')
    error.status = 404
    next(error)
})
app.use((error, req, res, next) => {
    if(error.status === 404) {
        return res.send('Page Not Found')
    } else {
        console.log(error)
        return res.send('Server error occured')
    }
})

const PORT = process.env.PORT || 8080
const MONGODB_URI = `mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASSWORD}@cluster0.p4dm8.mongodb.net/ecommerce?retryWrites=true&w=majority`

// const MONGODB_URI = `mongodb://localhost:27017/ecommerce`



mongoose.connect(MONGODB_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(() => {
        console.log(chalk.red(`Database Connected`))
        app.listen(PORT, () => {
            console.log(chalk.blue(`Listening PORT: ${PORT}`))
        })
    })
    .catch(e => {
        console.log(e)
    })

    