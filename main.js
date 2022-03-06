const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Bpium in progress...')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})