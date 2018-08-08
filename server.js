require('babel-register')

const app = require('./app')
const port = 3000

app.listen(port, () => {
  console.log('Server started at port 3000!')
})
