require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3001
const stocks = require('./modules/stocks/stocks')

app.use(cors())
app.use('/images', express.static('images'))

app.get('/', (req, res) => {
  res.send('Its Wemay');
})

app.get('/stocks', (req, res) => {
  res.send(stocks)
})

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT} `);
})