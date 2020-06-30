const express = require('express')
const app = express()
const port = 8005

app.get('/', (req, res) => res.send('Hello! you have found me on this linux machine!'))

function testme(value) {
    return value
}

testme('HELLO!');

app.listen(port, () => console.log(`Listening on http://localhost:${port}`))
