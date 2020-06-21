const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const fileUpload = require('express-fileupload')


const api = require('./routes')

var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./doc/swagger.json');

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(fileUpload());


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/v1', api)


// Route Not Found
// Handle 404
app.use(function (req, res) {
    res.json({"response": "404: Page not Found"});
});

// Handle 500
app.use(function (error, req, res, next) {
    res.send('500: Internal Server Error', 500);
});
// Route Handle Errors
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
    next(error);
});


module.exports = app