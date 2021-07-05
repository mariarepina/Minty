require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const sessions = require('express-session') // Для чтения сессии 
const MongoStore = require('connect-mongo'); // Пакет, необходимый для хранения сессий в базе данных mongoDB
const path = require('path')
const { connect, disconnect } = require('./db/connect')
// const userRouter = require('./routes/userRouter')
// const pageRouter = require('./routes/pageRouter')
// const itemRouter = require('./routes/itemRouter')

connect()

const PORT = process.env.PORT || 8080
const app = express()



app.set('cookieName', 'sid')


const secretKey = require('crypto').randomBytes(64).toString('hex');



app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



// app.use('/', pageRouter)
// app.use('/users', userRouter)
// app.use('/items', itemRouter)


app.listen(PORT, () => {
  console.log('Сервер был успешно запущен на порту: ', PORT)
})
