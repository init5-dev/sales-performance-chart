import express from 'express'
import db from './db/connection.mjs'

const app = express()
const SERVER_PORT = 3000

app.set('port', SERVER_PORT)

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
    const collection = await db.collection("products")
    const data = await collection.find({}).toArray()
    console.log(data)
    res.status(200).json({ message: 'Hello' })
})

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})