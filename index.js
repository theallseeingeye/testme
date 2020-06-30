const {hellome, secondtest} = require('./test')

const express = require('express')
const app = express()
const port = 8010

app.get('/', (req, res) => res.send('Hello! you have found me on this linux machine!'))

function testme(value) {
    return value
}

// Okay this is a note
testme('HELLO!');
testme('Cool Cakes!');
console.log('hellometest', hellome());
console.log('seccondtest', secondtest());
console.log('This is an added feature');
console.log('This is an added feature');
console.log('This is an added feature');
console.log('This is an added feature');
console.log('This is an added feature');
console.log('This is an added feature');
console.log('This is an added feature');
app.listen(port, () => console.log(`Listening on http://127.0.0.1:${port}`))
