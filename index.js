const app = require ('./app.js');
const config = require('./config.js');
const database = require('./database');

database()
  .then(db => {
    const info = db.connections[0]
    
    console.log(`Connected to ${info.host}: ${info.port}/${info.name}`)

    app.listen(config.PORT)
  })
  .catch(() => {
    console.log(`Unable to connect database`)
    process.exit(1)
  })