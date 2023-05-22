const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const VisitationListRoutes = require('./routes/api/VisitationList')

const path = require('path')
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, './develop.env') })

app.use(cors())
app.use(bodyParser.json())

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))

app.use('/api/visitationlist', VisitationListRoutes)
app.listen(3000, () => console.log(`App listening at http://localhost:3000`))