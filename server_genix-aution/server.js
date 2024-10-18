require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const { logger } = require('./server/middleware/logger')
const errorHandler = require('./server/middleware/error-handler')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const connectDB = require('./server/config/dbConfig')
const PORT = process.env.PORT || 3500

console.log(process.env.CURR_ENV)

connectDB()

app.use(logger)

app.use(cors())

app.use(express.json())

app.use(cookieParser())

app.use('/', express.static(path.join(__dirname, 'asset')))

app.use('/', require('./server/routes/root'))

app.use('/user', require('./server/routes/userRoutes'))

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'server', 'utils', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})

app.use(errorHandler)

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})