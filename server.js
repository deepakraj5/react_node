const express = require('express')
// const cors = require('cors')
const path = require('path')

const app = express()

// app.use(cors())

app.get('/api/test', (req, res) => {
    res.send({ message: 'success'})
})

app.use(express.static('client/build'))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

app.listen(5000, () => {
    console.log('server upon running on 5000')
})