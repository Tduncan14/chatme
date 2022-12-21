const express= require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')


dotenv.config()
const app = express()







const port = process.env.PORT || 8000 


mongoose.connect((process.env.MONGO_URI),
    {useUnifiedTopology: false})
.then(
    console.log('connected to database')
)


app.listen(port,() => {

    console.log(`listening on ${port}`)
})


