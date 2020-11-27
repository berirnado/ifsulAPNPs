const mongoose = require('mongoose')
const mongoUrl = "mongodb+srv://berirnado:STwWbp8yseRkGmhL@cluster0.fba8o.mongodb.net/apnp?authSource=admin&replicaSet=atlas-8dii91-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"

mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true})

module.exports = mongoose