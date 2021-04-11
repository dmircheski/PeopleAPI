const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');
var cors = require('cors');


const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());



mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the databse. Exiting now... ', err);
    process.exit;
})


app.get('/', (req, res) =>  {
    res.json({"message": "Welcome to People API"});
});


require('./app/routes/person.route')(app)
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
