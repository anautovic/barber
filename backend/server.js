import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import cors from 'cors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'


dotenv.config()

connectDB()

const app = express()


if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(express.json())

app.use('/api/products', cors(corsOptions), productRoutes)
app.use('/api/users', cors(corsOptions), userRoutes)
app.use('/api/orders', cors(corsOptions) , orderRoutes)
app.use('/api/upload', cors(corsOptions), uploadRoutes)

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

const __dirname = path.resolve()
app.use('/uploads', cors(corsOptions), express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use( cors(corsOptions) ,express.static(path.join(__dirname, '/my-app/build')))

  app.get('*', cors(corsOptions), (req, res) =>
    res.sendFile(path.resolve(__dirname, 'my-app', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)