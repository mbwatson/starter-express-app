const express = require('express')
const app = express()
const port = 3030

app.listen(port, () => {
    console.log(`Listening on port ${ port }.`)
})

app.get('/', (req, res) => {
        res.send('Hello, from om Express!')
    }
)