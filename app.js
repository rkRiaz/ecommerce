const express = require('express')
const chalk = require('chalk')
const mongoose = require('mongoose')
const config = require('config')

const adminRoute = require('./routes/adminRoute')
const productsRoute = require('./routes/productsRoute')
const customersRoute = require('./routes/customersRoute')
const uploadsRoute = require('./routes/uploadsRoute')





const app = express()
app.use(express.static('public')),  //make the public directory public
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/admin', adminRoute)
app.use('/products', productsRoute)
app.use('/customers', customersRoute)
app.use('/uploads', uploadsRoute)

app.get('/', (req, res) => {
    res.send('<h1>Welcome To My Frist MERN-STACK-Project</h1>')
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
const MONGODB_URI = `mongodb+srv://rkRiaz:r!@z0!726@cluster0-p4dm8.mongodb.net/ecommerce?retryWrites=true&w=majority`


mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log(chalk.red(`Database Connected`))
        app.listen(PORT, () => {
            console.log(chalk.blue(`Listening PORT: ${PORT}`))
        })
    })
    .catch(e => {
        console.log(e)
    })