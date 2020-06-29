const app = require ('./app.js');
const config = require('./config.js');
const database = require('./database');

database()
  .then(info => {
    console.log(`Connected to ${info}: ${info.port}/${info.name}`)
    console.log(info)
    app.listen(config.PORT)
  })
  .catch(() => {
    console.log(`Unable to connect database`)
    process.exit(1)
  })